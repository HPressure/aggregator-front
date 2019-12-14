export async function get29() {
  return fetch("/api/").then(data => data.json());
}
