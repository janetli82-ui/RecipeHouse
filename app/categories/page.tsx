'use client'

import CategoryList from "@/component/CategoryList";
import { userUseContext } from "@/context/userContext";
import { UserContextType } from "@/types/types";


const Categories = () => {
  const {user, setUser} = userUseContext() as UserContextType
  const updateFavorite = (category: string) => {
    setUser({ ...user!, favoriteCategory: category });
  };

  return (
    <>
      <CategoryList favorite={user!.favoriteCategory} updateFavorite={updateFavorite}/>
    </>
  );
};
   

export default Categories;
