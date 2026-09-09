import { FreshPageType, RecipesType } from "@/types/types";

const RefreshButton = ({ recipes, setNewRecipes }: FreshPageType) => {
  const handleClick = () => {
    let newRecipes: RecipesType[] = [];
    if (recipes.length > 8) {
      while (newRecipes.length < 8) {
        const currentRecipes =
          recipes[Math.floor(Math.random() * recipes.length)];
        const alreadyRecipes = newRecipes.some(
          (recipe) => recipe.idMeal === currentRecipes.idMeal,
        );
        if (!alreadyRecipes) {
          newRecipes.push(currentRecipes);
        }
      }
    } else {
      newRecipes = recipes;
    }
    setNewRecipes(newRecipes);
  }
  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="text-3xl absolute left-3 bottom-8 cursor-pointer"
      >
        🔄
      </button>
    </div>
  );
};

export default RefreshButton;
