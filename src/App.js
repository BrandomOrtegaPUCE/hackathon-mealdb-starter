import React, { useState } from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import Login from './components/Login';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import './App.css';

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
    } catch (error) {
      alert('Error al cerrar sesión: ' + error.message);
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={setIsLoggedIn} />;
  }

  return (
    <div className="app">
      {/* Mueve el botón de cerrar sesión al encabezado */}
      <Header onLogout={handleLogout} />
      {selectedMeal ? (
        <RecipeDetail meal={selectedMeal} onBack={() => setSelectedMeal(null)} />
      ) : (
        <RecipeList onMealSelect={(meal) => setSelectedMeal(meal)} />
      )}
    </div>
  );
}

export default App;
