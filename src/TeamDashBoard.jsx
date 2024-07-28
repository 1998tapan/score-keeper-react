import Logo from "./Logo";
import Player from "./Player";

export default function TeamDashboard({ className, team, scores, update, utils, isTeam }) {
    console.log(team);
    return (
        <section className={`${className} team-container d-flex gap`}>
            <Logo logo={team.logo} />
            <div className="team-score-board ">
                {team.players.map(
                    (player, idx) => (
                        <Player key={idx} team={isTeam} idx={idx} player={player} scores={scores} update={update} />
                    ))}
            </div>
        </section>
    );
}