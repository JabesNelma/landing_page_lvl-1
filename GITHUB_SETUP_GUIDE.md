# GitHub Setup Guide - Step by Step

Panduan lengkap untuk push project ke GitHub dari awal hingga selesai.

---

## 📋 Daftar Isi

1. [Step 1: Buat Repository di GitHub.com](#step-1-buat-repository-di-github)
2. [Step 2: Setup Git Lokal](#step-2-setup-git-lokal)
3. [Step 3: Initialize & Commit](#step-3-initialize--commit)
4. [Step 4: Connect ke Repository](#step-4-connect-ke-repository)
5. [Step 5: Push ke GitHub](#step-5-push-ke-github)
6. [Troubleshooting](#troubleshooting)

---

## Step 1: Buat Repository di GitHub

### Membuka GitHub.com

1. Buka browser → https://github.com
2. **Login** dengan akun Anda
   - Jika belum punya akun, **Sign Up** terlebih dahulu (gratis)

### Membuat Repository Baru

1. Klik **+** icon di kanan atas → Pilih **New repository**
   
   ![Create Repo](https://docs.github.com/assets/cb-11427/images/help/repository/repo-create-button.png)

2. Isi form:

   | Field | Isi |
   |-------|-----|
   | **Repository name** | `landing_page_lvl-1` |
   | **Description** | `Premium product landing page with Framer Motion animations` |
   | **Visibility** | Public (untuk portfolio) atau Private |
   | **Initialize repo** | ❌ Jangan check (kita sudah punya folder) |

3. Klik **Create repository**

### Hasil: Anda akan melihat halaman dengan instruksi push

Catat URL repository Anda:
```
https://github.com/YOUR_USERNAME/landing_page_lvl-1.git
```

---

## Step 2: Setup Git Lokal

### Cek Git Terinstall

Buka terminal di project folder dan jalankan:

```bash
git --version
```

**Output yang diharap:** `git version 2.x.x` atau lebih tinggi

**Jika belum terinstall:**
```bash
# Ubuntu/Debian
sudo apt-get install git

# macOS
brew install git

# Windows
# Download dari https://git-scm.com/download/win
```

### Setup Git Config (Hanya Sekali)

Jalankan perintah ini:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```

**Contoh:**
```bash
git config --global user.name "Jabes Hermawan"
git config --global user.email "jabes@example.com"
```

### Verifikasi Setup

```bash
git config --global user.name
git config --global user.email
```

---

## Step 3: Initialize & Commit

### Navigasi ke Project Folder

```bash
cd /home/jabes/landing_page_lvl-1
```

### Initialize Git Repository

```bash
git init
```

**Output yang diharap:**
```
Initialized empty Git repository in /home/jabes/landing_page_lvl-1/.git
```

### Tambahkan `.gitignore`

Agar `node_modules` dan file lainnya tidak ter-push:

```bash
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build
/dist

# Misc
.DS_Store
*.pem
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
Thumbs.db
EOF
```

### Tambah Semua File ke Git

```bash
git add .
```

### Buat Commit Pertama

```bash
git commit -m "Initial commit: Setup project structure with Next.js, Framer Motion, and Tailwind CSS"
```

**Output yang diharap:**
```
[main (root-commit) xxxxxxx] Initial commit: Setup project structure with Next.js, Framer Motion, and Tailwind CSS
 XXX files changed, XXXXX insertions(+)
 ...
```

### Verifikasi Commit

```bash
git log --oneline
```

**Output:**
```
xxxxxxx (HEAD -> main) Initial commit: Setup project structure...
```

---

## Step 4: Connect ke Repository

### Tambah Remote Repository

```bash
git remote add origin https://github.com/YOUR_USERNAME/landing_page_lvl-1.git
```

**GANTI `YOUR_USERNAME` dengan username GitHub Anda!**

**Contoh:**
```bash
git remote add origin https://github.com/jabes/landing_page_lvl-1.git
```

### Verifikasi Remote

```bash
git remote -v
```

**Output yang diharap:**
```
origin  https://github.com/YOUR_USERNAME/landing_page_lvl-1.git (fetch)
origin  https://github.com/YOUR_USERNAME/landing_page_lvl-1.git (push)
```

---

## Step 5: Push ke GitHub

### Push Ke GitHub

```bash
git branch -M main
git push -u origin main
```

### Authentication (Pilih Salah Satu)

#### Opsi A: Token Akses (Recommended - 2025)

1. Di GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
   
2. Klik **Generate new token**
   
3. **Isi:**
   - **Token name**: `landing-page-token`
   - **Expiration**: 90 days
   - **Select scopes**: Centang **`repo`** (full control of private repositories)
   
4. Klik **Generate token** → Copy token

5. Di terminal, saat diminta password:
   ```
   Username: YOUR_USERNAME
   Password: PASTE_TOKEN_HERE
   ```

#### Opsi B: SSH Key (Lebih Aman)

Jika Anda sudah setup SSH:

```bash
git remote set-url origin git@github.com:YOUR_USERNAME/landing_page_lvl-1.git
git push -u origin main
```

### Sukses Push

**Output yang diharap:**
```
Enumerating objects: XXX, done.
Counting objects: 100% (XXX/XXX), done.
Delta compression using up to X threads
Compressing objects: 100% (XXX/XXX), done.
Writing objects: 100% (XXX/XXX), XXX bytes | X bytes/s, done.
Total XXX (delta XXX), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (XXX/XXX), done.
To https://github.com/YOUR_USERNAME/landing_page_lvl-1.git
 * [new branch]      main -> main
Branch 'main' is set to track remote branch 'main' from 'origin'.
```

---

## ✅ Verifikasi Sukses

1. **Di Terminal:**
   ```bash
   git status
   ```
   **Output:** `On branch main` dan `Your branch is up to date`

2. **Di GitHub Website:**
   - Buka: https://github.com/YOUR_USERNAME/landing_page_lvl-1
   - Lihat semua file project sudah ter-upload
   - Klik file untuk preview

---

## Update Ke GitHub Selanjutnya

Setelah push pertama, untuk update cukup:

```bash
# 1. Edit file
# 2. Commit
git add .
git commit -m "Your change description"

# 3. Push
git push
```

---

## 🔄 Workflow Standar (Setiap Update)

```bash
# 1. Lihat perubahan
git status

# 2. Tambah file yang berubah
git add .

# 3. Commit dengan pesan deskriptif
git commit -m "Fix button animation issue"

# 4. Push ke GitHub
git push
```

---

## 🚫 Troubleshooting

### Error: "fatal: 'origin' does not appear to be a 'git' repository"

**Solusi:**
```bash
# Periksa remote
git remote -v

# Jika tidak ada, tambahkan:
git remote add origin https://github.com/YOUR_USERNAME/landing_page_lvl-1.git
```

---

### Error: "fatal: The current branch main has no upstream branch"

**Solusi:**
```bash
git push -u origin main
```

---

### Error: "Authentication failed"

**Solusi:**
- Pastikan token/password benar
- Gunakan **token baru** (bukan password GitHub)
- Jika masih error, reset SSH key atau buat token baru

```bash
# Clear credential cache
git credential reject https://github.com
```

---

### Error: ".gitignore not working"

**Solusi:**
```bash
# Hapus file yang seharusnya di-ignore
git rm --cached node_modules -r
git rm --cached .env

# Commit ulang
git add .
git commit -m "Remove cached files"
git push
```

---

## 📱 Update README di GitHub

Setelah push, update link repository di README:

```bash
# Edit README.md
nano README.md
```

Ganti bagian links:
```markdown
- **Repository**: [GitHub](https://github.com/YOUR_USERNAME/landing_page_lvl-1)
```

Commit & push:
```bash
git add README.md
git commit -m "Update GitHub repository link"
git push
```

---

## 🎉 Selesai!

Repository Anda sekarang live di GitHub! 

**URL Repository:**
```
https://github.com/YOUR_USERNAME/landing_page_lvl-1
```

Bagikan link ini untuk portfolio, interview, atau kolaborasi.

---

## 📚 Resources Tambahan

- [GitHub Getting Started](https://docs.github.com/en/get-started)
- [Git Documentation](https://git-scm.com/doc)
- [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
