import { useState } from "react";
import Arena from "./Arena";
import "./GameBoard.css";
import Header from "./Header";
import ScoreHeader from "./ScoreHeader";
import TeamDashboard from "./TeamDashBoard";


export default function GameBoard({ startGame }) {
    const [scores, setScores] = useState(startGame);
    return (
        <div className="GameBoard">
            <Header />
            <section className="data-container">
                <Arena />
                <hr />
                <ScoreHeader />
                <TeamDashboard className="team-one-dash" isTeam="teamOne" team={scores.teamOne} scores={scores} update={setScores} />

                <div className="versus bold d-flex">vs</div>

                <TeamDashboard className="team-two-dash" isTeam="teamTwo" team={scores.teamTwo} scores={scores} update={setScores} />
            </section>
        </div >
    );
}