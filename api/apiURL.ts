const API_URL = "https://forkify-api.herokuapp.com/api";
export const getRecipeById =(recipeId)=> `${API_URL}/get?rId=${recipeId}`
export const getRecipeByCategory =(selected)=> `${API_URL}/search?q=${selected}`