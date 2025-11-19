# Resume Builder - Troubleshooting Guide

## ✨ Complete Step-by-Step Guide to Create and Download Your Resume

### Prerequisites: Start the Servers

Before using the application, you **MUST** start both servers in separate terminals.

#### **Step 1: Start the Backend Server (JSON-Server)**

Open a terminal and run:

```bash
npm run server
```

Expected output:
```
  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:5000/resumes

  Home
  http://localhost:5000

  Type s + enter at any time to create a snapshot of the database
```

> **Important**: Keep this terminal open. Your backend runs on **port 5000**.

#### **Step 2: Start the Frontend Dev Server**

Open a **new terminal** (keep the first one running) and run:

```bash
npm run dev
```

Expected output:
```
VITE v7.x.x  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

> **Important**: Keep this terminal open. Your frontend runs on **port 5173**.

### Both Servers Must Be Running

✅ Terminal 1: `npm run server` (Backend - Port 5000)  
✅ Terminal 2: `npm run dev` (Frontend - Port 5173)

---

## 🚀 Creating Your Resume - Complete Walkthrough

### Step 1: Open the Application

1. Open your browser
2. Navigate to: **http://localhost:5173**
3. Click on **"Create New Resume"** button on the home page

### Step 2: Fill in Resume Title

In the first input field at the top, enter a title for your resume:
- Example: "John Doe - Senior Developer 2024"
- This title helps you identify your resume later

### Step 3: Complete Personal Information Section

Fill in the following required fields (marked with *):

- **Full Name** ⭐ *Required*
  - Example: John Doe

- **Email** ⭐ *Required*
  - Example: john.doe@gmail.com

- **Phone Number** ⭐ *Required*
  - Example: +1 (555) 123-4567

- **Professional Summary** (Optional)
  - Brief description of your professional background
  - Example: "Experienced software developer with 5+ years specializing in full-stack development using React and Node.js"

### Step 4: Add Work Experience

1. Fill in the first experience entry with:
   - **Company**: Your company name
   - **Job Title**: Your position
   - **Duration**: Timeline (e.g., "Jan 2022 - Present")
   - **Description**: Your responsibilities and achievements

2. Click **"+ Add More Experience"** to add additional jobs

3. Click **"🗑 Remove Experience"** to delete an entry (if more than one exists)

### Step 5: Add Education

1. Fill in the education entry with:
   - **Degree**: Your qualification (e.g., "Bachelor of Science")
   - **Institution**: University/College name
   - **Field of Study**: Your major
   - **Graduation Year**: Year you graduated

2. Click **"+ Add More Education"** for more entries

3. Click **"🗑 Remove Education"** to delete (if more than one exists)

### Step 6: Add Skills

1. Enter individual skills in the input fields:
   - Example: JavaScript, React, Node.js, MongoDB

2. Click **"+ Add Skill"** to add more skills

3. Click the **🗑** button next to a skill to remove it (if more than one exists)

### Step 7: Watch Your Live Preview

As you fill in the form on the left, your **Live Preview** updates on the right side in real-time. This shows how your resume will look.

### Step 8: Save Your Resume

Once all information is filled in:

1. Click the **"Save & Continue"** button (blue gradient button at bottom)
2. Wait for the success notification (green toast message at top)
3. You'll automatically be redirected to your resume's view page

---

## 📥 Downloading Your Resume as PDF

### Automatic Redirect After Saving

After you click **"Save & Continue"**, you'll automatically go to your resume's viewing page.

### Download on View Page

On the view page, at the bottom, you'll see a **green "Download PDF"** button:

1. Click the **"📥 Download PDF"** button
2. Your browser will download the resume as a PDF file
3. The file name will be your resume title (e.g., "John Doe - Senior Developer 2024.pdf")

### Download Steps Summary

```
Create Resume → Fill Information → Click "Save & Continue" 
→ View Page Loads → Click "Download PDF" → Resume Downloaded ✅
```

---

## ⚠️ Common Issues & Solutions

### Issue 1: "Failed to create resume" Error

**Cause**: One or more required fields are empty

**Solution**:
- Ensure **Resume Title** is filled in
- Ensure **Full Name** is filled in
- Ensure **Email** is filled in
- Ensure **Phone Number** is filled in

### Issue 2: "Cannot GET /resumes" or Page Not Loading

**Cause**: Backend server is not running

**Solution**:
1. Open Terminal 1 (if closed)
2. Navigate to project folder: `cd c:\Users\LENOVO\OneDrive\Desktop\resume-builder\resume-builder`
3. Run: `npm run server`
4. Wait for "Done" message
5. Try reloading the page in browser

### Issue 3: Cannot See Application

**Cause**: Frontend server is not running

**Solution**:
1. Open Terminal 2 (if closed)
2. Navigate to project folder
3. Run: `npm run dev`
4. Wait for "ready in XXX ms" message
5. Open browser to: http://localhost:5173

### Issue 4: Download Button Not Showing

**Cause**: You're still on the create page

**Solution**:
- Click **"Save & Continue"** first
- The download button will appear on the view page

### Issue 5: "Loading resume..." Spinner Won't Disappear

**Cause**: Backend is not responding

**Solution**:
1. Check Terminal 1 is running `npm run server`
2. If not, restart it
3. Refresh the page (F5)
4. Try again

### Issue 6: Resume Data Not Saving

**Cause**: JSON-Server not running or request failed

**Solution**:
1. Open developer console (F12 → Console tab)
2. Check for error messages
3. Ensure Terminal 1 (backend) is running
4. Check internet connection
5. Try saving again

---

## 🔄 Managing Your Resumes

### View All Resumes

1. Click **"My Resumes"** in the navigation bar
2. See all your saved resumes in card format
3. Click any resume card to view it

### Edit a Resume

1. Go to **"My Resumes"** page
2. Find your resume
3. Click **"✏️ Edit"** button on the resume card
4. Update information
5. Click **"Save & Continue"**

### Delete a Resume

1. View your resume
2. Click **"🗑️ Delete"** button (red)
3. Confirm deletion in the dialog
4. Resume will be removed

---

## 📊 Data Storage

Your resumes are stored in `db.json` file. This is a simple JSON database.

### Location:
```
resume-builder/db.json
```

### Structure:
```json
{
  "resumes": [
    {
      "id": "1",
      "title": "Your Resume Title",
      "personal": {
        "name": "Your Name",
        "email": "your.email@gmail.com",
        "phone": "+1 (555) 123-4567",
        "summary": "Your summary"
      },
      "education": [...],
      "experience": [...],
      "skills": [...]
    }
  ]
}
```

---

## 🎨 UI Improvements Made

### Better Visual Design
✅ Modern gradient backgrounds  
✅ Enhanced shadow effects  
✅ Improved button styling with gradients  
✅ Better form layouts with colored borders  
✅ Responsive mobile design  

### User Experience
✅ Real-time preview on the right  
✅ Clear section headers with emojis  
✅ Add/Remove buttons for multiple entries  
✅ Sticky download button on view page  
✅ Back buttons for easy navigation  

### New Features
✅ Download button on separate view page  
✅ Auto-redirect after saving  
✅ Loading states  
✅ Success notifications  
✅ Better error messages  

---

## 🛠️ API Endpoints

The backend provides these endpoints:

```bash
# Get all resumes
GET http://localhost:5000/resumes

