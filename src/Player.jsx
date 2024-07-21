export default function Player({ player }) {
    return (
        <div className="player d-flex justify-between">
            <div className="stats player-name">{player.name}</div>
            <div className="stats goals">{player.goals}</div>
            <div className="stats assists">{player.assists}</div>
            <div className="stats score">{player.score}</div>
        </div>
    );
}