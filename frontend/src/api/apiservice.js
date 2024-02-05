const API_URL = "http://127.0.0.1:5000";

export const getTestMessage = async () => {
    try {
      const response = await fetch(`${API_URL}/api/test`);
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error('Error fetching test :', error);
    }
  };