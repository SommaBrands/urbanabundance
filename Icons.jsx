// UA 2.0 — brand icon set. Clean, single-color, rounded line style.
// All icons inherit `color` via currentColor. viewBox 0 0 24 24.
const P = {
  sprout: <><path d="M7 20h10" /><path d="M12 20c0-4 0-6 0-8" /><path d="M12 12C11 9 8 8.5 5 8.7c.2 3 2.2 4.8 5 4.6" /><path d="M12 11c.8-2.6 3.4-3.4 6-3.2-.2 2.7-2 4.4-4.6 4.2" /></>,
  seedling: <><path d="M12 21v-7" /><path d="M12 14C10.5 11 7 11 5 11.5c.4 3 3 4 5 3.2" /><path d="M12 12c1-2.5 4-2.6 6-2-.3 2.6-2.4 3.6-4.6 3" /></>,
  leaf: <><path d="M11 20C6 20 4 15.5 4 11 9 11 12 8 13 3c3 2 5 5 5 9 0 4.5-3 8-7 8Z" /><path d="M11 20c-1-4-1-7 0-10" /></>,
  herb: <><path d="M12 21v-9" /><path d="M12 12c-1-2-3.2-2.4-5-2 .3 2.2 2 3.3 3.6 2.8" /><path d="M12 13c1-2 3.2-2.4 5-2-.3 2.2-2 3.3-3.6 2.8" /><path d="M12 8c-.8-1.6-2.6-2-4-1.7.3 1.8 1.7 2.7 3 2.3" /></>,
  carrot: <><path d="M6 18c-1 1-1 1 0 0Z" /><path d="M17 8 8.5 16.5a3 3 0 0 1-4.2 0v0a3 3 0 0 1 0-4.2L12.8 4" /><path d="M15 6c1-1 3-1 4 0M16 5c0-1.5 1-3 2.5-3.5" /><path d="M11 12l2 2M8 15l2 2" /></>,
  flower: <><circle cx="12" cy="12" r="2.4" /><path d="M12 9.6C12 6.5 10.5 5 12 3.5 13.5 5 12 6.5 12 9.6Z" /><path d="M12 14.4c0 3.1 1.5 4.6 0 6.1-1.5-1.5 0-3 0-6.1Z" /><path d="M9.6 12C6.5 12 5 10.5 3.5 12 5 13.5 6.5 12 9.6 12Z" /><path d="M14.4 12c3.1 0 4.6 1.5 6.1 0-1.5-1.5-3 0-6.1 0Z" /></>,
  fruit: <><circle cx="12" cy="14" r="6.5" /><path d="M12 7.5C12 5 13.5 3 16 3c0 2.2-1.4 4.5-4 4.5Z" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" /></>,
  droplet: <path d="M12 3c3 4 6 6.8 6 10.3A6 6 0 0 1 6 13.3C6 9.8 9 7 12 3Z" />,
  calendar: <><rect x="4" y="5" width="16" height="16" rx="3" /><path d="M4 9h16M8 3v4M16 3v4" /><path d="m9 15 2 2 4-4" /></>,
  broadcast: <><rect x="3" y="8" width="18" height="12" rx="2.5" /><path d="m8 8 4-4 4 4" /><path d="M9 20h6" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  phone: <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />,
  pin: <><path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  basket: <><path d="M5 9h14l-1.3 9.2a2 2 0 0 1-2 1.8H8.3a2 2 0 0 1-2-1.8Z" /><path d="m8.5 9 3.5-5 3.5 5" /><path d="M10 13v3M14 13v3" /></>,
  gift: <><rect x="4" y="9" width="16" height="11" rx="2" /><path d="M4 13h16M12 9v11" /><path d="M12 9C11 5 8 5 7.5 6.6 7 8.2 9.5 9 12 9Zm0 0c1-4 4-4 4.5-2.4C17 8.2 14.5 9 12 9Z" /></>,
  chat: <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />,
  cycle: <><path d="M4.5 12a7.5 7.5 0 0 1 12.9-5.2L20 9" /><path d="M19.5 12a7.5 7.5 0 0 1-12.9 5.2L4 15" /><path d="M20 4v5h-5M4 20v-5h5" /></>,
  heart: <path d="M12 20S4 15 4 9a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6-8 11-8 11Z" />,
  book: <><path d="M5 4h9a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H5Z" /><path d="M5 4v13.5" /></>,
  ruler: <><rect x="3" y="8" width="18" height="8" rx="2" transform="rotate(-45 12 12)" /><path d="M9 9.5 10.5 11M11.5 7l1.5 1.5M6.5 12l1.5 1.5" /></>,
  spark: <path d="M12 3c.6 4.2 1.8 5.4 6 6-4.2.6-5.4 1.8-6 6-.6-4.2-1.8-5.4-6-6 4.2-.6 5.4-1.8 6-6Z" />,
  star: <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8-4.3-4.1 5.9-.9Z" />,
  instagram: <><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="16.6" cy="7.4" r="1" fill="currentColor" stroke="none" /></>,
  facebook: <path d="M14.5 8.5H16V5.7h-2.2c-2 0-3.3 1.3-3.3 3.4v1.6H8.2v2.8h2.3V21h2.9v-7.5h2.2l.4-2.8h-2.6V9.4c0-.6.3-.9 1-.9Z" />,
  youtube: <><rect x="3" y="6.5" width="18" height="11" rx="3.5" /><path d="m10.5 9.5 4.5 2.5-4.5 2.5Z" fill="currentColor" stroke="none" /></>,
};
const FILLED = new Set(['star', 'spark', 'droplet', 'heart', 'fruit', 'facebook']);
function Icon({ name, size = 20, stroke = 1.8, style, ...rest }) {
  const kids = P[name] || P.leaf;
  const filled = FILLED.has(name);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'} stroke="currentColor"
      strokeWidth={filled ? 0 : stroke} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', flex: 'none', ...style }} aria-hidden="true" {...rest}>
      {kids}
    </svg>
  );
}
function Stars({ n = 5, size = 15, color = 'var(--green-deep)' }) {
  return <span style={{ display: 'inline-flex', gap: 2, color }}>{Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" size={size} />)}</span>;
}
Object.assign(window, { Icon, Stars });
