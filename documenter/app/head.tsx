// Optional: Custom head component (if needed)
// Note: In Next.js App Router, use metadata API instead
// This file is just for reference

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {/* 
        Note: In Next.js App Router, use metadata in layout.tsx instead:
        
        export const metadata = {
          title: '...',
          description: '...',
        }
      */}
    </>
  )
}

