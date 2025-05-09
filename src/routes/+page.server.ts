import type { PageServerLoad } from './$types';
import { API_BASE, API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ url }) => {
  const page = Number(url.searchParams.get('page') || '1');
  const per_page = 16;

  const res = await fetch(`${API_BASE}/api/file/list?key=${API_KEY}&page=${page}&per_page=${per_page}`);
  if (!res.ok) throw new Error('Failed to fetch data from backend');

  const data = await res.json();

  return {
    files: data.result.files,
    totalPages: Number(data.result.total_pages),
    currentPage: page
  };
};
