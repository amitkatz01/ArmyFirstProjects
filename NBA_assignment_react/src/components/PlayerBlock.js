// Renders a single player info block 

import { useContext } from "react";
import FavoritesListContext from "./store/FavoritesList-Context";


function PlayerBlock({ className = '', player }) {

    const favoritesListCtx = useContext(FavoritesListContext);
    
    function addToFavoritesHandler() {
        favoritesListCtx.addToFavorites(player); // Call the addToFavorites function from the context
    }

    return (
        <div>
            <li key={player.id} className={className}>
                <p>{player.first_name} {player.last_name}</p>
            </li>
            <button onClick={addToFavoritesHandler}>Add To Favorites</button>
        </div>
    );
};

export default PlayerBlock;