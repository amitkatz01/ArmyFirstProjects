// Render favorite players list onto the screen 

import { useContext } from "react";
import FavoritesListContext from "./store/FavoritesList-Context.js";
import PlayersList from "./PlayersList.js";
function FavoritePlayersList() {
    const favoritesListCtx = useContext(FavoritesListContext);
    return (
        <div>
            <h3 className="favorites-label">&hearts; Favorite players</h3>
            <PlayersList isFavorite players={favoritesListCtx.favorites} />
        </div>
    );
};

export default FavoritePlayersList;
