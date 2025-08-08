"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { recipes } from "@/data/recipes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/rating";
import { Clock, Users, ChefHat, ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export default function RecipeDetail() {
  const params = useParams();
  const recipeId = params.id as string;
  const [userRating, setUserRating] = useState(0);
  const [showFullIngredients, setShowFullIngredients] = useState(false);
  const [showFullInstructions, setShowFullInstructions] = useState(false);

  const recipe = recipes.find(r => r.id === recipeId);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Recipe Not Found</h1>
          <Link href="/" className="text-orange-600 hover:text-orange-700">
            ← Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const ingredientsToShow = showFullIngredients 
    ? recipe.ingredients 
    : recipe.ingredients.slice(0, 5);

  const instructionsToShow = showFullInstructions 
    ? recipe.instructions 
    : recipe.instructions.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Recipes
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 lg:space-y-6">
            {/* Recipe Header */}
            <Card>
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder-recipe.jpg";
                  }}
                />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <Badge className={getDifficultyColor(recipe.difficulty)}>
                    {recipe.difficulty}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl sm:text-3xl">{recipe.name}</CardTitle>
                <p className="text-gray-600 text-base sm:text-lg">{recipe.description}</p>
                
                <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Prep: {recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChefHat className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Cook: {recipe.cookTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Rating value={recipe.rating} readonly size="md sm:lg" showValue />
                    <span className="text-sm text-gray-500">
                      ({Math.floor(Math.random() * 50) + 10} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
            </Card>

            {/* Ingredients */}
            <Card>
              <CardHeader>
                <CardTitle>Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {ingredientsToShow.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
                {recipe.ingredients.length > 5 && (
                  <Button
                    variant="ghost"
                    onClick={() => setShowFullIngredients(!showFullIngredients)}
                    className="mt-4"
                  >
                    {showFullIngredients ? "Show Less" : `Show ${recipe.ingredients.length - 5} More`}
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {instructionsToShow.map((instruction, index) => (
                    <li key={index} className="flex">
                      <span className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold mr-3">
                        {index + 1}
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
                {recipe.instructions.length > 5 && (
                  <Button
                    variant="ghost"
                    onClick={() => setShowFullInstructions(!showFullInstructions)}
                    className="mt-4"
                  >
                    {showFullInstructions ? "Show Less" : `Show ${recipe.instructions.length - 5} More Steps`}
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rating Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Rate This Recipe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Rating 
                    value={userRating} 
                    onRatingChange={setUserRating}
                    size="lg"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    {userRating > 0 
                      ? `You rated this recipe ${userRating} stars` 
                      : "Click to rate this recipe"
                    }
                  </p>
                  {userRating > 0 && (
                    <Button className="mt-4 w-full">
                      Submit Rating
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Nutrition Info */}
            <Card>
              <CardHeader>
                <CardTitle>Nutrition Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Calories:</span>
                    <span className="font-medium">{Math.floor(Math.random() * 500) + 200}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Protein:</span>
                    <span className="font-medium">{Math.floor(Math.random() * 30) + 10}g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbs:</span>
                    <span className="font-medium">{Math.floor(Math.random() * 50) + 20}g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fat:</span>
                    <span className="font-medium">{Math.floor(Math.random() * 20) + 5}g</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar Recipes */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Recipes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recipes
                    .filter(r => r.category === recipe.category && r.id !== recipe.id)
                    .slice(0, 3)
                    .map((similarRecipe) => (
                      <Link 
                        key={similarRecipe.id} 
                        href={`/recipe/${similarRecipe.id}`}
                        className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-medium text-sm">{similarRecipe.name}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          <Rating value={similarRecipe.rating} readonly size="sm" />
                        </div>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}