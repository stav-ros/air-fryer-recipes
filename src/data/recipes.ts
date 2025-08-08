export interface Recipe {
  id: string;
  name: string;
  category: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  rating: number;
  image: string;
  tags: string[];
}

export const recipes: Recipe[] = [
  // Breakfast Recipes
  {
    id: "breakfast-1",
    name: "Easy Bread Sticks for Breakfast",
    category: "breakfast",
    description: "Crispy and delicious bread sticks perfect for breakfast",
    prepTime: "15 Minutes",
    cookTime: "8 Minutes",
    servings: 2,
    ingredients: [
      "5 thick Texas toast slices",
      "3 organic eggs, lightly beaten",
      "½ cup almond milk",
      "Two drops vanilla extract",
      "Few pinches of cinnamon powder",
      "2 pinches of ground cardamom powder"
    ],
    instructions: [
      "Preheat the air fryer at 400 degrees F (204 degrees) for 3 minutes.",
      "Take about 5 bread slices and cut the slices into thirds to make sticks.",
      "Take an air fryer basket and line it with parchment paper that fits inside it easily.",
      "Take a large mixing bowl and pour almond milk in it, then add vanilla extract, cinnamon, and cardamom powder.",
      "Stir it well and next whisk egg in a bowl and add it to the milk mixture. Whisk eggs well with milk.",
      "Now dip each bread stick in the egg wash and then single layer it on the basket of the air fryer according to capacity.",
      "The bread needed to be cooked in batches.",
      "Cook it for 8 minutes at 375 degrees F (190 degrees C).",
      "Flip after 4 minutes for even cooking."
    ],
    difficulty: "Easy",
    rating: 4.5,
    image: "/images/breakfast-bread-sticks.jpg",
    tags: ["bread", "cinnamon", "quick", "vegetarian"]
  },
  {
    id: "breakfast-2",
    name: "Toad-In-The-Hole",
    category: "breakfast",
    description: "Classic British breakfast with egg in bread hole",
    prepTime: "5 Minutes",
    cookTime: "10 Minutes",
    servings: 2,
    ingredients: [
      "2 slices of bread",
      "2 eggs",
      "2 tablespoons butter",
      "Salt and pepper to taste",
      "Cooking spray"
    ],
    instructions: [
      "Preheat air fryer to 350°F (175°C).",
      "Cut a hole in the center of each bread slice using a cookie cutter.",
      "Spray air fryer basket with cooking spray.",
      "Place bread slices in basket and crack an egg into each hole.",
      "Dot butter around bread and season with salt and pepper.",
      "Cook for 8-10 minutes until egg is set to your liking.",
      "Serve hot."
    ],
    difficulty: "Easy",
    rating: 4.3,
    image: "/images/toad-in-hole.jpg",
    tags: ["egg", "bread", "british", "quick"]
  },
  {
    id: "breakfast-3",
    name: "Simple Breakfast Frittata",
    category: "breakfast",
    description: "Fluffy and nutritious egg frittata perfect for morning",
    prepTime: "10 Minutes",
    cookTime: "15 Minutes",
    servings: 4,
    ingredients: [
      "6 eggs",
      "1/2 cup milk",
      "1 cup diced bell peppers",
      "1/2 cup diced onions",
      "1 cup spinach",
      "1/2 cup shredded cheese",
      "Salt and pepper to taste",
      "Cooking spray"
    ],
    instructions: [
      "Preheat air fryer to 350°F (175°C).",
      "In a bowl, whisk eggs and milk together.",
      "Add vegetables, cheese, salt, and pepper to egg mixture.",
      "Pour into a greased air fryer-safe pan.",
      "Cook for 12-15 minutes until set.",
      "Let cool slightly before serving."
    ],
    difficulty: "Medium",
    rating: 4.7,
    image: "/images/breakfast-frittata.jpg",
    tags: ["egg", "vegetables", "cheese", "protein"]
  },
  {
    id: "breakfast-4",
    name: "Breakfast Potato Hash",
    category: "breakfast",
    description: "Crispy potato hash with vegetables and herbs",
    prepTime: "15 Minutes",
    cookTime: "20 Minutes",
    servings: 4,
    ingredients: [
      "4 cups diced potatoes",
      "1 bell pepper, diced",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "2 tablespoons olive oil",
      "1 teaspoon paprika",
      "Salt and pepper to taste",
      "Fresh herbs for garnish"
    ],
    instructions: [
      "Preheat air fryer to 380°F (193°C).",
      "Toss potatoes with olive oil and seasonings.",
      "Cook potatoes for 10 minutes.",
      "Add peppers and onions, cook for another 8 minutes.",
      "Add garlic and cook for 2 more minutes.",
      "Garnish with fresh herbs before serving."
    ],
    difficulty: "Medium",
    rating: 4.4,
    image: "/images/potato-hash.jpg",
    tags: ["potatoes", "vegetables", "herbs", "savory"]
  },
  {
    id: "breakfast-5",
    name: "Eggs and Ham Muffins",
    category: "breakfast",
    description: "Protein-packed breakfast muffins with ham and cheese",
    prepTime: "10 Minutes",
    cookTime: "12 Minutes",
    servings: 6,
    ingredients: [
      "6 eggs",
      "1/2 cup milk",
      "1 cup diced ham",
      "1 cup shredded cheese",
      "1/4 cup chopped green onions",
      "Salt and pepper to taste",
      "Cooking spray"
    ],
    instructions: [
      "Preheat air fryer to 350°F (175°C).",
      "Whisk eggs and milk together.",
      "Stir in ham, cheese, and green onions.",
      "Season with salt and pepper.",
      "Pour into greased muffin tin.",
      "Cook for 10-12 minutes until set."
    ],
    difficulty: "Easy",
    rating: 4.6,
    image: "/images/eggs-ham-muffins.jpg",
    tags: ["egg", "ham", "cheese", "protein"]
  },
  {
    id: "breakfast-6",
    name: "Breakfast Omelet",
    category: "breakfast",
    description: "Fluffy air fryer omelet with your favorite fillings",
    prepTime: "5 Minutes",
    cookTime: "8 Minutes",
    servings: 2,
    ingredients: [
      "4 eggs",
      "2 tablespoons milk",
      "1/4 cup diced bell peppers",
      "1/4 cup diced onions",
      "1/4 cup shredded cheese",
      "Salt and pepper to taste",
      "Cooking spray"
    ],
    instructions: [
      "Preheat air fryer to 350°F (175°C).",
      "Whisk eggs and milk together.",
      "Add vegetables and seasonings.",
      "Pour into greased air fryer pan.",
      "Cook for 5 minutes.",
      "Add cheese and cook for 3 more minutes.",
      "Fold and serve immediately."
    ],
    difficulty: "Easy",
    rating: 4.2,
    image: "/images/breakfast-omelet.jpg",
    tags: ["egg", "vegetables", "cheese", "quick"]
  },
  {
    id: "breakfast-7",
    name: "Cheesy Eggs in a Hole",
    category: "breakfast",
    description: "Fun breakfast with eggs cooked in bread holes with cheese",
    prepTime: "5 Minutes",
    cookTime: "10 Minutes",
    servings: 2,
    ingredients: [
      "2 slices bread",
      "2 eggs",
      "1/2 cup shredded cheese",
      "2 tablespoons butter",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 350°F (175°C).",
      "Cut holes in bread slices.",
      "Place bread in air fryer basket.",
      "Crack eggs into holes.",
      "Sprinkle cheese around eggs.",
      "Cook for 8-10 minutes until eggs are set.",
      "Season and serve hot."
    ],
    difficulty: "Easy",
    rating: 4.5,
    image: "/images/cheesy-eggs-hole.jpg",
    tags: ["egg", "bread", "cheese", "fun"]
  },
  {
    id: "breakfast-8",
    name: "Three Berries Muffins",
    category: "breakfast",
    description: "Delicious muffins packed with three types of berries",
    prepTime: "15 Minutes",
    cookTime: "18 Minutes",
    servings: 12,
    ingredients: [
      "2 cups flour",
      "1 cup sugar",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "2 eggs",
      "1 cup milk",
      "1/2 cup oil",
      "1 cup mixed berries",
      "1 cup blueberries",
      "1 cup raspberries"
    ],
    instructions: [
      "Preheat air fryer to 350°F (175°C).",
      "Mix dry ingredients in a bowl.",
      "In another bowl, beat eggs, milk, and oil.",
      "Combine wet and dry ingredients.",
      "Gently fold in berries.",
      "Fill muffin cups 2/3 full.",
      "Cook for 15-18 minutes until done."
    ],
    difficulty: "Medium",
    rating: 4.8,
    image: "/images/berries-muffins.jpg",
    tags: ["berries", "muffins", "sweet", "fruit"]
  },
  {
    id: "breakfast-9",
    name: "Egg in an Avocado",
    category: "breakfast",
    description: "Healthy and trendy breakfast with egg baked in avocado",
    prepTime: "5 Minutes",
    cookTime: "12 Minutes",
    servings: 2,
    ingredients: [
      "2 avocados",
      "4 eggs",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "Fresh herbs for garnish"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Cut avocados in half and remove pit.",
      "Scoop out some flesh to make room for egg.",
      "Place avocado halves in air fryer basket.",
      "Crack an egg into each avocado half.",
      "Season with salt and pepper.",
      "Cook for 10-12 minutes until egg is set.",
      "Garnish with herbs and serve."
    ],
    difficulty: "Easy",
    rating: 4.3,
    image: "/images/egg-avocado.jpg",
    tags: ["avocado", "egg", "healthy", "trendy"]
  },
  {
    id: "breakfast-10",
    name: "Banana and Chocolate Chip Muffins",
    category: "breakfast",
    description: "Moist and delicious muffins with banana and chocolate chips",
    prepTime: "15 Minutes",
    cookTime: "20 Minutes",
    servings: 12,
    ingredients: [
      "3 ripe bananas, mashed",
      "2 cups flour",
      "1 cup sugar",
      "1 teaspoon baking soda",
      "1/2 teaspoon salt",
      "2 eggs",
      "1/3 cup oil",
      "1 cup chocolate chips"
    ],
    instructions: [
      "Preheat air fryer to 350°F (175°C).",
      "Mix dry ingredients in a bowl.",
      "In another bowl, mash bananas and add eggs and oil.",
      "Combine wet and dry ingredients.",
      "Fold in chocolate chips.",
      "Fill muffin cups 2/3 full.",
      "Cook for 18-20 minutes until done."
    ],
    difficulty: "Easy",
    rating: 4.7,
    image: "/images/banana-chocolate-muffins.jpg",
    tags: ["banana", "chocolate", "muffins", "sweet"]
  },

  // Vegetable Recipes
  {
    id: "vegetables-1",
    name: "Zesty Balsamic Bruschetta",
    category: "vegetables",
    description: "Tangy bruschetta with fresh tomatoes and balsamic glaze",
    prepTime: "10 Minutes",
    cookTime: "8 Minutes",
    servings: 4,
    ingredients: [
      "4 tomatoes, diced",
      "1/4 cup balsamic vinegar",
      "2 cloves garlic, minced",
      "1/4 cup olive oil",
      "Fresh basil",
      "Salt and pepper to taste",
      "4 slices bread"
    ],
    instructions: [
      "Preheat air fryer to 350°F (175°C).",
      "Mix tomatoes, garlic, olive oil, and seasonings.",
      "Toast bread slices in air fryer for 3 minutes.",
      "Top bread with tomato mixture.",
      "Drizzle with balsamic vinegar.",
      "Garnish with fresh basil.",
      "Serve immediately."
    ],
    difficulty: "Easy",
    rating: 4.4,
    image: "/images/balsamic-bruschetta.jpg",
    tags: ["tomatoes", "balsamic", "garlic", "appetizer"]
  },
  {
    id: "vegetables-2",
    name: "Easy Ramen Stir Fry",
    category: "vegetables",
    description: "Quick and flavorful vegetable stir fry with ramen noodles",
    prepTime: "10 Minutes",
    cookTime: "12 Minutes",
    servings: 2,
    ingredients: [
      "2 packs ramen noodles",
      "2 cups mixed vegetables",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "1 clove garlic, minced",
      "1 teaspoon ginger, grated"
    ],
    instructions: [
      "Cook ramen noodles according to package.",
      "Preheat air fryer to 375°F (190°C).",
      "Toss vegetables with oil and seasonings.",
      "Cook vegetables for 8 minutes.",
      "Add cooked noodles and soy sauce.",
      "Toss well and cook for 2 more minutes.",
      "Serve hot."
    ],
    difficulty: "Easy",
    rating: 4.2,
    image: "/images/ramen-stir-fry.jpg",
    tags: ["noodles", "vegetables", "asian", "quick"]
  },
  {
    id: "vegetables-3",
    name: "Purple Medley",
    category: "vegetables",
    description: "Colorful mix of purple vegetables roasted to perfection",
    prepTime: "10 Minutes",
    cookTime: "15 Minutes",
    servings: 4,
    ingredients: [
      "1 purple sweet potato, cubed",
      "1 purple cabbage, chopped",
      "1 red onion, quartered",
      "2 tablespoons olive oil",
      "1 teaspoon dried herbs",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 380°F (193°C).",
      "Toss all vegetables with olive oil and seasonings.",
      "Spread in single layer in air fryer basket.",
      "Cook for 12-15 minutes, shaking halfway.",
      "Serve hot as a side dish."
    ],
    difficulty: "Easy",
    rating: 4.3,
    image: "/images/purple-medley.jpg",
    tags: ["purple vegetables", "roasted", "colorful", "healthy"]
  },
  {
    id: "vegetables-4",
    name: "Simple Jicama Chip",
    category: "vegetables",
    description: "Crispy and refreshing jicama chips with lime seasoning",
    prepTime: "15 Minutes",
    cookTime: "20 Minutes",
    servings: 4,
    ingredients: [
      "1 large jicama, thinly sliced",
      "1 tablespoon olive oil",
      "1 teaspoon chili powder",
      "1/2 teaspoon cumin",
      "Juice of 1 lime",
      "Salt to taste"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Toss jicama slices with oil and spices.",
      "Arrange in single layer in basket.",
      "Cook for 15-20 minutes until crispy.",
      "Drizzle with lime juice before serving.",
      "Serve as a healthy snack."
    ],
    difficulty: "Easy",
    rating: 4.1,
    image: "/images/jicama-chips.jpg",
    tags: ["jicama", "chips", "lime", "snack"]
  },
  {
    id: "vegetables-5",
    name: "Easy Ratatouille",
    category: "vegetables",
    description: "Classic French vegetable dish with herbs and olive oil",
    prepTime: "20 Minutes",
    cookTime: "25 Minutes",
    servings: 6,
    ingredients: [
      "1 eggplant, sliced",
      "2 zucchini, sliced",
      "1 bell pepper, sliced",
      "1 onion, sliced",
      "2 tomatoes, sliced",
      "3 tablespoons olive oil",
      "Herbs de Provence",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Toss all vegetables with olive oil and herbs.",
      "Layer vegetables in air fryer basket.",
      "Cook for 20-25 minutes until tender.",
      "Season with salt and pepper.",
      "Serve hot or at room temperature."
    ],
    difficulty: "Medium",
    rating: 4.6,
    image: "/images/ratatouille.jpg",
    tags: ["french", "vegetables", "herbs", "classic"]
  },
  {
    id: "vegetables-6",
    name: "Crunchy Vegetable Nuggets",
    category: "vegetables",
    description: "Kid-friendly vegetable nuggets that are crispy and delicious",
    prepTime: "20 Minutes",
    cookTime: "15 Minutes",
    servings: 4,
    ingredients: [
      "2 cups mixed vegetables, grated",
      "1 cup breadcrumbs",
      "2 eggs",
      "1/2 cup flour",
      "1 teaspoon garlic powder",
      "1 teaspoon onion powder",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 400°F (200°C).",
      "Mix grated vegetables with seasonings.",
      "Form into nugget shapes.",
      "Dip in flour, then egg, then breadcrumbs.",
      "Place in air fryer basket.",
      "Cook for 12-15 minutes until golden.",
      "Serve with dipping sauce."
    ],
    difficulty: "Medium",
    rating: 4.5,
    image: "/images/vegetable-nuggets.jpg",
    tags: ["nuggets", "kid-friendly", "crispy", "vegetables"]
  },
  {
    id: "vegetables-7",
    name: "Garlic Parmesan Green Beans",
    category: "vegetables",
    description: "Crispy green beans with garlic and parmesan cheese",
    prepTime: "5 Minutes",
    cookTime: "10 Minutes",
    servings: 4,
    ingredients: [
      "1 pound green beans, trimmed",
      "2 tablespoons olive oil",
      "3 cloves garlic, minced",
      "1/4 cup parmesan cheese",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)"
    ],
    instructions: [
      "Preheat air fryer to 400°F (200°C).",
      "Toss green beans with olive oil and garlic.",
      "Season with salt and pepper.",
      "Cook for 8-10 minutes until crisp-tender.",
      "Sprinkle with parmesan cheese.",
      "Cook for 1 more minute.",
      "Serve hot."
    ],
    difficulty: "Easy",
    rating: 4.7,
    image: "/images/garlic-parmesan-beans.jpg",
    tags: ["green beans", "garlic", "parmesan", "crispy"]
  },
  {
    id: "vegetables-8",
    name: "Crispy Avocado Fries",
    category: "vegetables",
    description: "Creamy avocado coated and air fried to crispy perfection",
    prepTime: "15 Minutes",
    cookTime: "12 Minutes",
    servings: 4,
    ingredients: [
      "2 ripe avocados",
      "1 cup flour",
      "2 eggs, beaten",
      "1 cup breadcrumbs",
      "1 teaspoon paprika",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 400°F (200°C).",
      "Cut avocados into fries.",
      "Dredge in flour, then egg, then seasoned breadcrumbs.",
      "Place in single layer in basket.",
      "Cook for 10-12 minutes until golden.",
      "Serve with dipping sauce."
    ],
    difficulty: "Medium",
    rating: 4.6,
    image: "/images/avocado-fries.jpg",
    tags: ["avocado", "fries", "crispy", "creamy"]
  },
  {
    id: "vegetables-9",
    name: "Sesame And Balsamic Vinegar Green Beans",
    category: "vegetables",
    description: "Asian-inspired green beans with sesame and balsamic",
    prepTime: "5 Minutes",
    cookTime: "10 Minutes",
    servings: 4,
    ingredients: [
      "1 pound green beans",
      "1 tablespoon sesame oil",
      "1 tablespoon balsamic vinegar",
      "1 tablespoon sesame seeds",
      "1 clove garlic, minced",
      "Salt to taste"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Toss green beans with sesame oil and garlic.",
      "Cook for 8-10 minutes until crisp-tender.",
      "Drizzle with balsamic vinegar.",
      "Sprinkle with sesame seeds.",
      "Serve immediately."
    ],
    difficulty: "Easy",
    rating: 4.4,
    image: "/images/sesame-balsamic-beans.jpg",
    tags: ["green beans", "sesame", "balsamic", "asian"]
  },
  {
    id: "vegetables-10",
    name: "Spicy Herbed Yellow Squash",
    category: "vegetables",
    description: "Flavorful yellow squash with herbs and a spicy kick",
    prepTime: "10 Minutes",
    cookTime: "15 Minutes",
    servings: 4,
    ingredients: [
      "4 yellow squash, sliced",
      "2 tablespoons olive oil",
      "1 teaspoon dried herbs",
      "1/2 teaspoon red pepper flakes",
      "2 cloves garlic, minced",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 380°F (193°C).",
      "Toss squash with olive oil and seasonings.",
      "Arrange in single layer in basket.",
      "Cook for 12-15 minutes until tender.",
      "Shake basket halfway through cooking.",
      "Serve hot."
    ],
    difficulty: "Easy",
    rating: 4.3,
    image: "/images/spicy-squash.jpg",
    tags: ["squash", "spicy", "herbs", "vegetables"]
  },

  // Vegan Recipes
  {
    id: "vegan-1",
    name: "Mixed Veggies Pancakes",
    category: "vegan",
    description: "Savory pancakes packed with mixed vegetables",
    prepTime: "20 Minutes",
    cookTime: "15 Minutes",
    servings: 6,
    ingredients: [
      "2 cups flour",
      "1 cup plant-based milk",
      "2 cups mixed vegetables, grated",
      "1 teaspoon baking powder",
      "1 teaspoon onion powder",
      "Salt and pepper to taste",
      "Oil for cooking"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Mix flour, baking powder, and seasonings.",
      "Add plant-based milk and vegetables.",
      "Pour batter into greased pancake molds.",
      "Cook for 10-12 minutes until golden.",
      "Flip and cook for 2-3 more minutes.",
      "Serve hot."
    ],
    difficulty: "Medium",
    rating: 4.2,
    image: "/images/veggie-pancakes.jpg",
    tags: ["vegan", "pancakes", "vegetables", "savory"]
  },
  {
    id: "vegan-2",
    name: "Vegan Coconut French Toasts",
    category: "vegan",
    description: "Dairy-free French toast with coconut milk",
    prepTime: "10 Minutes",
    cookTime: "12 Minutes",
    servings: 4,
    ingredients: [
      "8 slices bread",
      "1 cup coconut milk",
      "2 tablespoons maple syrup",
      "1 teaspoon vanilla extract",
      "1 teaspoon cinnamon",
      "Cooking spray"
    ],
    instructions: [
      "Preheat air fryer to 350°F (175°C).",
      "Mix coconut milk, maple syrup, vanilla, and cinnamon.",
      "Dip bread slices in mixture.",
      "Place in air fryer basket.",
      "Cook for 6-8 minutes per side.",
      "Serve with maple syrup."
    ],
    difficulty: "Easy",
    rating: 4.5,
    image: "/images/coconut-french-toast.jpg",
    tags: ["vegan", "french toast", "coconut", "breakfast"]
  },
  {
    id: "vegan-3",
    name: "Delicious Lemon Tofu",
    category: "vegan",
    description: "Zesty lemon-marinated tofu air fried to perfection",
    prepTime: "15 Minutes",
    cookTime: "15 Minutes",
    servings: 4,
    ingredients: [
      "1 block firm tofu, pressed",
      "3 tablespoons lemon juice",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "1 teaspoon lemon zest",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 400°F (200°C).",
      "Cut tofu into cubes.",
      "Marinate with lemon juice, oil, garlic, and zest.",
      "Place in air fryer basket.",
      "Cook for 12-15 minutes until golden.",
      "Season with salt and pepper.",
      "Serve hot."
    ],
    difficulty: "Easy",
    rating: 4.4,
    image: "/images/lemon-tofu.jpg",
    tags: ["vegan", "tofu", "lemon", "protein"]
  },
  {
    id: "vegan-4",
    name: "Crispy Potato Nuggets",
    category: "vegan",
    description: "Crispy potato nuggets perfect for snacking",
    prepTime: "20 Minutes",
    cookTime: "20 Minutes",
    servings: 6,
    ingredients: [
      "4 potatoes, boiled",
      "1 cup breadcrumbs",
      "2 tablespoons flour",
      "1 teaspoon paprika",
      "1 teaspoon garlic powder",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 400°F (200°C).",
      "Mash potatoes and season.",
      "Form into nugget shapes.",
      "Coat with flour, then breadcrumbs.",
      "Place in air fryer basket.",
      "Cook for 15-20 minutes until crispy.",
      "Serve with dipping sauce."
    ],
    difficulty: "Medium",
    rating: 4.6,
    image: "/images/potato-nuggets.jpg",
    tags: ["vegan", "potatoes", "nuggets", "crispy"]
  },
  {
    id: "vegan-5",
    name: "Vegan Corn Fritters",
    category: "vegan",
    description: "Sweet and savory corn fritters with herbs",
    prepTime: "15 Minutes",
    cookTime: "12 Minutes",
    servings: 8,
    ingredients: [
      "2 cups corn",
      "1 cup flour",
      "1/2 cup plant-based milk",
      "2 tablespoons chopped herbs",
      "1 teaspoon baking powder",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Mix all ingredients to form batter.",
      "Drop spoonfuls into air fryer basket.",
      "Cook for 8-10 minutes per batch.",
      "Flip halfway through cooking.",
      "Serve hot."
    ],
    difficulty: "Easy",
    rating: 4.3,
    image: "/images/corn-fritters.jpg",
    tags: ["vegan", "corn", "fritters", "herbs"]
  },
  {
    id: "vegan-6",
    name: "Herbed and Spiced Baked Tofu Fries",
    category: "vegan",
    description: "Crispy tofu fries with herbs and spices",
    prepTime: "15 Minutes",
    cookTime: "20 Minutes",
    servings: 4,
    ingredients: [
      "1 block firm tofu",
      "2 tablespoons olive oil",
      "1 teaspoon paprika",
      "1 teaspoon garlic powder",
      "1 teaspoon dried herbs",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 400°F (200°C).",
      "Press tofu and cut into fry shapes.",
      "Toss with oil and seasonings.",
      "Place in single layer in basket.",
      "Cook for 15-20 minutes until crispy.",
      "Serve with dipping sauce."
    ],
    difficulty: "Easy",
    rating: 4.5,
    image: "/images/tofu-fries.jpg",
    tags: ["vegan", "tofu", "fries", "crispy"]
  },
  {
    id: "vegan-7",
    name: "Mushroom Pizzas with Hummus Drizzle",
    category: "vegan",
    description: "Mini mushroom pizzas topped with hummus",
    prepTime: "15 Minutes",
    cookTime: "12 Minutes",
    servings: 4,
    ingredients: [
      "8 large mushrooms",
      "1/2 cup pizza sauce",
      "1 cup vegan cheese",
      "1/4 cup hummus",
      "Fresh herbs",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Remove mushroom stems.",
      "Fill with pizza sauce and cheese.",
      "Place in air fryer basket.",
      "Cook for 8-10 minutes.",
      "Drizzle with hummus and herbs.",
      "Serve hot."
    ],
    difficulty: "Medium",
    rating: 4.7,
    image: "/images/mushroom-pizzas.jpg",
    tags: ["vegan", "mushrooms", "pizza", "hummus"]
  },
  {
    id: "vegan-8",
    name: "Vegan Air Fryer Cold Soup",
    category: "vegan",
    description: "Refreshing cold soup perfect for summer",
    prepTime: "10 Minutes",
    cookTime: "5 Minutes",
    servings: 4,
    ingredients: [
      "2 cucumbers, chopped",
      "2 tomatoes, chopped",
      "1 bell pepper, chopped",
      "1/4 cup olive oil",
      "2 tablespoons lemon juice",
      "Fresh herbs"
    ],
    instructions: [
      "Preheat air fryer to 350°F (175°C).",
      "Roast vegetables for 3-5 minutes.",
      "Let cool slightly.",
      "Blend with oil and lemon juice.",
      "Chill before serving.",
      "Garnish with fresh herbs."
    ],
    difficulty: "Easy",
    rating: 4.2,
    image: "/images/cold-soup.jpg",
    tags: ["vegan", "soup", "cold", "refreshing"]
  },
  {
    id: "vegan-9",
    name: "Mexican Style Corn on the Cob",
    category: "vegan",
    description: "Spicy Mexican-style corn with lime and chili",
    prepTime: "5 Minutes",
    cookTime: "15 Minutes",
    servings: 4,
    ingredients: [
      "4 ears of corn",
      "2 tablespoons vegan butter",
      "1 teaspoon chili powder",
      "1 lime, cut into wedges",
      "Salt to taste",
      "Fresh cilantro"
    ],
    instructions: [
      "Preheat air fryer to 400°F (200°C).",
      "Brush corn with vegan butter.",
      "Cook for 12-15 minutes.",
      "Sprinkle with chili powder and salt.",
      "Serve with lime wedges and cilantro."
    ],
    difficulty: "Easy",
    rating: 4.6,
    image: "/images/mexican-corn.jpg",
    tags: ["vegan", "corn", "mexican", "spicy"]
  },
  {
    id: "vegan-10",
    name: "Air Fryer Cinnamon Coated Chaffle",
    category: "vegan",
    description: "Sweet and crispy chaffle with cinnamon coating",
    prepTime: "5 Minutes",
    cookTime: "8 Minutes",
    servings: 2,
    ingredients: [
      "1 cup almond flour",
      "2 tablespoons flaxseed meal",
      "1 teaspoon baking powder",
      "1 cup plant-based milk",
      "1 tablespoon maple syrup",
      "1 teaspoon cinnamon"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Mix all ingredients to form batter.",
      "Pour into waffle iron insert.",
      "Cook for 6-8 minutes until crispy.",
      "Sprinkle with cinnamon.",
      "Serve with maple syrup."
    ],
    difficulty: "Easy",
    rating: 4.3,
    image: "/images/cinnamon-chaffle.jpg",
    tags: ["vegan", "chaffle", "cinnamon", "sweet"]
  },

  // Poultry Recipes
  {
    id: "poultry-1",
    name: "Glazed Chicken Breast with Basil Corn Salad",
    category: "poultry",
    description: "Tender glazed chicken breast served with fresh basil corn salad",
    prepTime: "15 Minutes",
    cookTime: "20 Minutes",
    servings: 4,
    ingredients: [
      "4 chicken breasts",
      "1/4 cup honey",
      "2 tablespoons soy sauce",
      "2 cloves garlic, minced",
      "2 cups corn kernels",
      "1/4 cup fresh basil",
      "1 tablespoon olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Mix honey, soy sauce, and garlic for glaze.",
      "Brush chicken with glaze.",
      "Cook for 18-20 minutes until done.",
      "Toss corn with basil and oil.",
      "Serve chicken with corn salad."
    ],
    difficulty: "Medium",
    rating: 4.7,
    image: "/images/glazed-chicken.jpg",
    tags: ["chicken", "honey", "basil", "corn"]
  },
  {
    id: "poultry-2",
    name: "Thanksgiving Turkey",
    category: "poultry",
    description: "Juicy air fryer turkey breast perfect for small gatherings",
    prepTime: "20 Minutes",
    cookTime: "45 Minutes",
    servings: 8,
    ingredients: [
      "1 turkey breast (4-5 lbs)",
      "2 tablespoons olive oil",
      "1 teaspoon dried herbs",
      "1 teaspoon garlic powder",
      "Salt and pepper to taste",
      "1 cup chicken broth"
    ],
    instructions: [
      "Preheat air fryer to 350°F (175°C).",
      "Rub turkey with oil and seasonings.",
      "Place in air fryer basket.",
      "Cook for 40-45 minutes.",
      "Add broth to prevent drying.",
      "Let rest before slicing.",
      "Serve with gravy."
    ],
    difficulty: "Hard",
    rating: 4.8,
    image: "/images/thanksgiving-turkey.jpg",
    tags: ["turkey", "thanksgiving", "herbs", "juicy"]
  },
  {
    id: "poultry-3",
    name: "Air Fryer Cheesy Chicken Sausage Rolls",
    category: "poultry",
    description: "Flaky pastry rolls filled with chicken sausage and cheese",
    prepTime: "20 Minutes",
    cookTime: "15 Minutes",
    servings: 6,
    ingredients: [
      "1 sheet puff pastry",
      "6 chicken sausages",
      "1 cup shredded cheese",
      "1 egg, beaten",
      "1 teaspoon dried herbs",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Cut pastry into strips.",
      "Wrap sausages in pastry.",
      "Brush with egg and sprinkle with cheese.",
      "Place in air fryer basket.",
      "Cook for 12-15 minutes until golden.",
      "Serve hot."
    ],
    difficulty: "Medium",
    rating: 4.5,
    image: "/images/sausage-rolls.jpg",
    tags: ["chicken", "sausage", "cheese", "pastry"]
  },
  {
    id: "poultry-4",
    name: "Air fryer crumbed chicken schnitzel",
    category: "poultry",
    description: "Crispy chicken schnitzel with golden breadcrumb coating",
    prepTime: "20 Minutes",
    cookTime: "15 Minutes",
    servings: 4,
    ingredients: [
      "4 chicken breasts",
      "1 cup flour",
      "2 eggs, beaten",
      "2 cups breadcrumbs",
      "1 teaspoon paprika",
      "Salt and pepper to taste",
      "Cooking spray"
    ],
    instructions: [
      "Preheat air fryer to 400°F (200°C).",
      "Pound chicken to even thickness.",
      "Dredge in flour, then egg, then breadcrumbs.",
      "Spray with cooking spray.",
      "Cook for 12-15 minutes until golden.",
      "Serve with lemon wedges."
    ],
    difficulty: "Medium",
    rating: 4.6,
    image: "/images/chicken-schnitzel.jpg",
    tags: ["chicken", "schnitzel", "crispy", "breaded"]
  },
  {
    id: "poultry-5",
    name: "Air fryer Japanese chicken tenders",
    category: "poultry",
    description: "Japanese-style chicken tenders with panko breadcrumbs",
    prepTime: "15 Minutes",
    cookTime: "12 Minutes",
    servings: 4,
    ingredients: [
      "1 lb chicken tenders",
      "1 cup panko breadcrumbs",
      "2 tablespoons soy sauce",
      "1 tablespoon mirin",
      "1 teaspoon ginger, grated",
      "2 cloves garlic, minced"
    ],
    instructions: [
      "Preheat air fryer to 400°F (200°C).",
      "Marinate chicken in soy sauce, mirin, ginger, and garlic.",
      "Coat with panko breadcrumbs.",
      "Place in air fryer basket.",
      "Cook for 10-12 minutes until golden.",
      "Serve with dipping sauce."
    ],
    difficulty: "Medium",
    rating: 4.7,
    image: "/images/japanese-tenders.jpg",
    tags: ["chicken", "japanese", "panko", "tenders"]
  },
  {
    id: "poultry-6",
    name: "Classic Hawaiian Pineapple Chicken",
    category: "poultry",
    description: "Sweet and savory chicken with pineapple and teriyaki glaze",
    prepTime: "15 Minutes",
    cookTime: "20 Minutes",
    servings: 4,
    ingredients: [
      "4 chicken thighs",
      "1 cup pineapple chunks",
      "1/4 cup teriyaki sauce",
      "1 tablespoon brown sugar",
      "1 teaspoon ginger, grated",
      "Green onions for garnish"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Mix teriyaki sauce, brown sugar, and ginger.",
      "Marinate chicken in sauce.",
      "Add pineapple chunks.",
      "Cook for 18-20 minutes.",
      "Garnish with green onions.",
      "Serve with rice."
    ],
    difficulty: "Easy",
    rating: 4.8,
    image: "/images/hawaiian-chicken.jpg",
    tags: ["chicken", "pineapple", "hawaiian", "teriyaki"]
  },
  {
    id: "poultry-7",
    name: "Nashville Hot Chicken",
    category: "poultry",
    description: "Spicy Nashville-style hot chicken with crispy coating",
    prepTime: "20 Minutes",
    cookTime: "15 Minutes",
    servings: 4,
    ingredients: [
      "4 chicken pieces",
      "1 cup buttermilk",
      "2 cups flour",
      "2 tablespoons cayenne pepper",
      "1 tablespoon paprika",
      "Salt and pepper to taste",
      "Hot sauce for serving"
    ],
    instructions: [
      "Preheat air fryer to 400°F (200°C).",
      "Soak chicken in buttermilk.",
      "Mix flour with spices.",
      "Coat chicken in flour mixture.",
      "Cook for 12-15 minutes until crispy.",
      "Toss with hot sauce.",
      "Serve with pickles."
    ],
    difficulty: "Medium",
    rating: 4.6,
    image: "/images/nashville-chicken.jpg",
    tags: ["chicken", "spicy", "nashville", "hot"]
  },
  {
    id: "poultry-8",
    name: "Air Fryer Pistachio Crusted Chicken",
    category: "poultry",
    description: "Elegant chicken with crunchy pistachio crust",
    prepTime: "20 Minutes",
    cookTime: "18 Minutes",
    servings: 4,
    ingredients: [
      "4 chicken breasts",
      "1 cup pistachios, chopped",
      "1/2 cup breadcrumbs",
      "2 eggs, beaten",
      "1 teaspoon dried herbs",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Mix pistachios and breadcrumbs.",
      "Dip chicken in egg, then pistachio mixture.",
      "Place in air fryer basket.",
      "Cook for 15-18 minutes until done.",
      "Let rest before serving.",
      "Serve with vegetables."
    ],
    difficulty: "Medium",
    rating: 4.7,
    image: "/images/pistachio-chicken.jpg",
    tags: ["chicken", "pistachio", "crusted", "elegant"]
  },
  {
    id: "poultry-9",
    name: "Air Fryer Chicken Enchiladas",
    category: "poultry",
    description: "Cheesy chicken enchiladas with authentic Mexican flavors",
    prepTime: "25 Minutes",
    cookTime: "20 Minutes",
    servings: 6,
    ingredients: [
      "8 tortillas",
      "2 cups cooked chicken, shredded",
      "1 cup enchilada sauce",
      "2 cups cheese, shredded",
      "1 onion, diced",
      "1 bell pepper, diced"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Mix chicken with onions and peppers.",
      "Fill tortillas with chicken mixture.",
      "Roll up and place in baking dish.",
      "Top with sauce and cheese.",
      "Cook for 15-20 minutes until bubbly.",
      "Serve with sour cream."
    ],
    difficulty: "Medium",
    rating: 4.8,
    image: "/images/chicken-enchiladas.jpg",
    tags: ["chicken", "enchiladas", "mexican", "cheesy"]
  },
  {
    id: "poultry-10",
    name: "Air Fried Chicken Quesadilla",
    category: "poultry",
    description: "Crispy quesadilla filled with chicken and cheese",
    prepTime: "10 Minutes",
    cookTime: "8 Minutes",
    servings: 2,
    ingredients: [
      "4 tortillas",
      "2 cups cooked chicken, shredded",
      "2 cups cheese, shredded",
      "1/2 cup salsa",
      "1 avocado, sliced",
      "Sour cream for serving"
    ],
    instructions: [
      "Preheat air fryer to 375°F (190°C).",
      "Place tortilla in basket.",
      "Add chicken, cheese, and salsa.",
      "Top with second tortilla.",
      "Cook for 6-8 minutes until crispy.",
      "Cut into wedges.",
      "Serve with avocado and sour cream."
    ],
    difficulty: "Easy",
    rating: 4.5,
    image: "/images/chicken-quesadilla.jpg",
    tags: ["chicken", "quesadilla", "mexican", "quick"]
  }
];