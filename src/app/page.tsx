"use client";

import { useState } from "react";
import Link from "next/link";
import { RecipeCard } from "@/components/recipe-card";
import { CategoryFilter } from "@/components/category-filter";
import { IngredientSearch } from "@/components/ingredient-search";
import { recipes } from "@/data/recipes";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const categories = [
    "all",
    "breakfast",
    "vegetables",
    "vegan",
    "poultry",
    "pork-beef-lamb",
    "seafood",
    "snacks-sandwiches",
    "pizza-bread",
    "desserts",
    "for-one",
    "for-two",
    "mediterranean"
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === "all" || recipe.category === selectedCategory;
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIngredients = selectedIngredients.length === 0 || 
                              selectedIngredients.every(ingredient => 
                                recipe.ingredients.some(ri => 
                                  ri.toLowerCase().includes(ingredient.toLowerCase())
                                )
                              );
    
    return matchesCategory && matchesSearch && matchesIngredients;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Air Fryer Cookbook</h1>
              <p className="text-gray-600 mt-1">1000+ Recipes for Fast & Healthy Meals</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Link href="/ingredients" className="text-orange-600 hover:text-orange-700 font-medium text-sm sm:text-base">
                Ingredients Index
              </Link>
              <div className="w-12 h-12 sm:w-16 sm:h-16">
                <img
                  src="/logo.svg"
                  alt="Air Fryer Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <IngredientSearch
              selectedIngredients={selectedIngredients}
              setSelectedIngredients={setSelectedIngredients}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              {selectedCategory === "all" ? "All Recipes" : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace('-', ' ')}
            </h2>
            <span className="text-gray-600">
              {filteredRecipes.length} recipes found
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No recipes found. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}