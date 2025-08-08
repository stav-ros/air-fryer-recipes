"use client";

import { Recipe } from "@/data/recipes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChefHat, Star } from "lucide-react";
import Link from "next/link";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
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

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link href={`/recipe/${recipe.id}`}>
        <div className="aspect-video relative overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder-recipe.jpg";
            }}
          />
          <div className="absolute top-2 right-2">
            <Badge className={getDifficultyColor(recipe.difficulty)}>
              {recipe.difficulty}
            </Badge>
          </div>
        </div>
      </Link>
      
      <CardHeader className="pb-3">
        <Link href={`/recipe/${recipe.id}`}>
          <CardTitle className="text-lg line-clamp-2 hover:text-orange-600 transition-colors cursor-pointer">
            {recipe.name}
          </CardTitle>
        </Link>
        <p className="text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{recipe.rating}</span>
          <span className="text-sm text-gray-500">({Math.floor(Math.random() * 50) + 10} reviews)</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {recipe.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {recipe.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{recipe.tags.length - 3}
            </Badge>
          )}
        </div>
        
        <Link href={`/recipe/${recipe.id}`}>
          <Button className="w-full" size="sm">
            View Recipe
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}