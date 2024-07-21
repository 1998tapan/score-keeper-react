export default function ScoreHeader() {
    return (
        <section className="score-header d-flex justify-between bold">
            <div className="title player-title">Player</div>
            <div className="title">Goals</div>
            <div className="title">Assists</div>
            <div className="title">Score</div>
        </section>
    );
}