# Get single resume
GET http://localhost:5000/resumes/:id

# Create new resume
POST http://localhost:5000/resumes

# Update resume
PUT http://localhost:5000/resumes/:id

# Delete resume
DELETE http://localhost:5000/resumes/:id
```

---

## 📱 Responsive Breakpoints

The app is optimized for:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## ✅ Testing Checklist

After creating your resume, verify:

- [ ] Resume Title appears correctly
- [ ] Personal info displays in preview
- [ ] All experience entries show
- [ ] All education entries show
- [ ] All skills display as tags
- [ ] Download button is green and functional
- [ ] PDF downloads with correct file name
- [ ] Resume appears in "My Resumes" list
- [ ] Can edit resume without issues
- [ ] Can delete resume successfully

---

## 🆘 Still Having Issues?

### Check These First

1. **Both servers running?**
   - Terminal 1: `npm run server` (port 5000)
   - Terminal 2: `npm run dev` (port 5173)

2. **Correct URL?**
   - http://localhost:5173 (not 5000)

3. **Internet connection?**
   - Ensure you have stable connection

4. **Port conflicts?**
   - Port 5000 or 5173 already in use?
   - Try restarting both terminals

### Open Developer Console

Press **F12** and check the **Console** tab for errors.

### Restart Everything

1. Close both terminals (Ctrl+C)
2. Run `npm install` to ensure dependencies are installed
3. Restart both servers
4. Refresh browser page

---

## 🎓 Quick Summary

```
1. Start Backend:  npm run server  → Terminal 1
2. Start Frontend: npm run dev     → Terminal 2
3. Open Browser:  http://localhost:5173
4. Create Resume: Fill form + Click "Save & Continue"
5. Download PDF:  Click "Download PDF" button
6. Done! ✅
```

---

**Happy Resume Building! 📄✨**

For more help, ensure both servers are running and check the browser console (F12) for any error messages.
