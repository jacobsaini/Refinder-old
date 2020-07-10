const axios = require("axios");
require('dotenv').config();
const BASE_URL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com`
module.exports = {
    getRecipes: (ingredients, num) => axios({
        method:"GET",
        url : BASE_URL + `/recipes/findByIngredients`,
        headers: {
            "content-type":"application/x-www-form-urlencoded",
            "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": process.env.RAPIDAPI_KEY
        },
        params: {
            ingredients: ingredients,
            number: num
        }
    })
}