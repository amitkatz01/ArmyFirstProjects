import GameResult from "./GameResult";

const GameResultsDisplay: React.FC = () => {
    const results = [
        {
            team1: {
                name: 'Brazil',
                imgSrc: 'https://logowik.com/content/uploads/images/brazil-national-football-team1330.logowik.com.webp'
            },
            team2: {
                name: 'Switzerland',
                imgSrc: 'https://logowik.com/content/uploads/images/swiss-football-association8999.jpg'
            },
            time: '16:00'
        },
        {
            team1: {
                name: 'Denmark',
                imgSrc: 'https://thumbs.dreamstime.com/b/danish-flag-national-football-federation-logo-copenhagen-denmark-june-danish-flag-national-football-federation-logo-223529955.jpg'
            },
            team2: {
                name: 'Finland',
                imgSrc: 'https://logowik.com/content/uploads/images/finland-national-football-team4650.jpg'
            },
            time: '19:00'
        },
        {
            team1: {
                name: 'Belgium',
                imgSrc: 'https://img.freepik.com/premium-vector/belgium-angled-team-badge-football-tournament_95164-4450.jpg?w=2000'
            },
            team2: {
                name: 'Israel',
                imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Israel_football_association.svg/800px-Israel_football_association.svg.png'
            },
            time: '22:00'
        }
    ];

    const groups = ['A', 'B', 'C'];
    return (
        <div className="gameResultsDisplay">
            {results.map((result, index) => (
                <GameResult
                    key={index} // You should use a unique key when mapping over elements
                    imgSrc1={result.team1.imgSrc}
                    imgSrc2={result.team2.imgSrc}
                    team1={result.team1.name}
                    team2={result.team2.name}
                    time={result.time}
                    group={groups[index]}
                />
            ))}
        </div>
    );
};

export default GameResultsDisplay;