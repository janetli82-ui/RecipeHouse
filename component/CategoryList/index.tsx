'use client'

import { CategoryType } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoryList = ({ favorite, updateFavorite }: {favorite: string;
  updateFavorite: (category: string) => void}) => {
  const [category, setCategory] = useState<CategoryType[]>([]);
  
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}categories.php`,
        );
        const data = await res.json();
        setCategory(data.categories);
      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
      fetchCategories();
    }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
      {category &&
        category.map((item, index) => (
          <div
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            key={index}
          >
            <div className="relative overflow-hidden cursor-pointer">
              <Link href={`/categories/${item.strCategory}`}>
                <img
                  src={item.strCategoryThumb}
                  alt={item.strCategory}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                {item.strCategory}{" "}
                <button className="cursor-pointer" onClick={() => updateFavorite(item.strCategory)}>{item.strCategory === favorite ? "❤️" : "🤍"}</button>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {item.strCategoryDescription}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategoryList;
