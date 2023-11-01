import './App.css';
import CurrentPlayersList from './components/CurrentPlayersList.js';
import FavoritesListProvider from './components/store/FavoritesListProvider.js';
import FavoritePlayersList from './components/FavoritePlayersList.js';

function App() {
  return (
    <FavoritesListProvider>
      <div className="App">
        <h1>NBA APPLICATION</h1>
        <div className="lists-container">
          <CurrentPlayersList />
          <FavoritePlayersList />
        </div>
      </div>
    </FavoritesListProvider>
  );
}

export default App;
