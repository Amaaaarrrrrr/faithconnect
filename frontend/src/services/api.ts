import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

API.interceptors.request.use((config) => {
    // Attach token to every request if it exists in localStorage
    if (!config.headers) {
        config.headers = {};
    }
    
    // Get the token from localStorage
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default API;
export const setAuthToken = (token: string | null) => {
    if (token) {
        localStorage.setItem("token", token);
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        localStorage.removeItem("token");
        delete API.defaults.headers.common["Authorization"];
    }
};