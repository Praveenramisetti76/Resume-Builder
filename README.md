# 📄 Resume Builder

A professional, full-featured Resume Builder web application built with React.js that allows users to create, manage, and download resumes in PDF format. The app provides a clean, responsive interface with real-time preview and complete CRUD operations.

# report link:
# project demonstration link:
# project code explanation links:
## ✨ Features

- **📝 Create & Edit Resumes**: Easy-to-use form-based interface to enter personal details, education, experience, and skills
- **👁️ Live Preview**: Real-time resume preview as you type
- **📥 Download PDF**: Export resumes as professional PDF files
- **💾 Save Multiple Resumes**: Store multiple resumes with different titles
- **✏️ Edit Resumes**: Update and modify saved resumes anytime
- **🗑️ Delete Resumes**: Remove resumes you no longer need
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Professional Templates**: Clean, modern resume templates with professional formatting
- **🔔 Real-time Notifications**: Toast notifications for user feedback

## 🛠️ Technology Stack

- **Frontend**: React 19.1.1 with React Router DOM
- **Styling**: Tailwind CSS 4.1.16
- **State Management**: React Hooks
- **API Client**: Axios
- **Backend**: JSON-Server
- **PDF Export**: jsPDF + html2canvas
- **Icons**: React Icons (FiIcons)
- **Notifications**: React Toastify
- **Build Tool**: Vite

## 📋 Project Structure

```
resume-builder/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx         # Top navigation bar
│   │   ├── Personalinfo.jsx       # Personal information form
│   │   ├── Education.jsx          # Education section form
│   │   ├── Experience.jsx         # Work experience form
│   │   ├── Skills.jsx             # Skills section form
│   │   ├── ResumePreview.jsx      # Resume preview display
│   │   └── DownloadButton.jsx     # PDF download functionality
│   ├── pages/
│   │   ├── Home.jsx               # Landing page
│   │   ├── Dashboard.jsx          # Resume list and management
│   │   ├── CreateEditResume.jsx   # Create/Edit resume page
│   │   └── ViewResume.jsx         # View single resume
│   ├── services/
│   │   └── resumeService.js       # API service with CRUD operations
│   ├── App.jsx                    # Main app with routing
│   ├── main.jsx                   # React entry point
│   ├── index.css                  # Global styles
│   └── assets/
├── db.json                        # JSON-Server database
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies and scripts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or navigate to the project directory)
   ```bash
   cd resume-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start JSON-Server** (open a new terminal)
   ```bash
   npm run server
   ```
   The server will run on `http://localhost:5000`

4. **Start the development server** (in the original terminal)
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## 📚 Usage

### Creating a Resume

1. Click **"Create New Resume"** from the home page or navigation
2. Fill in your resume details:
   - **Personal Information**: Name, email, phone, professional summary
   - **Experience**: Add multiple work experiences with descriptions
   - **Education**: Add your educational qualifications
   - **Skills**: Add your professional skills
3. Give your resume a title (e.g., "Software Developer 2024")
4. Click **"Save Resume"** to store it

### Managing Resumes

- **View All**: Go to "My Resumes" to see all saved resumes
- **View**: Click "View" to see full resume
- **Edit**: Click "Edit" to modify an existing resume
- **Delete**: Click "Delete" to remove a resume

### Downloading Resume

1. Open or Edit a resume
2. Click **"Download PDF"** button to export as PDF

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Intuitive Forms**: Clear labels, helpful placeholders, and organized sections
- **Real-time Validation**: Immediate feedback on required fields
- **Toast Notifications**: Success, error, and info messages
- **Professional Preview**: Formatted resume preview with proper styling
- **Sticky Navigation**: Easy access to navigation from any page
- **Loading States**: Smooth loading indicators during data fetching

## 🔧 API Endpoints (JSON-Server)

The app uses the following API endpoints:

- `GET /resumes` - Get all resumes
- `GET /resumes/:id` - Get a specific resume
- `POST /resumes` - Create a new resume
- `PUT /resumes/:id` - Update a resume
- `DELETE /resumes/:id` - Delete a resume

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Start JSON-Server backend
npm run server

# Run ESLint
npm run lint
```

## 🎯 CRUD Operations

The application implements complete CRUD functionality:

- **Create (C)**: Create new resumes with all sections
- **Read (R)**: View all resumes and individual resume details
- **Update (U)**: Edit existing resumes and save changes
- **Delete (D)**: Remove resumes permanently

## 🌐 Responsive Breakpoints

- **Mobile**: < 640px (single column layout)
- **Tablet**: 640px - 1024px (adjusted spacing)
- **Desktop**: > 1024px (full multi-column layout)

## 🎨 Color Scheme

- **Primary**: Indigo (#4f46e5)
- **Success**: Green (#10b981)
- **Danger**: Red (#ef4444)
- **Background**: Light gray (#f9fafb)
- **Text**: Gray (#111827, #4b5563)

## 🔐 Data Storage

All resume data is stored in a JSON database (`db.json`) via JSON-Server. The data persists between sessions.

## 📝 Sample Resume Data

The `db.json` file comes with a sample resume to demonstrate the structure and features.

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 or 5173 is already in use:
```bash
# Change JSON-Server port
json-server --watch db.json --port 3001

# Update API_URL in resumeService.js accordingly
```

### CORS Issues
The app is configured to work with JSON-Server on localhost. For production deployment, ensure proper CORS headers are set.

## 🚀 Future Enhancements

- User authentication and cloud storage
- Multiple resume templates
- Custom color themes
- Import from LinkedIn profile
- Share resume via link
- Resume version history
- ATS optimization suggestions



