// // import React, { useState, useRef, useEffect } from 'react';
// // import RecipeList from './RecipeList';
// // import './App.css';

// // function App() {
// //   const [ingredient, setIngredient] = useState('');
// //   const [recipes, setRecipes] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [suggestions, setSuggestions] = useState([]);
// //   const inputRef = useRef(null);

// //   const fetchRecipes = async (ingredient) => {
// //     if (ingredient === '') {
// //       return;
// //     }
// //     setLoading(true);
// //     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
// //     const data = await response.json();
// //     setRecipes(data.meals);
// //     setLoading(false);
// //     setIngredient(''); // Clear input box after fetching recipes
// //   };

// //   const fetchSuggestions = async (query) => {
// //     if (query.length < 1) {
// //       setSuggestions([]);
// //       return;
// //     }
// //     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
// //     const data = await response.json();
// //     const filteredSuggestions = data.meals.filter(meal => meal.strIngredient.toLowerCase().startsWith(query.toLowerCase()));
// //     setSuggestions(filteredSuggestions.map(meal => meal.strIngredient));
// //   };

// //   const handleInputChange = (event) => {
// //     const value = event.target.value;
// //     setIngredient(value);
// //     if (value === '') {
// //       setSuggestions([]); // Clear suggestions when input is empty
// //     } else {
// //       fetchSuggestions(value);
// //     }
// //   };

// //   const handleSuggestionClick = (suggestion) => {
// //     setIngredient(suggestion);
// //     setSuggestions([]); // Clear suggestions after selection
// //   };

// //   const handleSearchClick = () => {
// //     fetchRecipes(ingredient);
// //   };

// //   const handleInputFocus = () => {
// //     setSuggestions([]); // Clear suggestions on focus
// //   };

// //   const handleClickOutside = (event) => {
// //     if (inputRef.current && !inputRef.current.contains(event.target)) {
// //       setSuggestions([]); // Clear suggestions on outside click
// //     }
// //   };

// //   useEffect(() => {
// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, []);

// //   return (
// //     <div className="app">
// //       <h1>Taylor's Kitchen Assistant</h1>
// //       <div className="input-button-container">
// //         <div className="input-container" ref={inputRef}>
// //           <input
// //             type="text"
// //             placeholder="Enter an ingredient"
// //             value={ingredient}
// //             onChange={handleInputChange}
// //             onFocus={handleInputFocus}
// //             className="input"
// //           />
// //           {suggestions.length > 0 && (
// //             <ul className="suggestions-list">
// //               {suggestions.map((suggestion, index) => (
// //                 <li
// //                   key={index}
// //                   onClick={() => handleSuggestionClick(suggestion)}
// //                   className="suggestion-item"
// //                 >
// //                   {suggestion}
// //                 </li>
// //               ))}
// //             </ul>
// //           )}
// //         </div>
// //         <div className="button-container">
// //           <button onClick={handleSearchClick} className="button">Search Recipes</button>
// //         </div>
// //       </div>
// //       {loading ? <p>Loading...</p> : <RecipeList recipes={recipes} />}
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState, useRef, useEffect } from 'react';
// import RecipeList from './RecipeList';
// import './App.css';

// function App() {
//   const [ingredient, setIngredient] = useState('');
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);
//   const inputRef = useRef(null);

//   const fetchRecipes = async (ingredient) => {
//     if (ingredient === '') {
//       return;
//     }
//     setLoading(true);
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
//     const data = await response.json();
//     const fetchedRecipes = data.meals.map(recipe => ({
//       ...recipe,
//       preparationTime: Math.floor(Math.random() * 60) + 10 // Random time between 10 and 60 minutes
//     }));
    
//     setRecipes(fetchedRecipes);
//     setLoading(false);
//     setIngredient(''); // Clear input box after fetching recipes
//   };

//   const fetchSuggestions = async (query) => {
//     if (query.length < 1) {
//       setSuggestions([]);
//       return;
//     }
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
//     const data = await response.json();
//     const filteredSuggestions = data.meals.filter(meal => meal.strIngredient.toLowerCase().startsWith(query.toLowerCase()));
//     setSuggestions(filteredSuggestions.map(meal => meal.strIngredient));
//   };

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setIngredient(value);
//     if (value === '') {
//       setSuggestions([]);
//     } else {
//       fetchSuggestions(value);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setIngredient(suggestion);
//     setSuggestions([]);
//   };

