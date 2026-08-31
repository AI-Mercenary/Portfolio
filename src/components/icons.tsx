import { BRAND_ICONS } from "../brandIcons";

export function BrandIcon({ name, size = 24, color = "currentColor" }: { name?: string; size?: number; color?: string }) {
  if (!name) return null;
  const path = BRAND_ICONS[name];
  if (!path) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

export function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
export function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
export function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SpiderGlyph({ size = 28, color = "#E8192C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 11.5L4.5 10L3 6M9 12.5L4 14L3.5 17M9 13L6 16.5L8 21M9 11L6 7L7.2 3M15 11.5L19.5 10L21 6M15 12.5L20 14L20.5 17M15 13L18 16.5L16 21M15 11L18 7L16.8 3M15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 13.3333 9.21745 12.7175 9.58529 12.2195C9.80373 11.9237 9.91295 11.7758 9.95062 11.7017C9.99705 11.6104 10.0031 11.5944 10.0283 11.4951C10.0488 11.4145 10.0575 11.3103 10.0749 11.1018L10.3255 8.09689C10.3797 7.44678 10.4068 7.12173 10.5437 6.99076C10.6624 6.87726 10.8292 6.82925 10.99 6.86233C11.1756 6.90049 11.3713 7.16144 11.7627 7.68333L12.0002 8L12.2377 7.68333C12.6292 7.16144 12.8249 6.90049 13.0105 6.86233C13.1713 6.82925 13.3381 6.87726 13.4568 6.99076C13.5937 7.12173 13.6208 7.44678 13.675 8.09689L13.9252 11.1017C13.9425 11.3102 13.9512 11.4145 13.9717 11.4951C13.997 11.5944 14.003 11.6104 14.0494 11.7017C14.0871 11.7758 14.1963 11.9237 14.4148 12.2196C14.7826 12.7176 15 13.3334 15 14Z"
        stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export function SpiderLogo({ size = 28, color = "#E8192C" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <ellipse cx="50" cy="42" rx="14" ry="20" fill={color} />
      <circle cx="50" cy="20" r="9" fill={color} />
      {[[-1, 0], [-1, 1], [-1, 2], [1, 0], [1, 1], [1, 2], [-1, 3], [1, 3]].map(([side, i], idx) => {
        const baseX = 50 + side * 14;
        const baseY = 30 + i * 8;
        const endX = 50 + side * 45 + side * (i * 3);
        const endY = 20 + i * 16;
        if (idx >= 6) return null;
        return <line key={idx} x1={baseX} y1={baseY} x2={endX} y2={endY} stroke={color} strokeWidth="4" strokeLinecap="round" />;
      })}
      <line x1={36} y1={62} x2={12} y2={82} stroke={color} strokeWidth="4" strokeLinecap="round" />
      <line x1={64} y1={62} x2={88} y2={82} stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
