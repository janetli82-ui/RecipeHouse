import RecipeList from "@/component/RecipeList";

const CategoryDetail = async ({
  params, 
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}filter.php?c=${categoryName}`,
  );
  const data = await res.json();
  const recipes = data.meals;
  

  return (
    <>
      <RecipeList recipes={recipes} />
    </>
  );
};

export default CategoryDetail;
