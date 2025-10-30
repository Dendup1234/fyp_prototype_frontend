const BASE_URL = "http://10.2.23.225:5000/api/v1/agency"; // replace with your backend IP

//Send OTP
export const sendOTP = async (email) => {
  const res = await fetch(`${BASE_URL}/auth/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to send OTP");
  return data;
};

// Verify OTP and register agency
export const verifyOTP = async ({ organizationName, email, password, otp }) => {
  const res = await fetch(`${BASE_URL}/auth/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ organizationName, email, password, otp }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to verify OTP");
  return data;
};

// Login  console.log("Data", document.cookie);
export const login = async ({ email, password }) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  console.log(data);
  if (!res.ok) throw new Error(data.message || "Login failed");
  return data;
};

// Resend OTP
export const resendOTP = async (email) => {
  const res = await fetch(`${BASE_URL}/auth/resend-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to resend OTP");
  return data;
};

// Send password reset OTP
export const sendPasswordResetOTP = async (email) => {
  const res = await fetch(`${BASE_URL}/auth/password-reset/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to send reset OTP");
  return data;
};

// Verify password reset OTP
const handleVerify = async () => {
  const otp = code.join(""); // combine 4 digits into a string

  try {
    const res = await fetch(`${BASE_URL}/auth/password-reset/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      Alert.alert("Success", "OTP verified");
      router.push({
        pathname: "/ResetPassword",
        params: { sessionToken: data.resetSessionToken },
      });
    } else {
      Alert.alert("Error", data.message || "Failed to verify OTP");
    }
  } catch (err) {
    Alert.alert("Error", err.message);
  }
};

export async function setNewPassword(payload) {
  const res = await fetch(`${BASE_URL}/auth/password-reset`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload), // Make sure payload has resetSessionToken + newPassword
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.message || `Failed (${res.status})`);
  return data;
}
