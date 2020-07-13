const express = require("express"),
      bodyParser = require('body-parser'),
      cors = require("cors"),
      app = express()
    

const corsOptions = {
    origin: 'http://localhost:4200/',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const RecipeApi = require('./recipeapi')


app.get("/", function(req,res){
    var ingredient = req.query.ingredients;
    const query = {ingredients: ingredient, number: '5'}
    const asyncApiCall = async () => {
        const response = await RecipeApi.getRecipes(query)
        var recipes  = response['data'];
            recipes.forEach(function(recipe) {
                console.log(recipe.title)
            });
    }
    asyncApiCall()
})



app.listen(8887, function(){
    console.log('Server has started on port 8887')
})