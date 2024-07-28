import './App.css'
import GameBoard from './GameBoard'
import teamOneLogo from "./assets/team-one.png";
import teamTwoLogo from "./assets/team-two.png";

const startGame = {
  teamOne: {
    logo: teamOneLogo,
    players: [
      {
        id: 1,
        name: "Tapan D.",
        goals: 1,
        assists: 3,
        score: 13
      },
      {
        id: 2,
        name: "Mahak S.",
        goals: 2,
        assists: 1,
        score: 21
      },
      {
        id: 3,
        name: "Hermione G.",
        goals: 2,
        assists: 1,
        score: 21
      }
    ]
  },
  teamTwo: {
    logo: teamTwoLogo,
    players: [
      {
        id: 4,
        name: "Joey T.",
        goals: 1,
        assists: 3,
        score: 13
      },
      {
        id: 5,
        name: "Chandler",
        goals: 2,
        assists: 1,
        score: 21
      },
      {
        id: 6,
        name: "Ross G.",
        goals: 2,
        assists: 1,
        score: 21
      }
    ]
  }
}

function App() {

  return (
    <>
      <GameBoard startGame={startGame} />
    </>
  )
}

export default App