//   const handleSearchClick = () => {
//     fetchRecipes(ingredient);
//   };

//   const handleInputFocus = () => {
//     setSuggestions([]);
//   };

//   const handleClickOutside = (event) => {
//     if (inputRef.current && !inputRef.current.contains(event.target)) {
//       setSuggestions([]);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="app">
//       <h1>Taylor's Kitchen Assistant</h1>
//       <div className="input-button-container">
//         <div className="input-container" ref={inputRef}>
//           <input
//             type="text"
//             placeholder="Enter an ingredient"
//             value={ingredient}
//             onChange={handleInputChange}
//             onFocus={handleInputFocus}
//             className="input"
//           />
//           {suggestions.length > 0 && (
//             <ul className="suggestions-list">
//               {suggestions.map((suggestion, index) => (
//                 <li
//                   key={index}
//                   onClick={() => handleSuggestionClick(suggestion)}
//                   className="suggestion-item"
//                 >
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//         <div className="button-container">
//           <button onClick={handleSearchClick} className="button">Search Recipes</button>
//         </div>
//       </div>
//       {loading ? <p>Loading...</p> : <RecipeList recipes={recipes} />}
//     </div>
//   );
// }

// export default App;
import React, { useState, useRef, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  // const fetchRecipes = async (ingredient) => {
  //   if (ingredient === '') {
  //     return;
  //   }
  //   setLoading(true);
  //   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  //   const data = await response.json();
  //   const fetchedRecipes = data.meals.map(recipe => ({
  //     ...recipe,
  //     preparationTime: Math.floor(Math.random() * 60) + 10 // Random time between 10 and 60 minutes
  //   }));

  //   // Sort the recipes by preparation time
  //   const sortedRecipes = fetchedRecipes.sort((a, b) => a.preparationTime - b.preparationTime);

  //   setRecipes(sortedRecipes);
  //   setLoading(false);
  //   setIngredient(''); // Clear input box after fetching recipes
  // };

  const fetchRecipes = async (ingredient) => {
    if (ingredient === '') {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      if (data.meals) {
        const fetchedRecipes = data.meals.map(recipe => ({
          ...recipe,
          preparationTime: Math.floor(Math.random() * 60) + 10 // Random time between 10 and 60 minutes
        }));
        const sortedRecipes = fetchedRecipes.sort((a, b) => a.preparationTime - b.preparationTime);

      setRecipes(sortedRecipes);
      setLoading(false);
      setIngredient('');
        //setRecipes(fetchedRecipes);
        setErrorMessage('');
      } else {
        setRecipes([]);
        setErrorMessage('No recipes found. Please try a different ingredient.');
        setIngredient(''); 
      }
    } catch (error) {
      setRecipes([]);
      setErrorMessage('An error occurred while fetching recipes. Please try again later.'); // Set error message for API errors
    } finally {
      setLoading(false);
    }
  };
  

  const fetchSuggestions = async (query) => {
    if (query.length < 1) {
      setSuggestions([]);
      return;
    }
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const data = await response.json();
    const filteredSuggestions = data.meals.filter(meal => meal.strIngredient.toLowerCase().startsWith(query.toLowerCase()));
    setSuggestions(filteredSuggestions.map(meal => meal.strIngredient));
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setIngredient(value);
    if (value === '') {
      setSuggestions([]);
    } else {
      fetchSuggestions(value);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setIngredient(suggestion);
    setSuggestions([]);
  };

  const handleSearchClick = () => {
    fetchRecipes(ingredient);
  };

  const handleInputFocus = () => {
    setSuggestions([]);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="app">
      <h1>Taylor's Kitchen Assistant</h1>
      <div className="input-button-container">
        <div className="input-container" ref={inputRef}>
          <input
            type="text"
            placeholder="Enter an ingredient"
            value={ingredient}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="input"
          />
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="suggestion-item"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="button-container">
          <button onClick={handleSearchClick} className="button">Search Recipes</button>
        </div>
      </div>
      {errorMessage && <h2 className="error-message">{errorMessage}</h2>}
      {loading ? <p>Loading...</p> : <RecipeList recipes={recipes} />}
    </div>
  );
}

export default App;

