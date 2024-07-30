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

export const registerProgram = async (formData) => {
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
