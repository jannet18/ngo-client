const API_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "https://entrust-backend.onrender.com";

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

export const fetchTeam = async () => {
  const response = await fetch(`${API_BASE_URL}/teams`);
  if (!response.ok) {
    throw new Error("Fetch team failed");
  }
  return response.json();
};

export const mpesaPayment = async (phoneNumber, amount) => {
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

export const createProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: "POST",
    // credentials: 'include'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });
  if (!response.ok) {
    throw new Error("Failed to create product");
  }
  return response.json();
};
