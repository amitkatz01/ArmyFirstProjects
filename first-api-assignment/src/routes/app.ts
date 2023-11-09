import express from 'express';
import { playersData } from '../players_info';

const app = express();
const port = 3000;

const playersRouter = express.Router();

app.use(express.json());

app.use('/api/players', playersRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


playersRouter.get('/', (req, res) => {
    res.json(playersData);
    // Return the array of players
});


playersRouter.get('/sorted_by_name', (req, res) => {
    // Sort the players_info array by the "first_name" field
    const sortedPlayers = playersData.sort((a, b) =>
        a.first_name.localeCompare(b.first_name)
    );

    res.json(sortedPlayers);
    // Send the sorted array as JSON response
});


playersRouter.post('/get_players_by_team', (req, res) => {

    const { team } = req.body;
    // Extract team name from the request body

    if (!team) {
        return res.status(400).json({ error: "Missing 'team' parameter in the request body" });
    }
    // Return an error response
    // 400 - Bad request

    // Filter the players based on the team name
    const filteredPlayers = playersData.filter(player => (player.team.full_name === team || player.team.name === team));

    res.json(filteredPlayers);
});

playersRouter.post('/get_players_by_weight_range', (req, res) => {
    const { lowVal } = req.body;
    const { highVal } = req.body;

    if (typeof lowVal !== 'number' || typeof highVal !== 'number' || lowVal < 0 || highVal < 0) {
        // If lowVal or highVal is not a number, below 0, or wasn't defined
        return res.status(400).json({ error: 'lowVal and highVal must be defined and valid positive numbers' });
        // Return an error response - Bad request
    }

    const filteredPlayers = playersData.filter(player => {
        if (player.weight_pounds) {
            return (player.weight_pounds > lowVal && player.weight_pounds < highVal)
        };
    });
    // Return all the players that are between “lowVal” and “highVal” pounds
    res.json(filteredPlayers);
});

playersRouter.post("/is_exists", (req, res) => {
    // Expected req body: firstName (String), lastName (String)
    const { firstName } = req.body;
    const { lastName } = req.body;

    const isInData = playersData.find(player => player.first_name === firstName && player.last_name === lastName);

    res.json(!!isInData);
    // Convers isInData into boolean
    // Return true if a player with this first and last name exists in data, or false otherwise
});
