import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styles from "./Recipe.module.css";

// Helper function to remove HTML tags from a string
const removeHTMLTags = (str) => {
  const doc = new DOMParser().parseFromString(str, "text/html");
  return doc.body.textContent || "";
};

function Recipe() {
  const location = useLocation();
  const { ingredients } = location.state || { ingredients: [] };

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Define fetchRecipes inside useEffect and use useCallback
  const fetchRecipes = useCallback(async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5001/recipes", {
        ingredients: ingredients,
      });

      if (response.data && Array.isArray(response.data)) {
        setRecipes(response.data);
      } else {
        setError("No recipes found.");
        setRecipes([]);
      }
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError("An error occurred while fetching recipes.");
    } finally {
      setLoading(false);
    }
  }, [ingredients]); // `ingredients` as a dependency

  // Run fetchRecipes when ingredients change
  useEffect(() => {
    if (ingredients.length > 0) {
      fetchRecipes();
    }
  }, [ingredients, fetchRecipes]); // `fetchRecipes` as a dependency

  return (
    <div className={styles.container}>
      <h1>Recipes</h1>

      {loading && <p>Loading recipes...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {recipes.length > 0 ? (
        <div className={styles.recipeGrid}>
          {recipes.map((recipe, index) => (
            <div key={index} className={styles.recipeItem}>
              {/* Recipe Title above the image */}
              <h2 className={styles.recipeTitle}>{recipe.title}</h2>

              {/* Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className={styles.recipeImage}
                />
              </div>

              {/* Recipe Description - Remove HTML tags */}
              <p>{removeHTMLTags(recipe.description)}</p>

              {/* Ingredients */}
              <p>
                Ingredients:{" "}
                {Array.isArray(recipe.ingredients)
                  ? recipe.ingredients.join(", ")
                  : "Ingredients not available"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>No recipes found. Try selecting different ingredients.</p>
      )}
    </div>
  );
}

export default Recipe;
