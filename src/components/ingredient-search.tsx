"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";

interface IngredientSearchProps {
  selectedIngredients: string[];
  setSelectedIngredients: (ingredients: string[]) => void;
}

export function IngredientSearch({ selectedIngredients, setSelectedIngredients }: IngredientSearchProps) {
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  const addIngredient = (ingredient: string) => {
    if (ingredient.trim() && !selectedIngredients.includes(ingredient.trim())) {
      setSelectedIngredients([...selectedIngredients, ingredient.trim()]);
      setInputValue("");
    }
  };

  const removeIngredient = (ingredient: string) => {
    setSelectedIngredients(selectedIngredients.filter(ing => ing !== ingredient));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addIngredient(inputValue);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {showInput ? (
        <div className="flex gap-2">
          <Input
            placeholder="Add ingredient..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowInput(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <Button
          variant="outline"
          onClick={() => setShowInput(true)}
          className="w-full justify-start"
        >
          <Search className="h-4 w-4 mr-2" />
          Search by ingredients...
        </Button>
      )}
      
      {selectedIngredients.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {selectedIngredients.map((ingredient) => (
            <Badge key={ingredient} variant="secondary" className="flex items-center gap-1">
              {ingredient}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => removeIngredient(ingredient)}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}