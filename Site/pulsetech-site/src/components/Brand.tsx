type BrandProps = {
  className?: string;
};

export default function Brand({ className = '' }: BrandProps) {
  return (
    <span className={`inline-flex items-center gap-2 whitespace-nowrap font-display font-semibold tracking-tight ${className}`}>
      <svg
        aria-hidden="true"
        className="h-8 w-8 shrink-0"
        fill="none"
        focusable="false"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 5h20c10.1 0 16 5.8 16 15s-5.9 15-16 15h-8v4.1c0 3.3-2.5 5.9-5.7 5.9H7V5Zm11 6v17h9c6.2 0 9-2.5 9-8s-2.8-9-9-9h-9Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="m7 29 12-7.8v7.1L7 36V29Z" fill="#1688E8" />
        <rect x="21" y="20" width="3.4" height="6" rx="1" fill="#1688E8" />
        <rect x="25.6" y="16.5" width="3.4" height="9.5" rx="1" fill="#1688E8" />
        <rect x="30.2" y="13" width="3.4" height="13" rx="1" fill="#1688E8" />
      </svg>
      <span><span className="text-tx">Pulse</span><span className="text-neon">Tech</span></span>
    </span>
  );
}
