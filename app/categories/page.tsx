'use client'

import CategoryList from "@/component/CategoryList";
import { userUseContext } from "@/context/userContext";
import { UserContextType } from "@/types/types";


const Categories = () => {
  const {user} = userUseContext() as UserContextType

  return (
    <>
      <CategoryList favorite={user!.favoriteCategory} />
    </>
  );
};
   

export default Categories;
