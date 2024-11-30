import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, searchPerformed }) {
  if (searchPerformed && (!recipes || recipes.length === 0)) {
    return <p>No recipes found.</p>; // Display the message only after a search is performed
  }

  return (
    <div className="recipe-list">
        
      {recipes && recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
      
    </div>
  );
}

export default RecipeList;
