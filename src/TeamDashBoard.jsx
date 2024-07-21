import Logo from "./Logo";
import Player from "./Player";

export default function TeamDashboard({ className, team }) {
    console.log(team);
    return (
        <section className={`${className} team-container d-flex gap`}>
            <Logo logo={team.logo} />
            <div className="team-score-board">
                {team.players.map(player => <Player player={player} />)}
            </div>
        </section>
    );
}