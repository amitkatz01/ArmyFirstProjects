// Renders a single player info block 

import { useContext } from "react";
import FavoritesListContext from "./store/FavoritesList-Context";


function PlayerBlock({ className = '', player, isFavorite }) {

    const favoritesListCtx = useContext(FavoritesListContext);

    const isTurnedFavorite = favoritesListCtx.favorites.some((favorite) => favorite.id === player.id);

    function addToFavoritesHandler() {
        favoritesListCtx.addToFavorites(player);
        // Call the addToFavorites function from the context
    };

    function removeFromFavoritesHandler() {
        favoritesListCtx.removeFromFavorites(player.id);
        // Call the removeFromFavorites function from the context
    };

    return (
        <div className="player-block">
            <li key={player.id} className={className}>
                <p>{player.first_name} {player.last_name}</p>
            </li>
            {isFavorite && <button onClick={removeFromFavoritesHandler}>Remove from Favorites</button>}
            {!isTurnedFavorite && <button onClick={addToFavoritesHandler}>Add to Favorites</button>}
            
        </div>
    );
};

export default PlayerBlock;