const RecipeDetail = ({ meal, onBack }) => (
    <div className="container mt-4">
      <button className="btn btn-danger mb-3" onClick={onBack}>
        Volver
      </button>
      <div className="card">
        <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
        <div className="card-body">
          <h2 className="card-title">{meal.strMeal}</h2>
          <p className="card-text">{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
  
  export default RecipeDetail;
  