'use client'

import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard";
import { RecipesType } from "@/types/types";

const Public = () => {
  const [recipes, setRecipes] = useState<RecipesType | null>(null);

  const fetchPublicRecipes = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}random.php`,
      );
      const data = await res.json();
      if(data) setRecipes(data.meals[0])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPublicRecipes();
  }, []);

  return (
      <div className="w-full max-w-4xl m-auto mt-5">
        <h3 className="text-2xl mb-4 text-center">
          Log in to explore the recipe
        </h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {recipes &&
            <RecipeCard  {...recipes} />
          }
        </div>
      </div>
  
  )
};

export default Public;
