import React, { useState, useEffect } from 'react';
import { fetchMeals } from '../API/mealdb';

function RecipeList({ onMealSelect }) {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);

  const handleSearch = async () => {
    const data = await fetchMeals(query);
    setMeals(data || []);
  };

  useEffect(() => {
    handleSearch(); // Búsqueda inicial
  }, []);

  return (
    <div className="container mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Busca una receta..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleSearch}>
          Buscar
        </button>
      </div>
      <div className="row">
        {meals.map((meal) => (
          <div className="col-md-4" key={meal.idMeal}>
            <div
              className="card mb-4"
              onClick={() => onMealSelect(meal)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={meal.strMealThumb}
                className="card-img-top"
                alt={meal.strMeal}
              />
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
