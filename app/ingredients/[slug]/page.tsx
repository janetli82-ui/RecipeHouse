import RecipeList from "@/component/RecipeList";

const IngredientPage = async ({params}:{params: Promise<{ slug: string }>}) => {
  const { slug } = await params
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?i=${slug}`,
  );
  const data = await res.json();
  const recipes = data.meals;

  return(
    <div>
      <RecipeList recipes={recipes} />
    </div>
  )
}

export default IngredientPage