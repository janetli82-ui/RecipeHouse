'use client'

import { RecipesType } from "@/types/types"
import Link from "next/link"

const RecipeCard = ({ strMeal, strMealThumb, strCountry, idMeal }: RecipesType) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 border border-gray-200 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow h-full">
      <Link href={`/recipes/${idMeal}`} className="flex flex-col h-full items-center"> 
        <img src={strMealThumb} alt={strMeal} className="w-fit h-48 object-cover rounded-xl mb-4"/> 
      </Link>
      <h2 className="text-base font-bold text-gray-800 text-center leading-relaxed line-clamp-1">
        {strMeal}
      </h2>
      <h3 className="text-sm text-gray-500 text-center">🌍 {strCountry}</h3>
    </div>
  )
}

export default RecipeCard