# โครงสร้างโปรเจค Documenter

## 📁 โครงสร้างไฟล์

```
documenter/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── auth/
│   │   │   ├── login/route.ts    # POST - Login endpoint
│   │   │   ├── signup/route.ts   # POST - Signup endpoint
│   │   │   ├── logout/route.ts   # POST - Logout endpoint
│   │   │   └── me/route.ts       # GET - Get current user
│   │   ├── payment/
│   │   │   ├── checkout/route.ts # POST - Create checkout session
│   │   │   └── webhook/route.ts  # POST - Payment webhook
│   │   └── ai/
│   │       └── generate/route.ts # POST - AI generation (placeholder)
│   ├── dashboard/                # Dashboard page
│   │   └── page.tsx
│   ├── editor/                    # Editor page
│   │   └── page.tsx
│   ├── templates/                 # Template gallery
│   │   └── page.tsx
│   ├── login/                     # Login page
│   │   └── page.tsx
│   ├── signup/                    # Signup page
│   │   └── page.tsx
│   ├── checkout/                  # Checkout page
│   │   └── page.tsx
│   ├── pricing/                   # Pricing page
│   │   └── page.tsx
│   ├── terms/                     # Terms page
│   │   └── page.tsx
│   ├── privacy/                   # Privacy page
│   │   └── page.tsx
│   ├── support/                    # Support page
│   │   └── page.tsx
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Landing page
│   └── globals.css                # Global styles
│
├── components/                    # React Components
│   ├── layout/
│   │   ├── Navbar.tsx            # Navigation bar
│   │   └── Footer.tsx            # Footer
│   ├── landing/
│   │   ├── HeroSection.tsx       # Hero section
│   │   ├── FeaturesSection.tsx   # Features section
│   │   ├── PricingSection.tsx   # Pricing section
│   │   └── TemplatePreviewSection.tsx
│   ├── dashboard/
│   │   └── DashboardContent.tsx
│   ├── editor/
│   │   ├── EditorContent.tsx    # Main editor component
│   │   ├── EditorToolbar.tsx    # Editor toolbar
│   │   └── EditorSidebar.tsx    # Editor sidebar
│   ├── templates/
│   │   ├── TemplateGallery.tsx  # Template gallery
│   │   └── TemplateCard.tsx    # Template card
│   ├── checkout/
│   │   └── CheckoutContent.tsx  # Checkout form
│   └── providers/
│       └── AuthProvider.tsx      # Auth context provider
│
├── lib/                          # Utility Libraries
│   ├── auth.ts                   # Authentication utilities
│   ├── security.ts               # Security utilities (XSS, CSRF, etc.)
│   ├── subscription.ts           # Subscription utilities
│   ├── prisma.ts                 # Prisma client
│   ├── ai/
│   │   └── placeholder.ts       # AI service placeholders
│   └── middleware/
│       ├── rateLimit.ts          # Rate limiting middleware
│       └── csrf.ts               # CSRF protection
│
├── prisma/
│   └── schema.prisma             # Database schema
│
├── public/                       # Static files
│   └── favicon.ico
│
├── middleware.ts                 # Next.js middleware
├── next.config.js                # Next.js config
├── tailwind.config.js            # Tailwind config
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependencies
├── .env.example                  # Environment variables example
├── .gitignore                   # Git ignore
├── .eslintrc.json               # ESLint config
├── README.md                     # Main documentation
└── PROJECT_STRUCTURE.md         # This file
```

## 🔑 Key Files

### Authentication Flow
1. **Sign Up** → `/app/signup/page.tsx` → `/app/api/auth/signup/route.ts`
2. **Login** → `/app/login/page.tsx` → `/app/api/auth/login/route.ts`
3. **Auth Check** → `middleware.ts` → `/lib/auth.ts`

### Payment Flow
1. **Select Plan** → `/app/checkout/page.tsx`
2. **Create Checkout** → `/app/api/payment/checkout/route.ts`
3. **Webhook** → `/app/api/payment/webhook/route.ts`

### Editor Flow
1. **Open Editor** → `/app/editor/page.tsx`
2. **Editor Component** → `/components/editor/EditorContent.tsx`
3. **Fabric.js Canvas** → Canvas manipulation

## 🗄️ Database Models

- **User** - ผู้ใช้
- **Account** - OAuth accounts
- **Session** - User sessions
- **Subscription** - สมาชิก
- **Payment** - การชำระเงิน
- **Project** - โปรเจคที่บันทึก
- **Template** - เทมเพลต
- **AIService** - AI service config

## 🔐 Security Layers

1. **Middleware** (`middleware.ts`) - Route protection
2. **Rate Limiting** (`lib/middleware/rateLimit.ts`) - API rate limits
3. **XSS Protection** (`lib/security.ts`) - Input sanitization
4. **CSRF Protection** (`lib/middleware/csrf.ts`) - CSRF tokens
5. **Password Hashing** (`lib/auth.ts`) - bcrypt
6. **JWT Tokens** (`lib/auth.ts`) - Secure authentication

## 🎨 UI Theme

- **Colors**: Dark theme (dark-950 to dark-50) + Primary (gold/yellow)
- **Effects**: Glassmorphism, Smooth animations
- **Components**: Custom components with Tailwind CSS
- **Animations**: Framer Motion

## 🚀 Deployment Checklist

- [ ] Setup PostgreSQL database
- [ ] Configure environment variables
- [ ] Run database migrations
- [ ] Setup payment gateway (Stripe/PayPal)
- [ ] Configure domain and SSL
- [ ] Setup CDN for images
- [ ] Configure Redis for rate limiting (production)
- [ ] Setup monitoring and logging
- [ ] Configure backup strategy

## 📝 Next Steps

1. **Payment Integration**
   - Connect Stripe/PayPal/PromptPay
   - Test payment flow
   - Setup webhook endpoints

2. **AI Integration**
   - Connect OpenAI/Stability AI
   - Implement Text2Image
   - Implement RemoveBG
   - Implement Auto Layout

3. **Template System**
   - Add real templates to database
   - Create template upload system
   - Implement template preview

4. **Cloud Save**
   - Implement project saving to database
   - Add project management
   - Add project sharing

5. **Additional Features**
   - Email verification
   - Password reset
   - Google OAuth
   - Admin dashboard
   - Analytics

