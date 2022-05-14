import { API_URL } from "./settings";

export function getProjectsService() {
  return fetch(`${API_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json())
    .then(res => res)
    .catch(err => {
      console.error(err);
      return [];
    });
}
