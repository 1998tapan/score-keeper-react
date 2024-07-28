import Button from "./Button";
import { incrementGoals, decrementGoals, incrementAssists, decrementAssists } from "./utils";

export default function Player({ player, scores, update, utils, idx, team }) {
    return (
        <div className="player d-flex justify-between align-center bold">
            <div className="stats player-name">{player.name}</div>
            <div className="d-flex justify-center align-center gap-sm stats">
                <Button title="-1" clickFn={() => decrementGoals(scores, team, idx, update)} />
                <div className="goals">{player.goals}</div>
                <Button title="+1" clickFn={() => incrementGoals(scores, team, idx, update)} />
            </div>
            <div className="d-flex justify-center align-center gap-sm  stats">
                <Button title="-1" clickFn={() => decrementAssists(scores, team, idx, update)} />
                <div className="assists">{player.assists}</div>
                <Button title="+1" clickFn={() => incrementAssists(scores, team, idx, update)} />
            </div>
            <div className="stats score">{player.score}</div>
        </div>
    );
}