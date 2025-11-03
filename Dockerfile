# 1. Use an official Node image
FROM node:20-alpine

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy only package files first (better caching)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./ 

# 4. Install deps
RUN npm install
# or: RUN yarn install

# 5. Copy the rest of the app
COPY . .

# 6. Expose the Next.js port
EXPOSE 3000

# 7. Run Next.js in dev mode
CMD ["npm", "run", "dev"]
# or if you use yarn:
# CMD ["yarn", "dev"]
