"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, setSelectedCategory }: CategoryFilterProps) {
  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case "all":
        return "All Recipes";
      case "breakfast":
        return "Breakfast";
      case "vegetables":
        return "Vegetables";
      case "vegan":
        return "Vegan";
      case "poultry":
        return "Poultry";
      case "pork-beef-lamb":
        return "Pork, Beef & Lamb";
      case "seafood":
        return "Seafood";
      case "snacks-sandwiches":
        return "Snacks & Sandwiches";
      case "pizza-bread":
        return "Pizza & Bread";
      case "desserts":
        return "Desserts";
      case "for-one":
        return "For One";
      case "for-two":
        return "For Two";
      case "mediterranean":
        return "Mediterranean";
      default:
        return category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
    }
  };

  return (
    <div className="w-full">
      <ScrollArea className="w-full whitespace-nowrap pb-2">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="flex-shrink-0"
            >
              {getCategoryDisplayName(category)}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}