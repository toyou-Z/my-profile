# 🚀 วิธี Push โปรเจคไป GitHub

## 📋 ขั้นตอนการ Push ไป GitHub

### วิธีที่ 1: สร้าง Repository ใหม่บน GitHub

#### 1. สร้าง Repository บน GitHub

1. ไปที่ [GitHub.com](https://github.com)
2. คลิก **"+"** → **"New repository"**
3. ตั้งชื่อ repository (เช่น `documenter`)
4. เลือก **Public** หรือ **Private**
5. **อย่า** check "Initialize with README" (เพราะเรามีไฟล์อยู่แล้ว)
6. คลิก **"Create repository"**

#### 2. Push Code ไป GitHub

เปิด Terminal ในโปรเจค folder และรันคำสั่ง:

```bash
# 1. ตรวจสอบว่า git initialized แล้วหรือยัง
git status

# 2. ถ้ายังไม่ได้ initialize (ถ้าไม่มี .git folder)
git init

# 3. เพิ่มไฟล์ทั้งหมด (ยกเว้นที่อยู่ใน .gitignore)
git add .

# 4. Commit ไฟล์
git commit -m "Initial commit: Documenter - Online Graphic Design Platform"

# 5. เพิ่ม remote repository (แทน YOUR_USERNAME และ YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 6. Push ไป GitHub
git branch -M main
git push -u origin main
```

### วิธีที่ 2: ใช้ GitHub CLI (gh)

```bash
# 1. Login GitHub CLI (ครั้งแรก)
gh auth login

# 2. สร้าง repo และ push ในคำสั่งเดียว
gh repo create documenter --public --source=. --remote=origin --push
```

### วิธีที่ 3: ใช้ GitHub Desktop

1. เปิด **GitHub Desktop**
2. **File** → **Add Local Repository**
3. เลือก folder `/Users/thunm4/myprofile/documenter`
4. **Publish repository** → เลือกชื่อและตั้งค่า
5. คลิก **Publish**

## 🔐 ตั้งค่า Authentication

### ใช้ Personal Access Token (แนะนำ)

1. ไปที่ GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. คลิก **"Generate new token"**
3. ตั้งชื่อ token และเลือก scopes: `repo`
4. Copy token ที่ได้
5. ใช้ token แทน password เมื่อ push:

```bash
git push
# Username: YOUR_USERNAME
# Password: YOUR_TOKEN (ไม่ใช่ password จริง)
```

### ใช้ SSH (แนะนำสำหรับใช้งานบ่อย)

```bash
# 1. สร้าง SSH key (ถ้ายังไม่มี)
ssh-keygen -t ed25519 -C "your_email@example.com"

# 2. Copy public key
cat ~/.ssh/id_ed25519.pub

# 3. เพิ่ม SSH key ใน GitHub:
# Settings → SSH and GPG keys → New SSH key

# 4. เปลี่ยน remote URL เป็น SSH
git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git

# 5. Push
git push
```

## 📝 คำสั่ง Git ที่ใช้บ่อย

```bash
# ดูสถานะ
git status

# เพิ่มไฟล์
git add .
git add filename.txt

# Commit
git commit -m "Your commit message"

# Push
git push

# Pull (ดึง code จาก GitHub)
git pull

# ดู remote
git remote -v

# เปลี่ยน remote URL
git remote set-url origin NEW_URL
```

## ⚠️ สิ่งที่ต้องระวัง

### 1. อย่า Commit `.env` file
- `.env` ถูก ignore แล้วใน `.gitignore`
- ใช้ `.env.example` แทน

### 2. อย่า Commit `node_modules`
- ถูก ignore แล้ว
- ใช้ `npm install` ใน production

### 3. อย่า Commit Database
- ใช้ migration แทน
- อย่า commit `.db` files

## 🔄 Update Code ใหม่

เมื่อแก้ไข code แล้ว:

```bash
# 1. ดูไฟล์ที่เปลี่ยน
git status

# 2. เพิ่มไฟล์ที่แก้ไข
git add .

# 3. Commit
git commit -m "Description of changes"

# 4. Push
git push
```

## 🌿 สร้าง Branch ใหม่

```bash
# สร้าง branch
git checkout -b feature/new-feature

# Push branch ใหม่
git push -u origin feature/new-feature
```

## 📦 Deploy จาก GitHub

### Vercel (แนะนำ)

1. ไปที่ [Vercel.com](https://vercel.com)
2. **Import Project** → เลือก GitHub repository
3. ตั้งค่า Environment Variables
4. **Deploy**

### Render / Railway

1. เชื่อมต่อ GitHub repository
2. ตั้งค่า Build/Start commands
3. ตั้งค่า Environment Variables
4. Deploy

## ✅ Checklist ก่อน Push

- [ ] ตรวจสอบ `.gitignore` ว่าครบถ้วน
- [ ] ตรวจสอบว่าไม่มี `.env` file
- [ ] ตรวจสอบว่าไม่มี sensitive data
- [ ] อ่าน README.md ให้เข้าใจ
- [ ] Commit message ชัดเจน

## 🆘 แก้ไขปัญหา

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin NEW_URL
```

### Error: "failed to push"
```bash
# Pull ก่อน
git pull origin main --allow-unrelated-histories
# แล้ว push ใหม่
git push
```

### ลืม commit message
```bash
git commit --amend -m "New message"
```

## 📚 Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [GitHub CLI](https://cli.github.com)

