export const fetchMeals = async (query) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}&lang=es` 
      );
      const data = await response.json();
      return data.meals; // Retorna el array de recetas
    } catch (error) {
      console.error('Error fetching meals:', error);
      return null;
    }
  };
  