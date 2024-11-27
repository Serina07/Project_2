import React, { useState } from "react";
import styles from "./Ingredients.module.css";

function Ingredients() {
  const ingredients = [
    { id: 1517, name: "Apples" },
    { id: 1518, name: "Avocado" },
    { id: 1519, name: "Baking Powder" },
    { id: 1520, name: "Bread" },
    { id: 1521, name: "Cheese" },
    { id: 1522, name: "Chicken Breast" },
    { id: 1523, name: "Eggs" },
    { id: 1524, name: "Flour" },
    { id: 1525, name: "Fruit" },
    { id: 1526, name: "Lemons" },
    { id: 1527, name: "Milk" },
    { id: 1528, name: "Onions" },
    { id: 1529, name: "Potatoes" },
    { id: 1530, name: "Tomato" },
    { id: 1531, name: "Rice" },
    { id: 1532, name: "Ramen" },
    { id: 1533, name: "Mushroom" },
    { id: 1534, name: "Oil" },
    { id: 1535, name: "Cake Mix" },
    { id: 1536, name: "Pasta Noodles" },
  ];

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [image, setImage] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectedRecipe, setDetectedRecipe] = useState(null);

  

  const handleIngredientSelect = (ingredient) => {
    const isSelected = selectedIngredients.some(
      (selected) => selected.id === ingredient.id
    );

    if (isSelected) {
      setSelectedIngredients(
        selectedIngredients.filter((selected) => selected.id !== ingredient.id)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        detectRecipe(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const detectRecipe = (imageData) => {
    setIsDetecting(true);
    setDetectedRecipe(null);

    setTimeout(() => {
      setIsDetecting(false);
      setDetectedRecipe(" ");
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={`col-md-3 ${styles.customColumn} ${styles.first}`}>
          <div className={styles.left_wrapper0}>
            <div className={styles.i_tile}>
              <span className={styles.text}>WHAT DO YOU HAVE?</span>
              <div className={styles.k_container}>
                <p className={styles.k_button}>Available Ingredients</p>
              </div>
            </div>
            <div className={styles.left_wrapper}>
              <div
                className={styles.tile_wrapper_tiles}
                style={{ position: "relative", overflow: "hidden" }}
              >
                {ingredients.map((ingredient) => (
                  <div key={ingredient.id} className={styles.i_list}>
                    <span className={styles.check_box}>
                      <input
                        type="checkbox"
                        checked={selectedIngredients.some(
                          (selected) => selected.id === ingredient.id
                        )}
                        onChange={() => handleIngredientSelect(ingredient)}
                        className={styles.ingredient_check}
                      />
                      <span className={styles.ingredient_checkbox}></span>
                      <span className={styles.ingredient_checkbox_label}>
                        {ingredient.name}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        
        <div className={`col-md-3 ${styles.customColumn} ${styles.second}`}>
          <div className={styles.checked_ingredients}>
            <p className={styles.checked_ingredients_title}>Your Ingredients</p>
            {selectedIngredients.length === 0 ? (
              <div className={styles.Empty}>
                <p>You don't have any selected ingredients.</p>
              </div>
            ) : (
              <div className={styles.List}>
                
                {selectedIngredients.map((ingredient) => (
                  <div key={ingredient.id} className={styles.list_item}>
                    {ingredient.name}
                  </div>
                ))}
              </div>
            )}
            <div className={styles.selectedNames}>
              {selectedIngredients.length > 0 && (
                <>
                  <h4>Selected Ingredient Names:</h4>
                  <div style={{flexDirection:"column"}}>
                    {selectedIngredients
                      .map((ingredient) => 
                        <p>{ingredient.name}</p>
                     )
                      }
                 </div>
                </>
              )}
            </div>
            <div className={styles.button_submit}>
              <button className={styles.button}>Find Recipes</button>
              <button onClick={() => setSelectedIngredients([])} className={styles.button}>Clear All</button>
            </div>
          </div>
        </div>

        <div className={`col-md-3 ${styles.customColumn} ${styles.third}`}>
          <div className={styles.card}>
            <h1 className={styles.title}>Food Recipe Detection</h1>
            <div className={styles.uploadArea}>
              <label htmlFor="upload" className={styles.uploadLabel}>
                Click here to upload an image of food
              </label>
              <input
                id="upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className={styles.uploadInput}
              />
            </div>
            {image && (
              <img src={image} alt="Uploaded food" className={styles.previewImage} />
            )}
            {isDetecting && (
              <div className={styles.detectionResult}>
                <div className={styles.loadingSpinner}></div>
                <p>Detecting recipe...</p>
              </div>
            )}
            {detectedRecipe && (
              <div className={styles.detectionResult}>
                <p>Recipe: {detectedRecipe}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
