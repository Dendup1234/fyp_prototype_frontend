export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-dvh grid place-items-center p-4 bg-[color:var(--background)]">
      {children}
    </section>
  );
}
