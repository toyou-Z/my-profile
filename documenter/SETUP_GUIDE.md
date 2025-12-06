# คู่มือการติดตั้งและใช้งาน Documenter

## 📋 สิ่งที่ต้องเตรียม

1. **Node.js** เวอร์ชัน 18 หรือสูงกว่า
2. **PostgreSQL** Database
3. **Git** (สำหรับ clone repository)
4. **Text Editor** (VS Code แนะนำ)

## 🚀 ขั้นตอนการติดตั้ง

### 1. Clone และติดตั้ง Dependencies

```bash
# Clone repository (ถ้ามี)
git clone <repository-url>
cd documenter

# ติดตั้ง dependencies
npm install
```

### 2. ตั้งค่า Environment Variables

```bash
# คัดลอกไฟล์ตัวอย่าง
cp .env.example .env
```

แก้ไขไฟล์ `.env` และใส่ค่าต่างๆ:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/documenter?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# JWT
JWT_SECRET="your-jwt-secret-key-here"

# Payment (Optional - สำหรับทดสอบ)
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."

# AI (Optional - สำหรับอนาคต)
OPENAI_API_KEY="sk-..."
```

### 3. ตั้งค่า Database

```bash
# Generate Prisma Client
npm run db:generate

# Push schema to database (สำหรับ development)
npm run db:push

# หรือใช้ migration (สำหรับ production)
npm run db:migrate
```

### 4. รัน Development Server

```bash
npm run dev
```

เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

## 🧪 การทดสอบ

### ทดสอบ Authentication

1. ไปที่ `/signup` เพื่อสมัครสมาชิก
2. ไปที่ `/login` เพื่อเข้าสู่ระบบ
3. ตรวจสอบว่า redirect ไป `/dashboard` ถูกต้อง

### ทดสอบ Editor

1. เข้าสู่ระบบ
2. ไปที่ `/editor`
3. ลองเพิ่มข้อความและรูปภาพ
4. ลอง Export เป็น PNG/JPG

### ทดสอบ Templates

1. ไปที่ `/templates`
2. ลอง Filter และ Search
3. ลองคลิก Template Card

## 🔧 การแก้ไขปัญหา

### Database Connection Error

```bash
# ตรวจสอบว่า PostgreSQL ทำงานอยู่
# ตรวจสอบ DATABASE_URL ใน .env
# ลองรัน db:push อีกครั้ง
npm run db:push
```

### Build Error

```bash
# ลบ cache และ dependencies
rm -rf .next node_modules
npm install
npm run db:generate
npm run dev
```

### Editor ไม่ทำงาน

- ตรวจสอบ Console ใน Browser
- ตรวจสอบว่า Fabric.js ติดตั้งแล้ว (`npm list fabric`)
- ลอง Refresh หน้าเว็บ

## 📦 Production Deployment

### Vercel (แนะนำ)

1. Push code ไป GitHub
2. เชื่อมต่อ Vercel กับ GitHub
3. ตั้งค่า Environment Variables ใน Vercel Dashboard
4. Deploy!

### Render / Railway

1. สร้าง PostgreSQL database
2. เชื่อมต่อ GitHub repository
3. ตั้งค่า Build Command: `npm run build`
4. ตั้งค่า Start Command: `npm start`
5. ตั้งค่า Environment Variables
6. Deploy!

## 🔐 Security Checklist

- [ ] เปลี่ยน `JWT_SECRET` และ `NEXTAUTH_SECRET` เป็นค่าที่ปลอดภัย
- [ ] ใช้ HTTPS ใน production
- [ ] ตั้งค่า CORS ให้ถูกต้อง
- [ ] ตรวจสอบ Rate Limiting
- [ ] ตั้งค่า Database connection pooling
- [ ] ใช้ Redis สำหรับ Rate Limiting (production)

## 💳 การเชื่อมต่อ Payment Gateway

### Stripe

1. สร้างบัญชีที่ [Stripe](https://stripe.com)
2. ไปที่ Dashboard → Developers → API keys
3. Copy `Secret key` และ `Publishable key`
4. ใส่ใน `.env`:
   ```env
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   ```
5. แก้ไข `/app/api/payment/checkout/route.ts` เพื่อใช้ Stripe SDK

### PayPal

1. สร้างบัญชีที่ [PayPal Developer](https://developer.paypal.com)
2. สร้าง App และรับ Client ID/Secret
3. ใส่ใน `.env`:
   ```env
   PAYPAL_CLIENT_ID="..."
   PAYPAL_CLIENT_SECRET="..."
   ```
4. แก้ไข checkout route เพื่อใช้ PayPal SDK

## 🤖 การเชื่อมต่อ AI Services

### OpenAI DALL-E

1. สร้างบัญชีที่ [OpenAI](https://platform.openai.com)
2. สร้าง API Key
3. ใส่ใน `.env`:
   ```env
   OPENAI_API_KEY="sk-..."
   ```
4. แก้ไข `/lib/ai/placeholder.ts` → `generateTextToImage()`

### Remove.bg

1. สร้างบัญชีที่ [Remove.bg](https://www.remove.bg/api)
2. รับ API Key
3. ใส่ใน `.env`:
   ```env
   REMOVE_BG_API_KEY="..."
   ```
4. แก้ไข `/lib/ai/placeholder.ts` → `removeBackground()`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Fabric.js Documentation](http://fabricjs.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Stripe Documentation](https://stripe.com/docs)

## 🆘 Support

หากมีปัญหาหรือคำถาม:
- ดูที่ `/support` ในเว็บ
- ตรวจสอบ Console logs
- ตรวจสอบ Database logs
- อ่าน README.md

