import React, { useState } from 'react';
import './Recipe.css';
import axios from 'axios';

function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [ingredient, setIngredient] = useState('');
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // New state to track if a search has been made

  const fetchRecipe = async () => {
    if (ingredient.trim() === '') {
      setError('Please enter an ingredient to search for recipes.');
      return;
    }

    try {
     
      setLoading(true);
      setError(null);
      setHasSearched(true); // Mark that the user has searched
      const apiKey = '165192129da44bef86db6acbb8fefa89';
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${ingredient}&apiKey=${apiKey}`
      );

      setRecipe(response.data.results);
      setSelectedRecipe(null); // Clear previous selected recipe
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const FetchSelectedRecipe = async (recipeId) => {
    try {
      setLoading(true);
      const apiKey = '165192129da44bef86db6acbb8fefa89';
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
      );

      setSelectedRecipe(response.data);
      setError(null);
    } catch (err) {
      setError('Could not fetch recipe details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Recipe Search</h1>

      <div className="search-box">
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter the Ingredient"
        />
        <button onClick={fetchRecipe}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}
      {loading && <p>Loading...</p>}

      <div className="recipe-list">
        {hasSearched && recipe && recipe.length === 0 && !loading && (
          <p>No recipes found. Try searching for something else.</p>
        )}

        {recipe.length > 0 &&
          recipe.map((item) => (
            <div key={item.id} className="recipe-card">
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title} />
              <button onClick={() => FetchSelectedRecipe(item.id)}>
                View Recipe
              </button>
            </div>
          ))}
      </div>

      {selectedRecipe && (
        <div className="recipe-details">
          <h2>{selectedRecipe.title}</h2>
          <img src={selectedRecipe.image} alt={selectedRecipe.title} />
          <h3>Instructions:</h3>
          <div
            dangerouslySetInnerHTML={{ __html: selectedRecipe.instructions }}
          />

          <h3>Ingredients:</h3>
          <ul>
            {selectedRecipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Recipe;
