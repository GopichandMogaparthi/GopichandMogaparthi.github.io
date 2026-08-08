const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

const handleResponse = async (res) => {
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

export const api = {
  getProjects: () => fetch(`${BASE_URL}/projects`).then(handleResponse),
  getProjectById: (id) => fetch(`${BASE_URL}/projects/${id}`).then(handleResponse),
  getSkills: () => fetch(`${BASE_URL}/skills`).then(handleResponse),
  getSkillCategories: () => fetch(`${BASE_URL}/skills/categories`).then(handleResponse),
  sendContactMessage: (data) =>
    fetch(`${BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(handleResponse),
};
