import './App.css';
import CurrentPlayersList from './components/CurrentPlayersList.js';
import FavoritesListProvider from './components/store/FavoritesListProvider.js';
import FavoritePlayersList from './components/FavoritePlayersList.js';

function App() {
  return (
    <FavoritesListProvider>
      <div className="App">
        <img className='basketball' src='https://cdn.nba.com/manage/2022/08/nba-ball-general-view-iso.jpg' alt = 'Basketball'/>
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
