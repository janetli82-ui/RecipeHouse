export type UserType = {
  username:string | null,
  password:string,
  favoriteCategory: string,
  recipes:RecipesType []
}

export type RecipesType = {
  idMeal:string,
  strMeal:string,
  strCountry:string
  strMealThumb:string,
}

export type FullRecipesType = RecipesType & {
  strInstructions:string,
  strYoutube:string,
  strIngredient:string,
  strMeasure:number,
  [key: string]: any;
}

export type CategoryType = {
  strCategory:string,
  strCategoryThumb:string,
  strCategoryDescription:string
}

export type UserContextType = {
  user:UserType | null,
  setUser: (user:UserType | null) => void,
}

export type FreshPageType = {
  recipes:RecipesType[]
  setNewRecipes:(recipe:RecipesType[]) => void
}