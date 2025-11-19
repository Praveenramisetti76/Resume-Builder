# API Documentation

## 🌐 Base URL
```
http://localhost:5000
```

## 📋 Endpoints

### 1. Get All Resumes
```http
GET /resumes
```

**Description**: Retrieve all saved resumes from the database

**Response Example**:
```json
[
  {
    "id": 1,
    "title": "Software Developer Resume",
    "personal": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1-234-567-8900",
      "summary": "Experienced developer..."
    },
    "education": [...],
    "experience": [...],
    "skills": [...]
  }
]
```

**Status Codes**:
- `200 OK`: Success
- `500 Internal Server Error`: Server error

---

### 2. Get Single Resume
```http
GET /resumes/:id
```

**Parameters**:
- `id` (required): Resume ID (number)

**Response Example**:
```json
{
  "id": 1,
  "title": "Software Developer Resume",
  "personal": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1-234-567-8900",
    "summary": "Experienced developer..."
  },
  "education": [
    {
      "degree": "Bachelor of Science",
      "institution": "Tech University",
      "field": "Computer Science",
      "year": "2020"
    }
  ],
  "experience": [
    {
      "company": "Tech Company",
      "role": "Senior Developer",
      "duration": "2022-Present",
      "description": "Led development of web applications..."
    }
  ],
  "skills": ["JavaScript", "React", "Node.js"]
}
```

**Status Codes**:
- `200 OK`: Success
- `404 Not Found`: Resume not found
- `500 Internal Server Error`: Server error

---

### 3. Create New Resume
```http
POST /resumes
```

**Request Body**:
```json
{
  "title": "My Resume 2024",
  "personal": {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+1-987-654-3210",
    "summary": "Creative designer with 5+ years experience"
  },
  "education": [
    {
      "degree": "Bachelor of Arts",
      "institution": "Design Academy",
      "field": "Graphic Design",
      "year": "2019"
    }
  ],
  "experience": [
    {
      "company": "Design Studio",
      "role": "UI Designer",
      "duration": "2021-Present",
      "description": "Design user interfaces for web and mobile apps"
    }
  ],
  "skills": ["Figma", "Adobe XD", "UI Design", "Prototyping"]
}
```

**Response Example**:
```json
{
  "id": 2,
  "title": "My Resume 2024",
  "personal": {...},
  "education": [...],
  "experience": [...],
  "skills": [...]
}
```

**Status Codes**:
- `201 Created`: Success
- `400 Bad Request`: Invalid request body
- `500 Internal Server Error`: Server error

---

### 4. Update Resume
```http
PUT /resumes/:id
```

**Parameters**:
- `id` (required): Resume ID (number)

**Request Body**:
```json
{
  "title": "Updated Resume Title",
  "personal": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1-234-567-8900",
    "summary": "Updated summary..."
  },
  "education": [...],
  "experience": [...],
  "skills": [...]
}
```

**Response Example**:
```json
{
  "id": 1,
  "title": "Updated Resume Title",
  "personal": {...},
  "education": [...],
  "experience": [...],
  "skills": [...]
}
```

**Status Codes**:
- `200 OK`: Success
- `400 Bad Request`: Invalid request body
- `404 Not Found`: Resume not found
- `500 Internal Server Error`: Server error

---

### 5. Delete Resume
```http
DELETE /resumes/:id
```

**Parameters**:
- `id` (required): Resume ID (number)

**Response**: Empty response body

**Status Codes**:
- `200 OK`: Success
- `404 Not Found`: Resume not found
- `500 Internal Server Error`: Server error

---

## 📊 Data Schema

### Resume Object
```javascript
{
  id: number,                    // Auto-generated
  title: string,                 // Required
  personal: {
    name: string,                // Required
    email: string,               // Required
    phone: string,               // Required
    summary: string              // Optional
  },
  education: [
    {
      degree: string,            // Required
      institution: string,       // Required
      field: string,             // Optional
      year: string               // Required
    }
  ],
  experience: [
    {
      company: string,           // Required
      role: string,              // Required
      duration: string,          // Required
      description: string        // Optional
    }
  ],
  skills: [string]              // Array of strings
}
```

---

## 🔧 Error Handling

### Error Response Format
```json
{
  "error": "Description of the error"
}
```

### Common Errors

**404 Not Found**
```json
{
  "error": "Resume not found"
}
```

**400 Bad Request**
```json
{
  "error": "Invalid request format"
}
```

**500 Internal Server Error**
```json
{
  "error": "Internal server error"
}
```

---

## 💡 Usage Examples

### Using Axios (Frontend)

**Get All Resumes**
```javascript
import axios from 'axios';

const fetchResumes = async () => {
  try {
    const response = await axios.get('http://localhost:5000/resumes');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

**Get Single Resume**
```javascript
const fetchResume = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/resumes/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

**Create Resume**
```javascript
const createResume = async (resumeData) => {
  try {
    const response = await axios.post('http://localhost:5000/resumes', resumeData);
    console.log('Created:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

**Update Resume**
```javascript
const updateResume = async (id, resumeData) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/resumes/${id}`,
      resumeData
    );
    console.log('Updated:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

**Delete Resume**
```javascript
const deleteResume = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/resumes/${id}`);
    console.log('Deleted successfully');
  } catch (error) {
    console.error('Error:', error);
  }
};
```

---

## 🧪 Testing with cURL

### Get All Resumes
```bash
curl -X GET http://localhost:5000/resumes
```

### Get Single Resume
```bash
curl -X GET http://localhost:5000/resumes/1
```

### Create Resume
```bash
curl -X POST http://localhost:5000/resumes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Resume",
    "personal": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1-234-567-8900",
      "summary": "My summary"
    },
    "education": [],
    "experience": [],
    "skills": []
  }'
```

### Update Resume
```bash
curl -X PUT http://localhost:5000/resumes/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Resume",
    "personal": {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "phone": "+1-987-654-3210",
      "summary": "Updated summary"
    },
    "education": [],
    "experience": [],
    "skills": []
  }'
```

### Delete Resume
```bash
curl -X DELETE http://localhost:5000/resumes/1
```

---

## ⚙️ Configuration

### API URL (Frontend)
Located in `src/services/resumeService.js`:
```javascript
const API_URL = 'http://localhost:5000/resumes';
```

### JSON-Server Port
Default: `5000`

To change port:
```bash
json-server --watch db.json --port 3001
```

---

## 🔗 Database File

Location: `db.json`

Initial structure:
```json
{
  "resumes": [
    {
      "id": 1,
      "title": "Sample Resume",
      ...
    }
  ]
}
```

---

## 📝 Notes

- All timestamps are in ISO format (if added later)
- IDs are auto-generated by JSON-Server
- Empty arrays are used for education, experience, and skills
- Text fields should not contain special characters unless URL encoded
- No authentication required for local development
- CORS is enabled by default in JSON-Server

---

## 🚀 Troubleshooting

### CORS Error
If you get CORS errors, ensure JSON-Server is running with CORS enabled (default).

### Connection Refused
Ensure JSON-Server is running:
```bash
npm run server
```

### Port Already in Use
Change the port in the start command:
```bash
json-server --watch db.json --port 3001
```

### API Not Responding
Check if the endpoint is correct and the server is running on the specified port.

---

## 📞 Support

For API-related questions, refer to the main documentation:
- `README.md` - Project overview
- `SETUP.md` - Setup instructions
- `PROJECT_SUMMARY.md` - Project details
- `FEATURES.md` - Feature documentation

---

**API Documentation Complete! 🎉**
