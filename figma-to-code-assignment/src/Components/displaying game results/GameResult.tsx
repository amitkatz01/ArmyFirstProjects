import Info from "./Info";

const GameResult: React.FC<{
    imgSrc1: string;
    imgSrc2: string;
    team1: string;
    team2: string;
    time: string;
    group: string;
}> = ({ imgSrc1, imgSrc2, team1, team2, time, group }) => {
    return (
            <div className="single-result-display">

                <Info imgSrc={imgSrc1} name={team1} />
                <div className="group-score-time">
                    <h3>{`Group ${group}`}</h3>
                    <div className="present-score">
                        <div className="rectangle"></div>
                        <span>-</span>
                        <div className="rectangle"></div>
                    </div>
                    <p>{time}</p>
                </div>
                <Info imgSrc={imgSrc2} name={team2} />
            </div>
    );
};

export default GameResult;