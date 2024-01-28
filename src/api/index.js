import CONFIG from '../config';

export async function getTodo() {
  const res = await fetch(CONFIG.TODO_URL);
  return res.json();
}
