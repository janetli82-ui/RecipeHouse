'use client'


import RecipeCard from "@/component/RecipeCard"
import { userUseContext } from "@/context/userContext"
import { UserContextType } from "@/types/types"

const Profile = () => {
  const {user} = userUseContext() as UserContextType
  const savedRecipes = user?.recipes || []
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        {user?.username} saved ❤️ ({savedRecipes.length})
      </h2>
      {savedRecipes.length === 0 ? (
        <p className="text-gray-500">No found recipes</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {savedRecipes.map((meal, index) => (
            <RecipeCard key={index} {...meal}/>
          ))}
        </div>
      )}
    </div>
  );
};


export default Profile