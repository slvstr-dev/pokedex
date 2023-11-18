import { type SVGProps } from 'react';

export const Close = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        d="M368 368 144 144M368 144 144 368"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        stroke="currentColor"
      />
    </svg>
  );
};
