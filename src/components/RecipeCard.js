// import React, { useState, useEffect } from 'react';
// import './RecipeCard.css';

// function RecipeCard({ recipe }) {
//   const [ingredients, setIngredients] = useState([]);
//   const [flipped, setFlipped] = useState(false);

//   useEffect(() => {
//     const fetchIngredients = async () => {
//       const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`);
//       const data = await response.json();
//       if (data.meals) {
//         const meal = data.meals[0];
//         const ingredientsList = [];
//         for (let i = 1; i <= 20; i++) {
//           if (meal[`strIngredient${i}`]) {
//             ingredientsList.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
//           } else {
//             break;
//           }
//         }
//         setIngredients(ingredientsList);
//       }
//     };
//     fetchIngredients();
//   }, [recipe.idMeal]);

//   return (
//     <div className={`recipe-card ${flipped ? 'flipped' : ''}`} onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
//       <div className="card-content front">
//         <h2>{recipe.strMeal}</h2>
//         <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
//       </div>
//       <div className="card-content back">
//         <h2>Ingredients</h2>
//         <ul>
//           {ingredients.map((ingredient, index) => (
//             <li key={index}>{ingredient}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default RecipeCard;
import React, { useState, useEffect } from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  const [ingredients, setIngredients] = useState([]);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`);
      const data = await response.json();
      if (data.meals) {
        const meal = data.meals[0];
        const ingredientsList = [];
        for (let i = 1; i <= 20; i++) {
          if (meal[`strIngredient${i}`]) {
            ingredientsList.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
          } else {
            break;
          }
        }
        setIngredients(ingredientsList);
      }
    };
    fetchIngredients();
  }, [recipe.idMeal]);

  const getPrepTimeIcon = (time) => {
    if (time < 20) return '⏱️'; // Short prep time
    if (time < 40) return '⌛'; // Medium prep time
    return '⏳'; // Long prep time
  };

  return (
    <div className={`recipe-card ${flipped ? 'flipped' : ''}`} onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
      <div className="card-content front">
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
        <p>{getPrepTimeIcon(recipe.preparationTime)} {recipe.preparationTime} mins</p> {/* Display icon with time */}
      </div>
      <div className="card-content back">
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipeCard;



