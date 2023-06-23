import webClient from "../ApiConf";

export const getUser = async (userId) => {
    try {
      const response = await webClient.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
        console.log(error);
      throw new Error('Failed to fetch user');
    }
  };
  


export const userApi = {
  getMovies
}

function getMovies() {
  return webClient.get('/api/movies')
}
