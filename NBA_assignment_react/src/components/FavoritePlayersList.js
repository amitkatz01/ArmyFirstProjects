// Render favorite players list onto the screen 

import { useContext } from "react";
import FavoritesListContext from "./store/FavoritesList-Context.js";
import PlayersList from "./PlayersList.js";

function FavoritePlayersList() {
    const favoritesListCtx = useContext(FavoritesListContext);
    return (
        <PlayersList players={favoritesListCtx.favorites} />
    );
};

export default FavoritePlayersList;