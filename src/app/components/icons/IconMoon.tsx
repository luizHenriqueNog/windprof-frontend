import * as React from "react";

function IconMoon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 3a6 6 0 009 9 9 9 0 11-9-9zM19 3v4M21 5h-4" />
    </svg>
  );
}

export default IconMoon;
