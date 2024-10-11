"use client";

import Card from "@/components/Card/card";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Card>
      {error.message} <button onClick={reset}>Try again</button>
    </Card>
  );
}
