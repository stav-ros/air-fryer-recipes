"use client";

import { useState, useMemo } from "react";
import { recipes } from "@/data/recipes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";

export function IngredientsIndex() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);

  // Extract all unique ingredients from recipes
  const allIngredients = useMemo(() => {
    const ingredientSet = new Set<string>();
    recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        // Clean up ingredient names (remove quantities and standardize)
        const cleanIngredient = ingredient
          .replace(/^\d+\/\d+\s*/, '') // Remove fractions like "1/2"
          .replace(/^\d+\s*/, '') // Remove whole numbers
          .replace(/cups?|tablespoons?|teaspoons?|pounds?|ounces?|lbs?|oz\s*/gi, '') // Remove measurements
          .replace(/\([^)]*\)/g, '') // Remove parenthetical notes
          .replace(/,.*$/, '') // Remove everything after comma
          .trim();
        
        if (cleanIngredient) {
          ingredientSet.add(cleanIngredient.toLowerCase());
        }
      });
    });
    return Array.from(ingredientSet).sort();
  }, []);

  // Filter ingredients based on search term
  const filteredIngredients = useMemo(() => {
    if (!searchTerm) return allIngredients;
    return allIngredients.filter(ingredient =>
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allIngredients, searchTerm]);

  // Find recipes that contain the selected ingredient
  const recipesWithIngredient = useMemo(() => {
    if (!selectedIngredient) return [];
    return recipes.filter(recipe =>
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(selectedIngredient.toLowerCase())
      )
    );
  }, [selectedIngredient]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Ingredients Index</h1>
        <p className="text-gray-600">Browse recipes by ingredient to find what you can make with what you have</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ingredients List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                All Ingredients
              </CardTitle>
              <Input
                placeholder="Search ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mt-2"
              />
            </CardHeader>
            <CardContent>
              <div className="max-h-96 overflow-y-auto">
                {filteredIngredients.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No ingredients found</p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {filteredIngredients.map((ingredient) => (
                      <Badge
                        key={ingredient}
                        variant={selectedIngredient === ingredient ? "default" : "outline"}
                        className="cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() => setSelectedIngredient(ingredient)}
                      >
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recipes with Selected Ingredient */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                {selectedIngredient ? (
                  <span>Recipes with <span className="text-orange-600">{selectedIngredient}</span></span>
                ) : (
                  "Select an ingredient to see recipes"
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedIngredient ? (
                recipesWithIngredient.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No recipes found with this ingredient</p>
                ) : (
                  <div className="space-y-4">
                    {recipesWithIngredient.map((recipe) => (
                      <div
                        key={recipe.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{recipe.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{recipe.description}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                            <span>⏱️ {recipe.prepTime}</span>
                            <span>👨‍🍳 {recipe.cookTime}</span>
                            <span>🍽️ {recipe.servings} servings</span>
                            <span>⭐ {recipe.rating}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Recipe
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Choose an ingredient from the list to see related recipes</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}