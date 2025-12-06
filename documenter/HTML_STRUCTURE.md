# HTML Structure ใน Next.js App Router

## 📄 ทำไมไม่มีไฟล์ HTML แยก?

Next.js App Router **ไม่ต้องมีไฟล์ HTML แยก** เพราะ:

1. **Auto-generate HTML** - Next.js สร้าง HTML อัตโนมัติจาก React components
2. **Server-Side Rendering** - HTML ถูกสร้างที่ server ก่อนส่งให้ client
3. **Layout System** - ใช้ `app/layout.tsx` เป็น root HTML structure

## 🏗️ HTML Structure ที่ถูกสร้าง

เมื่อรัน `npm run build` และ `npm start` Next.js จะสร้าง HTML structure แบบนี้:

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Documenter - ออกแบบกราฟิกได้ง่ายใน 10 วินาที</title>
    <meta name="description" content="สร้างผลงานระดับมืออาชีพ..." />
    <!-- CSS และ scripts อื่นๆ -->
  </head>
  <body>
    <div id="__next">
      <!-- React components render ที่นี่ -->
    </div>
    <!-- Scripts -->
  </body>
</html>
```

## 📍 ไฟล์ที่ควบคุม HTML Structure

### 1. `app/layout.tsx` - Root Layout
```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        {/* Meta tags, scripts */}
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
```

### 2. `app/page.tsx` - Homepage Content
```tsx
export default function Home() {
  return <main>...</main> // กลายเป็น <main>...</main> ใน HTML
}
```

### 3. `next.config.js` - HTML Headers
```js
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        // ...
      ],
    },
  ]
}
```

## 🎨 วิธีเพิ่ม Custom HTML Elements

### เพิ่ม Meta Tags
```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: 'My Page',
  description: 'Description',
  // Next.js จะแปลงเป็น <meta> tags อัตโนมัติ
}
```

### เพิ่ม Custom Scripts
```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script src="https://example.com/script.js" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### เพิ่ม Analytics (Google Analytics)
```tsx
// app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🔍 ดู HTML ที่ถูกสร้าง

### Development
```bash
npm run dev
# เปิด http://localhost:3000
# กด Ctrl+U หรือ View Source เพื่อดู HTML
```

### Production Build
```bash
npm run build
npm start
# เปิด http://localhost:3000
# View Source เพื่อดู HTML ที่ถูก optimize แล้ว
```

### ดูใน `.next` folder
```bash
# หลัง build จะมีไฟล์ HTML ใน
.next/server/app/
```

## 📦 Static HTML Export (ถ้าต้องการ)

ถ้าต้องการ export เป็น static HTML files:

```js
// next.config.js
module.exports = {
  output: 'export', // สร้าง static HTML files
  images: {
    unoptimized: true,
  },
}
```

```bash
npm run build
# จะได้ไฟล์ HTML ใน folder out/
```

## ✅ สรุป

- ✅ **ไม่ต้องมีไฟล์ HTML แยก** - Next.js สร้างให้อัตโนมัติ
- ✅ **ใช้ `app/layout.tsx`** - ควบคุม HTML structure
- ✅ **ใช้ `metadata`** - เพิ่ม meta tags
- ✅ **SSR/SSG** - HTML ถูกสร้างที่ server
- ✅ **View Source** - ดู HTML ที่ถูกสร้างได้ใน browser

## 🔗 เอกสารเพิ่มเติม

- [Next.js Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [Next.js Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Next.js Scripts](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)

