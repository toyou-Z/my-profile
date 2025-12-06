# Documenter - Online Graphic Design Platform

เว็บแอปพลิเคชันสำหรับการออกแบบกราฟิกออนไลน์ (คล้าย Canva mini) พร้อมระบบสมาชิก, Subscription, และ Editor ที่ทันสมัย

## 🎨 Features

- ✨ **Landing Page** - หน้าแรกแบบพรีเมียม พร้อม Hero, Features, Pricing
- 🔐 **Authentication** - ระบบเข้าสู่ระบบ/สมัครสมาชิก พร้อม Google OAuth (placeholder)
- 💳 **Subscription** - ระบบสมัครสมาชิก Basic (159 บาท/เดือน) และ Pro (559 บาท/เดือน)
- 🎨 **Online Editor** - Editor ออนไลน์ด้วย Fabric.js พร้อมเครื่องมือพื้นฐาน
- 📚 **Template Gallery** - แกลเลอรีเทมเพลตพร้อม Filter และ Search
- 🛡️ **Security** - ระบบรักษาความปลอดภัยครบถ้วน (XSS, CSRF, Rate Limit, SQL Injection Protection)
- 🤖 **AI Ready** - โครงสร้างพร้อมรองรับ AI Features (Text2Image, RemoveBG, Auto Layout)

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: JWT + bcrypt
- **Canvas Library**: Fabric.js
- **UI Components**: Custom Components + Framer Motion
- **Payment**: Stripe/PayPal/PromptPay (Placeholder)

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL Database
- npm หรือ yarn

## 🛠️ Installation

1. **Clone repository**
```bash
git clone <repository-url>
cd documenter
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env
```

แก้ไขไฟล์ `.env` และใส่ค่าต่างๆ:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Secret key สำหรับ NextAuth
- `JWT_SECRET` - Secret key สำหรับ JWT
- `STRIPE_SECRET_KEY` - Stripe API key (ถ้าใช้)
- และอื่นๆ ตามต้องการ

4. **Setup Database**
```bash
# Generate Prisma Client
npm run db:generate

# Push schema to database
npm run db:push

# หรือใช้ migration
npm run db:migrate
```

5. **Run development server**
```bash
npm run dev
```

เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
documenter/
├── app/                    # Next.js App Router
│   ├── api/                # API Routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── payment/        # Payment endpoints
│   │   └── ai/             # AI service endpoints (placeholder)
│   ├── dashboard/          # Dashboard page
│   ├── editor/             # Editor page
│   ├── templates/          # Template gallery
│   ├── login/              # Login page
│   ├── signup/             # Signup page
│   ├── checkout/           # Checkout page
│   └── page.tsx            # Landing page
├── components/             # React Components
│   ├── layout/             # Layout components (Navbar, Footer)
│   ├── landing/            # Landing page components
│   ├── dashboard/          # Dashboard components
│   ├── editor/             # Editor components
│   ├── templates/          # Template components
│   ├── checkout/           # Checkout components
│   └── providers/          # Context providers
├── lib/                    # Utility libraries
│   ├── auth.ts             # Authentication utilities
│   ├── security.ts         # Security utilities
│   ├── subscription.ts     # Subscription utilities
│   ├── prisma.ts           # Prisma client
│   ├── ai/                 # AI service placeholders
│   └── middleware/         # Middleware utilities
├── prisma/                 # Prisma schema
│   └── schema.prisma       # Database schema
├── middleware.ts           # Next.js middleware
└── public/                 # Static files
```

## 🔐 Security Features

- ✅ **XSS Protection** - DOMPurify sanitization
- ✅ **CSRF Protection** - Token-based CSRF protection
- ✅ **SQL Injection Protection** - Prisma parameterized queries
- ✅ **Rate Limiting** - API rate limiting
- ✅ **Password Hashing** - bcrypt with salt rounds
- ✅ **Secure Cookies** - HTTP-only, Secure, SameSite
- ✅ **Input Validation** - Zod schema validation
- ✅ **Security Headers** - Helmet-like headers in next.config.js

## 💳 Payment Integration

ระบบชำระเงินรองรับ:
- **Stripe** - บัตรเครดิต/เดบิต
- **PayPal** - PayPal account
- **PromptPay** - QR Code payment (Thai)
- **Thai Gateway** - Gateway อื่นๆ

> ⚠️ **Note**: ตอนนี้เป็น placeholder ต้องเชื่อมต่อ API จริงในอนาคต

### การเชื่อมต่อ Payment Gateway

1. **Stripe**
   - ลงทะเบียนที่ [Stripe](https://stripe.com)
   - ใส่ `STRIPE_SECRET_KEY` และ `STRIPE_PUBLISHABLE_KEY` ใน `.env`
   - แก้ไข `/app/api/payment/checkout/route.ts` เพื่อใช้ Stripe SDK

2. **PayPal**
   - ลงทะเบียนที่ [PayPal Developer](https://developer.paypal.com)
   - ใส่ `PAYPAL_CLIENT_ID` และ `PAYPAL_CLIENT_SECRET` ใน `.env`
   - แก้ไข checkout route เพื่อใช้ PayPal SDK

3. **PromptPay / Thai Gateway**
   - ติดต่อผู้ให้บริการ payment gateway
   - ใส่ API credentials ใน `.env`
   - แก้ไข checkout route ตาม API documentation

## 🤖 AI Integration (Future)

โครงสร้างพร้อมรองรับ AI Features:

1. **Text2Image** - สร้างรูปภาพจากข้อความ
   - แก้ไข `/lib/ai/placeholder.ts` → `generateTextToImage()`
   - เชื่อมต่อ OpenAI DALL-E, Stability AI, หรือ Midjourney

2. **RemoveBG** - ลบพื้นหลังอัตโนมัติ
   - แก้ไข `/lib/ai/placeholder.ts` → `removeBackground()`
   - เชื่อมต่อ Remove.bg API หรือ similar service

3. **Auto Layout** - สร้าง Layout อัตโนมัติ
   - แก้ไข `/lib/ai/placeholder.ts` → `generateAutoLayout()`
   - ใช้ GPT-4 Vision หรือ custom ML model

### ตัวอย่างการเชื่อมต่อ OpenAI DALL-E:

```typescript
// lib/ai/openai.ts
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateTextToImage(prompt: string) {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    size: "1024x1024",
    quality: "standard",
  })
  
  return {
    success: true,
    data: response.data[0].url,
  }
}
```

## 🎨 Editor Features

- ✅ Canvas 1080x1080 (default)
- ✅ Add Text
- ✅ Upload Image
- ✅ Font Size/Color Control
- ✅ Layers Management
- ✅ Export PNG/JPG/PDF
- ✅ Save/Load Draft (localStorage)
- ⏳ AI Generate (placeholder)

## 📊 Database Schema

### Main Models:
- `User` - ผู้ใช้
- `Subscription` - สมาชิก
- `Payment` - การชำระเงิน
- `Project` - โปรเจคที่บันทึก
- `Template` - เทมเพลต
- `AIService` - AI service configuration

ดูรายละเอียดใน `/prisma/schema.prisma`

## 🚀 Deployment

### Vercel (Recommended)

1. Push code ไป GitHub
2. เชื่อมต่อ Vercel กับ GitHub repository
3. ตั้งค่า Environment Variables ใน Vercel
4. Deploy!

### Render / Railway

1. เชื่อมต่อ GitHub repository
2. ตั้งค่า Build Command: `npm run build`
3. ตั้งค่า Start Command: `npm start`
4. ตั้งค่า Environment Variables
5. Deploy!

## 📝 TODO / Future Improvements

- [ ] เชื่อมต่อ Payment Gateway จริง (Stripe/PayPal/PromptPay)
- [ ] เชื่อมต่อ AI Services (OpenAI, Stability AI, Remove.bg)
- [ ] เพิ่ม Template จริงใน Database
- [ ] Cloud Save สำหรับ Projects
- [ ] Google OAuth Integration
- [ ] Email Verification
- [ ] Password Reset
- [ ] Admin Dashboard
- [ ] Analytics
- [ ] CDN สำหรับ Images
- [ ] Redis สำหรับ Rate Limiting (production)
- [ ] Unit Tests & E2E Tests

## 🐛 Troubleshooting

### Database Connection Error
- ตรวจสอบ `DATABASE_URL` ใน `.env`
- ตรวจสอบว่า PostgreSQL ทำงานอยู่
- รัน `npm run db:push` อีกครั้ง

### Build Error
- ลบ `.next` folder และ `node_modules`
- รัน `npm install` ใหม่
- รัน `npm run db:generate`

### Editor ไม่ทำงาน
- ตรวจสอบว่า Fabric.js ติดตั้งแล้ว
- ตรวจสอบ Console สำหรับ errors

## 📄 License

MIT License

## 👥 Contributors

สร้างโดย Documenter Team

---

**หมายเหตุ**: โปรเจคนี้เป็นโครงสร้างพื้นฐานพร้อม placeholder สำหรับการพัฒนาต่อในอนาคต

