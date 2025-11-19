import axios from 'axios';

const API_URL = 'http://localhost:5000/resumes';

const resumeService = {
  // GET all resumes
  getAllResumes: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching resumes:', error);
      throw error;
    }
  },

  // GET single resume by ID
  getResumeById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching resume ${id}:`, error);
      throw error;
    }
  },

  // CREATE new resume
  createResume: async (resumeData) => {
    try {
      const response = await axios.post(API_URL, resumeData);
      return response.data;
    } catch (error) {
      console.error('Error creating resume:', error);
      throw error;
    }
  },

  // UPDATE resume
  updateResume: async (id, resumeData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, resumeData);
      return response.data;
    } catch (error) {
      console.error(`Error updating resume ${id}:`, error);
      throw error;
    }
  },

  // DELETE resume
  deleteResume: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting resume ${id}:`, error);
      throw error;
    }
  },
};

export default resumeService;
