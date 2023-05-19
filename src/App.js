import { useState } from 'react';
import './App.css';
import Box from "./component/Box"
import rock from "./assets/rok.png"
import sis from "./assets/sis.png"
import pap from "./assets/paper.png"


const choice = {
  rock: {
    name: "rock",
    img: rock
  },
  sis: {
    name: "sis",
    img: sis
  },
  paper: {
    name: "paper",
    img: pap
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let comChoice = comRandom();

    setComSelect(comChoice);
    setResult(judgement(choice[userChoice], comChoice));
  };

  const comRandom = () => {
    let choiceIdx = Object.keys(choice);
    let randomNum = Math.floor(Math.random() * choiceIdx.length);
    let final = choiceIdx[randomNum];
    return choice[final];
  }


  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "draw";
    } else if (user.name == "rock")
      return computer.name == "sis" ? "win" : "lose"
    else if (user.name == "sis")
      return computer.name == 'paper' ? "win" : "lose"
    else if (user.name == "paper")
      return computer.name == "rock" ? "win" : "lose"
  }
  return (
    <div >
      <div className='container'>
        <div className='content'>
          <Box title={"You"} item={userSelect} result={result} />
          <h2>VS</h2>
          <Box title={"Computer"} item={comSelect} result={result} />
        </div>
        <div className='btn_wrap'>
          <button onClick={() => play("rock")}>
            <img src={rock} alt="rock" />
          </button>
          <button onClick={() => play("sis")}>
            <img src={sis} alt="rock" />
          </button>
          <button onClick={() => play("paper")}>
            <img src={pap} alt="rock" />
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;


// rock: {
//   name: "rock",
//     img: "https://cdn-icons-png.flaticon.com/512/1527/1527445.png"
// },
// sis: {
//   name: "sis",
//     img: "https://cdn-icons-png.flaticon.com/512/4973/4973989.png"
// },
// paper: {
//   name: "paper",
//     img: "https://i.pinimg.com/474x/1e/61/c7/1e61c7bd2077950e94950920afdb4ca7.jpg"
// }