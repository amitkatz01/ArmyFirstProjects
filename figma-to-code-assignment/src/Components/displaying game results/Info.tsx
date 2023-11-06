const Info: React.FC<{ imgSrc: string; name: string }> = ({imgSrc, name}) => {
    return (
        <div className="team-info">
            <img className="teamImage" src={imgSrc} alt={name}/>
            <h3>{name}</h3>
        </div>
    );
};

export default Info;