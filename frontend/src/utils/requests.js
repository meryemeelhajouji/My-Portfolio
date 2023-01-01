import axios from "axios";
const host = "http://localhost:5000";

axios.defaults.withCredentials = true;

// auth API
export async function registerUser(user) {
  const res = await axios.post(`${host}/api/auth/register`, user);
  return res.data;
}
export async function loginUser(user) {
  const res = await axios.post(`${host}/api/auth/login`, user);
  return res.data;
}
export async function addProject(project) {
  const res = await axios.post(`${host}/api/Project/addProject`,project);
  return res.data;
}
export async function getAllProjects() {
  const res = await axios.get(`${host}/api/Project/projects`);
  return res.data;
}

