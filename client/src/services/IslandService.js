const baseURL = 'http://localhost:3000/api/islands/'

export default {
  getIslands(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  getQuestions(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
