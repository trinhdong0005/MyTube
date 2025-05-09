import type { PageServerLoad } from './$types';
import { API_BASE, API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ url }) => {
  const q = url.searchParams.get('q')?.trim();

  if (!q) {
    return { results: [] };
  }

  const res = await fetch(`${API_BASE}/api/search/videos?key=${API_KEY}&search_term=${encodeURIComponent(q)}`);
  if (!res.ok) throw new Error('Failed to fetch search results');

  const json = await res.json();

  return {
    results: json.result || [],
    query: q
  };
};
