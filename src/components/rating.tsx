"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

export function Rating({ 
  value, 
  onRatingChange, 
  readonly = false, 
  size = "md",
  showValue = false 
}: RatingProps) {
  const [hoverValue, setHoverValue] = useState(0);

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "w-4 h-4";
      case "lg":
        return "w-6 h-6";
      default:
        return "w-5 h-5";
    }
  };

  const handleClick = (rating: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(rating);
    }
  };

  const handleMouseEnter = (rating: number) => {
    if (!readonly) {
      setHoverValue(rating);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverValue(0);
    }
  };

  const renderStar = (starValue: number) => {
    const isFilled = (hoverValue || value) >= starValue;
    const isHalfFilled = (hoverValue || value) >= starValue - 0.5 && (hoverValue || value) < starValue;
    
    return (
      <Star
        key={starValue}
        className={`${getSizeClass()} ${
          isFilled 
            ? "fill-yellow-400 text-yellow-400" 
            : isHalfFilled
            ? "fill-yellow-200 text-yellow-400"
            : "text-gray-300"
        } ${!readonly ? "cursor-pointer hover:scale-110 transition-transform" : ""}`}
        onClick={() => handleClick(starValue)}
        onMouseEnter={() => handleMouseEnter(starValue)}
        onMouseLeave={handleMouseLeave}
      />
    );
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(renderStar)}
      {showValue && (
        <span className="ml-2 text-sm font-medium text-gray-700">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
}