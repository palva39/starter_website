import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';

function MealViewer() {
    const [meals, setMeals] = useState([]);
  
    useEffect(() => {
      const mealRef = ref(database); // root
      onValue(mealRef, (snapshot) => {
        const data = snapshot.val();
        console.log('Firebase data:', data); // 👈 debugging
        const mealList = data ? Object.values(data) : [];
        setMeals(mealList);
      });
    }, []);
  
    return (
      <div className="container py-5">
        <h2 className="text-center mb-4">🍽️ Meal Viewer</h2>
        <div className="row g-4">
          {meals.length === 0 ? (
            <p className="text-center">No meals found.</p>
          ) : (
            meals.map((meal, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={
                      meal.image?.startsWith('http')
                        ? meal.image
                        : 'https://via.placeholder.com/400x200'
                    }
                    className="card-img-top"
                    alt={meal.meal}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{meal.meal}</h5>
                    <p className="card-text">Calories: 🔥 {meal.calories}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
  
  export default MealViewer;