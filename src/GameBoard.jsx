import Arena from "./Arena";
import "./GameBoard.css";
import Header from "./Header";
import ScoreHeader from "./ScoreHeader";
import TeamDashboard from "./TeamDashBoard";


export default function GameBoard({ startGame }) {
    console.log(startGame);
    console.dir(startGame);
    return (
        <div className="GameBoard">
            <Header />
            <section className="data-container">
                <Arena />
                <hr />
                <ScoreHeader />
                <TeamDashboard className="team-one-dash" team={startGame.teamOne} />

                <div className="versus bold d-flex">
                    vs
                </div>
                <TeamDashboard className="team-two-dash" team={startGame.teamTwo} />
            </section>
        </div >
    );
}