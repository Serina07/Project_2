import React from "react";
import styles from "./Ingredients.module.css";
import { useState } from "react";

function Ingredients() {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(true);  

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

  
  return (
    <div className={styles.i_container}>
      <div className={styles.i_tile}>
        <span className={styles.text}>
          "WHAT DO YOU HAVE?"
        </span>
        <div className={styles.k_container}>
          <p className={styles.k_button}>
            Available Ingredients
          </p>
        </div>
        <div className={styles.clear}></div>
      </div>
      <div className={styles.clear}></div>
      <div class="left-wrapper">
        <div
          class="tile-wrapper tiles"
          style={{ position: "relative", overflow: "hidden" }}
        >
          {ingredients.map((ingredient) => (
            <div key={ingredient.id} className={styles.i_list}>
              <span className="check-box">
                <input
                  type="checkbox"
                  value={ingredient.id}
                  name="Ingredients[]"
                  className="ingredient-check"
                />
                <span  className="ingredient-checkbox"></span>
                <span className="ingredient-checkbox-label">
                  {ingredient.name}
                </span>
                <span className="clear"></span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
