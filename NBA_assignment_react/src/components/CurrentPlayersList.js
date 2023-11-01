// Fetches players data, returns a playersList object displaying the data.

import { useState, useEffect } from "react";
import PlayersList from "./PlayersList";


function CurrentPlayersList() {
  const [players, setPlayers] = useState([]);
  // State to store the fetched player data

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://www.balldontlie.io/api/v1/players');
        // Fetch data from the API

        if (response.ok) {
          const data = await response.json();
          setPlayers(data.data);
          // parse the JSON data and update the players state with the data array from the API response
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <PlayersList players={players} />
  )
};

export default CurrentPlayersList;