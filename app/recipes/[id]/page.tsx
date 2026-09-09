import BackButton from "@/component/BackButton";
import SavedButton from "@/component/SavedButton";
import { FullRecipesType } from "@/types/types";
import Link from "next/link";

const RecipePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  let recipe: FullRecipesType;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}lookup.php?i=${id}`,
    );
    const data = await res.json();
    recipe = data.meals[0];
  } catch (error) {
    console.log(error);
  }
  
  //把所有strIngredient的键值对过滤出来
  const keys = Object.keys(recipe!).filter(key => key.includes("strIngredient"))
  //把strIngredient的值为空和null过滤出去 recipe[strIngredient] = "", recipe[strIngredient] = null
  const keysValue = keys.map((key) => recipe[key]).filter(value => value !== "" && value !== null)
  //最后显示的结果是如 tomato - 1pc 
  const ingredients = keysValue.map((ingredient, index) => `${ingredient} - ${recipe[`strMeasure${index + 1}`]}`)
 
  
  return (
    <div className="flex flex-col justify-center items-center h-full p-3 relative">
      {recipe! && 
        <Link href={`/categories/${recipe.strCategory}`} className="absolute md:left-2 md:top-5 left-5 -top-12 ">
          <BackButton />
        </Link>
      }
      {recipe! && (
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6"> 
          <h2 className="text-2xl">Ingredient:</h2>
          <div className="flex flex-wrap gap-2 mt-3">
      
            {ingredients.map((item, index) => (
              <Link
                href={`/ingredients/${item.split(" - ")[0]}`}
                key={index}
                className="bg-white dark:bg-gray-800 
                 border border-gray-300 dark:border-gray-600
                 text-gray-700 dark:text-gray-200
                 px-3 py-1.5 rounded-lg text-sm 
                 shadow-[0_2px_4px_rgba(0,0,0,0.04)] 
                 hover:shadow-md hover:border-gray-400 
                 transition-all"
              >
                {item}
              </Link>
            ))}
          </div>
          <h3 className="text-2xl mt-3">Instruction:</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
            {recipe.strInstructions}
          </p>
          {recipe.strYoutube ? (
            <div
              className="relative rounded-xl overflow-hidden shadow-md"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src={recipe.strYoutube.replace("watch?v=", "embed/")}
                title="YouTube video player"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <p className="text-gray-400">📹 No video available</p>
            </div>
          )}
          <SavedButton {...recipe} />
        </div>
      )}
    </div>
  );
};

export default RecipePage;
