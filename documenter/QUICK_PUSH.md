# ⚡ Quick Push to GitHub

## 🚀 คำสั่งด่วน (คุณมี remote อยู่แล้ว)

```bash
# 1. เพิ่มไฟล์ทั้งหมด
git add .

# 2. Commit
git commit -m "Add Documenter - Online Graphic Design Platform"

# 3. Push ไป GitHub
git push origin main
```

## 📋 คำสั่งแบบละเอียด

```bash
# ดูสถานะไฟล์
git status

# เพิ่มไฟล์ที่ต้องการ
git add .

# หรือเพิ่มทีละไฟล์
git add package.json
git add app/
git add components/

# Commit พร้อม message
git commit -m "Initial commit: Documenter project with Next.js, Prisma, and Fabric.js"

# Push ไป GitHub
git push origin main
```

## 🔍 ตรวจสอบก่อน Push

```bash
# ดูไฟล์ที่จะ commit
git status

# ดู diff (การเปลี่ยนแปลง)
git diff

# ดู remote
git remote -v
# ควรเห็น: origin git@github.com:toyou-Z/my-profile.git
```

## ⚠️ ถ้าเกิด Error

### Error: "Your branch is ahead of 'origin/main'"
```bash
# Pull ก่อน
git pull origin main

# แล้ว push ใหม่
git push origin main
```

### Error: "Permission denied"
```bash
# ตรวจสอบ SSH key
ssh -T git@github.com

# ถ้ายังไม่ได้ setup SSH key
# ดูใน GITHUB_SETUP.md
```

### Error: "Large files"
```bash
# ตรวจสอบไฟล์ใหญ่
git ls-files | xargs du -h | sort -h | tail -10

# ถ้ามีไฟล์ใหญ่ที่ไม่จำเป็น ลบออกจาก git
git rm --cached large-file.zip
```

## ✅ หลังจาก Push สำเร็จ

1. ไปที่ GitHub: https://github.com/toyou-Z/my-profile
2. ตรวจสอบว่าไฟล์ถูก push ครบ
3. ตรวจสอบว่า `.env` ไม่ถูก push (ควรไม่มีใน GitHub)

## 🎯 Next Steps

หลังจาก push สำเร็จแล้ว:

1. **Deploy บน Vercel**:
   - ไปที่ https://vercel.com
   - Import จาก GitHub
   - ตั้งค่า Environment Variables
   - Deploy!

2. **Setup Database**:
   - สร้าง PostgreSQL database (Supabase, Railway, หรือ Neon)
   - ใส่ DATABASE_URL ใน Environment Variables
   - Run migrations

3. **Setup Payment**:
   - ตั้งค่า Stripe/PayPal keys
   - ใส่ใน Environment Variables

