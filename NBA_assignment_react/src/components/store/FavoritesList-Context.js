import { createContext } from 'react';

const FavoritesListContext = createContext({
    favorites: [],
    addToFavorites: () => { },
    removeFromFavorites: () => { }
});
// Creating context

export default FavoritesListContext;