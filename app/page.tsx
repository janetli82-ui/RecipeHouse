'use client'

import { userUseContext } from "@/context/userContext";
import { RecipesType, UserContextType } from "@/types/types";
import { useState, useEffect } from "react";
import RecipeCard from "@/component/RecipeCard";


export default function Home (){
  const {user} = userUseContext() as UserContextType
  const [favoriteRecipe, setFavoriteRecipe] = useState<RecipesType | null>(null)
  const fetchFavorite = async () => {
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${user?.favoriteCategory}`)
      const data = await res.json()
      const randomRecipe = data.meals[Math.floor(Math.random() * data.meals.length)]
      setFavoriteRecipe(randomRecipe)
    }catch(error){
      console.log(error);
    }
  }

  
  useEffect(()=> {
   fetchFavorite()
  }, [user?.favoriteCategory])


  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl">Welcome back, {user?.username}! Based on your preference ({user?.favoriteCategory}), here's a recipe recommended for you:</h2>
      <div className="flex gap-5 md:mt-6 -mt-2 m-auto">
        {favoriteRecipe && <RecipeCard {...favoriteRecipe}/>}
      </div>
    </div>
  );
}
