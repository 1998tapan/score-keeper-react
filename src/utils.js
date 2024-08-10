const incrementGoals = (scores, team, idx, f) => {
    const newPlayerScore = scores[team]["players"][idx];
    newPlayerScore.goals += 1;
    updateScore(newPlayerScore);
    f((currScore) => ({ ...currScore, [currScore[team]["players"][idx]]: newPlayerScore }))
}

const decrementGoals = (scores, team, idx, f) => {
    const newPlayerScore = scores[team]["players"][idx];
    newPlayerScore.goals -= 1;
    updateScore(newPlayerScore);
    f((currScore) => ({ ...currScore, [currScore[team]["players"][idx]]: newPlayerScore }))
}

const incrementAssists = (scores, team, idx, f) => {
    const newPlayerScore = scores[team]["players"][idx];
    newPlayerScore.assists += 1;
    updateScore(newPlayerScore);
    f((currScore) => ({ ...currScore, [currScore[team]["players"][idx]]: newPlayerScore }))
}

const decrementAssists = (scores, team, idx, f) => {
    const newPlayerScore = scores[team]["players"][idx];
    newPlayerScore.assists -= 1;
    updateScore(newPlayerScore);
    f((currScore) => ({ ...currScore, [currScore[team]["players"][idx]]: newPlayerScore }))
}

const updateScore = (newPlayerScore) => {
    newPlayerScore.score = newPlayerScore.goals * 10 + newPlayerScore.assists;
};


export { incrementGoals, decrementGoals, incrementAssists, decrementAssists };