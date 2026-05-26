type IconProps = {
  size?: number;
  className?: string;
};

export function SpineIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2c-1.6 0-2.5 1-2.5 2.2 0 .8.5 1.4 1 1.8" />
      <path d="M12 2c1.6 0 2.5 1 2.5 2.2 0 .8-.5 1.4-1 1.8" />
      <path d="M9 6.5c-.4.7-1 1.2-2 1.5" />
      <path d="M15 6.5c.4.7 1 1.2 2 1.5" />
      <path d="M9.2 10c-.5.6-1.2 1-2.2 1.2" />
      <path d="M14.8 10c.5.6 1.2 1 2.2 1.2" />
      <path d="M9.4 13.5c-.5.6-1.4 1-2.4 1.2" />
      <path d="M14.6 13.5c.5.6 1.4 1 2.4 1.2" />
      <path d="M9.6 17c-.5.6-1.5 1-2.6 1.2" />
      <path d="M14.4 17c.5.6 1.5 1 2.6 1.2" />
      <path d="M12 4v17" />
      <path d="M10 21h4" />
    </svg>
  );
}

export function NeckIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="6" r="3.5" />
      <path d="M9 9.5c0 1.6-1 2.5-2.5 3.2" />
      <path d="M15 9.5c0 1.6 1 2.5 2.5 3.2" />
      <path d="M10 10.5v3" />
      <path d="M14 10.5v3" />
      <path d="M7 16h10" />
      <path d="M5 20h14" />
    </svg>
  );
}

export function HeadacheIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 13a7 7 0 1 1 14 0v3a3 3 0 0 1-3 3h-1v-3" />
      <path d="M9 19v-3" />
      <path d="M2 9l2 1" />
      <path d="M2 6l2 .5" />
      <path d="M22 9l-2 1" />
      <path d="M22 6l-2 .5" />
      <path d="M12 3V1" />
    </svg>
  );
}

export function SciaticaIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 3h6l-1 5-1.5 6-1 5-2 3" />
      <path d="M15 8l2 5-1 6 1 2" />
      <path d="M8 22h4" />
      <path d="M14 22h4" />
      <path d="M10 11l3 1" />
    </svg>
  );
}

export function PostureIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="4" r="2" />
      <path d="M12 6v6" />
      <path d="M8 9l4-1 4 1" />
      <path d="M12 12l-3 5" />
      <path d="M12 12l3 5" />
      <path d="M9 17l-1 4" />
      <path d="M15 17l1 4" />
      <path d="M4 5h2" />
      <path d="M4 12h2" />
      <path d="M4 19h2" />
    </svg>
  );
}

export function SportsIcon({ size = 24, className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="13" cy="4" r="2" />
      <path d="M9 9l3-2 4 2 2 4" />
      <path d="M12 7v5l-3 4 2 5" />
      <path d="M12 12l4 1 1 4" />
      <path d="M5 14l3-1" />
      <path d="M3 18l3 1" />
    </svg>
  );
}
