const API_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://127.0.0.1:3000";

export const registerVolunteer = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/volunteers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Failed to Register");
    }
    return response.json();
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

export const registerStudent = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchPrograms = async () => {
  const response = await fetch(`${API_BASE_URL}/programs`);
  if (!response.ok) {
    throw new Error("Fetch programs failed");
  }
  return response.json();
};

export const fetchCategories = async (programId) => {
  const response = await fetch(
    `${API_BASE_URL}/programs/${programId}/categories`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
};

export const mpesaPayment = async () => {
  const response = await fetch(`${API_BASE_URL}/stkpush`, {
    method: "POST",
    // credentials: "include"
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phoneNumber, amount }),
  });

  const data = await response.json();
  if (data.success) {
    alert("Payment initiated successfully");
  } else {
    alert("Payment failed");
  }
};
