import { useState, useEffect, useRef } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe"
 import { getRecipeFromMistral } from "../ai"

export default function Main() {
    const [ingredients, setIngredientList] = useState([
        "Tomato Sauce", 
        "Lean Ground Beef", 
        "Common spices",
        "Fusilli Pasta",
    ]);

    const [recipe, setRecipe] = useState("");
    const recipeSection = useRef(null);
    
    useEffect(() => {
        console.log(recipeSection);
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"});
        }
    }, [recipe])

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredientInput");
        setIngredientList(prevIngredientList => [...prevIngredientList, newIngredient]);
    }

    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    className="add-ingredient-input"
                    type="text"
                    placeholder="e.g. Chicken thighs"
                    aria-label="Add ingredient input"
                    name="ingredientInput"
                />
                <button className="add-ingredient-btn">Add Ingredient</button>
            </form> 
            {ingredients.length > 0 &&
                <IngredientsList
                    ref={recipeSection}    
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}