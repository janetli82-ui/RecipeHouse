'use client'

import { userUseContext } from "@/context/userContext";
import { RecipesType, UserContextType } from "@/types/types";


const SavedButton = ({strMeal, strMealThumb, strCountry, idMeal}:RecipesType) => {
  const {user, setUser} = userUseContext() as UserContextType
  const isSaved = user!.recipes.some(recipe => recipe.idMeal === idMeal)//判断是否保存
  const recipeToSaved = {strMeal, strMealThumb, strCountry, idMeal}

  const handleClick = () => {
    if(isSaved){
      setUser({...user!, recipes: user!.recipes.filter(recipe => recipe.idMeal !== idMeal)})
    }else{
      setUser({...user!, recipes:[...user!.recipes, recipeToSaved]})
    }
  }

  
  return(
    <button className="border border-cyan-100 bg-amber-500 rounded-xl p-2 mt-3 cursor-pointer" onClick={handleClick}>
      { isSaved ? <span>Remove Recipe</span> : <span>Save Recipe</span>}
    </button>
  )
}

export default SavedButton