import { useState } from "react";

export default function Main() {
    const [ingredientList, setIngredientList] = useState([
        "Beans", 
        "Some more beans", 
        "Beans Beans Beans",
        "Seriously all I got is beans",
    ]);

    const ingredientListJSX = ingredientList.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    function addIngredient(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredientInput");
        setIngredientList(prevIngredientList => [...prevIngredientList, newIngredient]);
    }

    return(
        <main>
            <form className="add-ingredient-form" onSubmit={addIngredient}>
                <input
                    className="add-ingredient-input"
                    type="text"
                    placeholder="e.g. Canned beans"
                    aria-lavel="Add ingredient input"
                    name="ingredientInput"
                />
                <button className="add-ingredient-btn">Add Ingredient</button>
            </form> 
            <ul>
                {ingredientListJSX}
            </ul>
        </main>
    );
}