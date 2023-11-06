import GameResultsHeader from "./GameResultsHeader";
import GameResultsDisplay from "./displaying game results/GameResultsDisplay";

const GameResultsCard: React.FC = () => {
    return (
        <div className="gameResultsCard">
            <div className="top-border-container">
                <GameResultsHeader />
            </div>
            <div className="top-border-container">
                <GameResultsDisplay/>
            </div>
        </div>
    )
};

export default GameResultsCard;