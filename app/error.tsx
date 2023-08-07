"use client";

export default function Error({error,reset}: {error: Error,reset: () => void}) {
  return <div>
    <h1>Error</h1>
    <pre>{error.message}</pre>
    <button onClick={reset}>Reset</button>
  </div>
}