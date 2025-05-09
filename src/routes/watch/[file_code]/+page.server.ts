import type { PageServerLoad } from './$types';
import { API_BASE, API_KEY, EMBED_BASE } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
  const file_code = params.file_code;

  const url = `${API_BASE}/api/file/info?key=${API_KEY}&file_code=${file_code}`;
  const res = await fetch(url);

  if (!res.ok) throw new Error('Failed to fetch video info');

  const json = await res.json();
  const raw = json.result?.[0];

  if (!raw) throw new Error('Video not found');

  const file = {
    ...raw,
    protected_embed: `${EMBED_BASE}${raw.protected_embed}`,
    protected_dl: `${EMBED_BASE}${raw.protected_dl}`
  };

  return { file };
};
