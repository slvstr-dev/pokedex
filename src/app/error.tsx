'use client';

import { useEffect } from 'react';

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <h2>Something went wrong!</h2>

      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
