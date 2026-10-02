import type { CartItem } from "../Models/Cartitem";

//get all cocktails
export const getAllCocktails = async (): Promise<CartItem[]> => {
    //logic to get all cocktails
    const response = await fetch(
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon"
);
    const data = await response.json();
    return data.drinks.map((drink: any) => ({
        id: drink.idDrink,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
        category: drink.strCategory,
        glass: drink.strGlass,
        instructions: drink.strInstructions,
        quantity: 1
    }));
}

//get a single cocktail by ID
export const getCocktailById = async (id: string): Promise<CartItem> => {
    const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    const drink = data.drinks[0];
    return {
        id: drink.idDrink,
        name: drink.strDrink,
        image: drink.strDrinkThumb,
        category: drink.strCategory,
        glass: drink.strGlass,
        instructions: drink.strInstructions,
        quantity: 1
    };
}
