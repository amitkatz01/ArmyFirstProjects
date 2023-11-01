import React, { useReducer } from 'react';
import FavoritesListContext from './FavoritesList-Context';

function favoritesListReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      if (!state.favorites.some((player) => player.id === action.player.id)) {
        // If the player isn't already in the favorites list
        return {
          favorites: [...state.favorites, action.player],
          // Add them
        };
      }
      else {
        return state
      };

    case 'REMOVE_FROM_FAVORITES':
      return {
        favorites: state.favorites.filter((player) => player.id !== action.id),
      };
    default:
      return state;
  }
}


export function FavoritesListProvider({ children }) {
  const [state, dispatch] = useReducer(favoritesListReducer, { favorites: [] });

  const addToFavorites = (player) => {
    dispatch({ type: 'ADD_TO_FAVORITES', player });
  };

  const removeFromFavorites = (id) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', id });
  };

  const favoritesListcontext = {
    favorites: state.favorites,
    addToFavorites: addToFavorites,
    removeFromFavorites: removeFromFavorites,
  };

  return (
    <FavoritesListContext.Provider value={favoritesListcontext}>
      {children}
    </FavoritesListContext.Provider>
  );
}


export default FavoritesListProvider;