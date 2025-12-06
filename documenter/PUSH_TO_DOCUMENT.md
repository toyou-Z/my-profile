# 🚀 Push ไป GitHub Repository ชื่อ "document"

## 📋 ขั้นตอน

### วิธีที่ 1: เปลี่ยน Remote URL (ถ้า repo "document" มีอยู่แล้ว)

```bash
# 1. เปลี่ยน remote URL
git remote set-url origin git@github.com:toyou-Z/document.git

# 2. ตรวจสอบ
git remote -v

# 3. เพิ่มไฟล์
git add .

# 4. Commit
git commit -m "Add Documenter - Online Graphic Design Platform"

# 5. Push
git push -u origin main
```

### วิธีที่ 2: สร้าง Repository ใหม่ชื่อ "document" บน GitHub

#### ขั้นตอนที่ 1: สร้าง Repo บน GitHub

1. ไปที่ [GitHub.com](https://github.com)
2. คลิก **"+"** → **"New repository"**
3. ตั้งชื่อ: **`document`**
4. เลือก **Public** หรือ **Private**
5. **อย่า** check "Initialize with README"
6. คลิก **"Create repository"**

#### ขั้นตอนที่ 2: Push Code

```bash
# 1. เปลี่ยน remote URL (ถ้ามี remote เก่า)
git remote set-url origin git@github.com:toyou-Z/document.git

# หรือถ้ายังไม่มี remote
git remote add origin git@github.com:toyou-Z/document.git

# 2. ตรวจสอบ remote
git remote -v
# ควรเห็น: origin git@github.com:toyou-Z/document.git

# 3. เพิ่มไฟล์ทั้งหมด
git add .

# 4. Commit
git commit -m "Initial commit: Documenter - Online Graphic Design Platform"

# 5. Push ไป GitHub
git push -u origin main
```

### วิธีที่ 3: ใช้ GitHub CLI

```bash
# สร้าง repo และ push ในคำสั่งเดียว
gh repo create document --public --source=. --remote=origin --push
```

## 🔍 ตรวจสอบ Remote

```bash
# ดู remote ปัจจุบัน
git remote -v

# ถ้าเห็น repo เก่า ให้เปลี่ยน
git remote set-url origin git@github.com:toyou-Z/document.git

# ตรวจสอบอีกครั้ง
git remote -v
```

## ⚠️ ถ้าเกิด Error

### Error: "repository not found"
- ตรวจสอบว่า repo "document" สร้างบน GitHub แล้ว
- ตรวจสอบ username ว่าใช่ `toyou-Z` หรือไม่

### Error: "Permission denied"
```bash
# ตรวจสอบ SSH
ssh -T git@github.com

# ถ้ายังไม่ได้ setup ดูใน GITHUB_SETUP.md
```

### Error: "remote origin already exists"
```bash
# ลบ remote เก่า
git remote remove origin

# เพิ่ม remote ใหม่
git remote add origin git@github.com:toyou-Z/document.git
```

## ✅ หลังจาก Push สำเร็จ

1. ไปที่: https://github.com/toyou-Z/document
2. ตรวจสอบว่าไฟล์ถูก push ครบ
3. ตรวจสอบว่า `.env` ไม่ถูก push

## 🎯 Quick Commands

```bash
# All-in-one (ถ้า repo สร้างแล้ว)
git remote set-url origin git@github.com:toyou-Z/document.git && \
git add . && \
git commit -m "Add Documenter project" && \
git push -u origin main
```

