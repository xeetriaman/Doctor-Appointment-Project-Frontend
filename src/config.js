// config.js
export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
// Token is null until the user logs in, so fall back to an empty string
export const token = (localStorage.getItem("token") || "").replace(/['"]+/g, "");
