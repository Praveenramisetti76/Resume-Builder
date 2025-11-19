# 🚀 Quick Start Guide

## ⚡ 60 Second Setup

### Step 1: Install (10 seconds)
```bash
npm install
```

### Step 2: Start Backend (5 seconds)
Open terminal and run:
```bash
npm run server
```

### Step 3: Start Frontend (5 seconds)
Open another terminal and run:
```bash
npm run dev
```

### Step 4: Open Browser (40 seconds)
Navigate to: **http://localhost:5173**

🎉 **You're ready to create resumes!**

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| **README.md** | Complete project overview and features |
| **SETUP.md** | Detailed setup and usage instructions |
| **PROJECT_SUMMARY.md** | Project completion status and specs |
| **FEATURES.md** | Comprehensive feature documentation |
| **API_DOCS.md** | API endpoints and integration guide |
| **QUICK_START.md** | This file - fastest way to get started |

---

## 🎯 What You Can Do

### Create Resumes
1. Click "Create New Resume"
2. Fill in your information
3. Give it a title
4. Click "Save Resume"

### Manage Resumes
1. Go to "My Resumes"
2. View, Edit, or Delete any resume

### Download PDF
1. Open a resume
2. Click "Download PDF"
3. Save to your computer

---

## 🗂️ Project Structure

```
├── src/
│   ├── components/         # UI components
│   ├── pages/             # Page components
│   └── services/          # API service
├── db.json                # Database
├── package.json           # Dependencies
└── vite.config.js         # Configuration
```

---

## 🔑 Key Features

✅ Create multiple resumes  
✅ Edit resumes anytime  
✅ Real-time preview  
✅ Download as PDF  
✅ Professional templates  
✅ Responsive design  
✅ Toast notifications  
✅ Full CRUD operations  

---

## 🚨 Common Issues

### Port Already in Use?
```bash
# Change port for JSON-Server
json-server --watch db.json --port 3001
```

### Resumes Not Saving?
- Check if JSON-Server is running: `npm run server`
- Check browser console for errors
- Verify all required fields are filled

### Preview Not Showing?
- Scroll right in the form area (mobile)
- Check if JavaScript is enabled in browser
- Clear browser cache

---

## 💡 Pro Tips

1. **Multiple Resumes**: Create different resumes for different job applications
2. **Update Often**: Keep your resume updated with latest experience
3. **Backup PDFs**: Download your resumes regularly for backup
4. **Test Print**: Use browser print (Ctrl+P) to see how it looks printed

---

## 🎨 Customization

### Change Colors
Edit: `src/index.css`

### Change API URL
Edit: `src/services/resumeService.js`

### Change Port
Edit: `package.json` script

---

## 📞 Need Help?

1. **Setup Issues**: Read `SETUP.md`
2. **Feature Questions**: Check `FEATURES.md`
3. **API Integration**: See `API_DOCS.md`
4. **Full Documentation**: See `README.md`

---

## ✨ Ready to Start?

```bash
npm run server    # Terminal 1
npm run dev       # Terminal 2
```

Then open http://localhost:5173 🎉

---

**Happy Resume Building! 📄**
