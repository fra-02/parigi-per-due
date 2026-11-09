export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80';

export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>) {
  const target = e.currentTarget;
  if (target.src !== FALLBACK_IMAGE) {
    target.src = FALLBACK_IMAGE;
  }
}
