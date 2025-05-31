const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchLots = async () => {
  const res = await fetch(`${API_BASE}/lots`);
  return await res.json();
};
