'use client'

import Link from "next/link"
import RefreshButton from "../RefreshButton"
import BackButton from "../BackButton"
import RecipeCard from "../RecipeCard"
import { RecipesType } from "@/types/types"
import { useState } from "react"

const RecipeList = ({recipes}: {recipes: RecipesType[]}) => {
  
  let newRecipes: RecipesType[] = [];
  if(recipes.length > 8){
    while (newRecipes.length < 8) {
      const currentRecipes = recipes[Math.floor(Math.random() * recipes.length)];
      const alreadyRecipes = newRecipes.some((recipe) => recipe.idMeal === currentRecipes.idMeal);
      if (!alreadyRecipes) {
        newRecipes.push(currentRecipes);
      }
    }
  }else{
    newRecipes = recipes
  }
 
  const [freshRecipePage, setFreshRecipePage] = useState(newRecipes)
  return(
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {freshRecipePage.map((recipe, index) => (
          <RecipeCard {...recipe} key={index}/>
        ))}
        <div className="col-span-full mt-4">
          <Link href="/categories/">
            <BackButton />
          </Link>
        </div>
        <RefreshButton recipes={recipes} setNewRecipes={setFreshRecipePage}/>
      </div>
    </div>
  )
}

export default RecipeList