const express = require("express"),
      cors = require("cors"),
      app = express()


const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
const RecipeApi = require('./recipeapi')
const asyncApiCall = async () => {
    const response = await RecipeApi.getRecipes('apples', 5)
    var recipes  = response['recipes'];
    for(var i = 0; i < response.length; i++){
        console.log(recipes['title'])
        console.log(recipes['usedIngredientCount'])
    }
}
asyncApiCall()


app.listen(8887, function(){
    console.log('Server has started on port 3000')
})