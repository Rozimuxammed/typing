import { useEffect, useState } from "react";
import Game from "./components/typinggame/Game";

export default function App() {
  const words = [
    "abreact",
    "abreacted",
    "abreacting",
    "abreaction",
    "abreactions",
    "paltrier",
    "paltriest",
    "paltrily",
    "paltriness",
    "paltrinesses",
    "paltry",
    "paludal",
    "paludism",
    "shiv",
    "shiva",
    "shivah",
    "shivahs",
    "shivaree",
    "shivareed",
    "shivareeing",
  ];

  let randomNumber = Math.floor(Math.random() * words.length);
  const [value, setValue] = useState(words[randomNumber]);
  const [inputValue, setInputValue] = useState("");
  const [time, setTime] = useState(10);
  const [countScore, setCountScore] = useState(0);
  const [select, setSelect] = useState("easy");
  const [scoreHight, setScoreHight] = useState(
    parseInt(localStorage.getItem("scoreHight")) || 0
  );

  const changeInput = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === value) {
      setValue(words[randomNumber]);
      setInputValue("");
      setCountScore((prevCount) => {
        const newCount = prevCount + 1;

        if (newCount > scoreHight) {
          setScoreHight(newCount);
          localStorage.setItem("scoreHight", newCount);
        }

        return newCount;
      });

      if (select === "easy") {
        setTime(time + 6);
      } else if (select === "medium") {
        setTime(time + 4);
      } else if (select === "hard") {
        setTime(time + 2);
      }
    }
  };

  const selectChange = (e) => {
    let selectedValue = e.target.value;
    setSelect(selectedValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => (time > 0 ? time - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[url('./public/bg.avif')] bg-cover bg-center w-full h-screen flex items-center justify-center sm:bg-contain sm:px-5 md:px-5">
      <Game
        value={value}
        inputValue={inputValue}
        changeInput={changeInput}
        time={time}
        countScore={countScore}
        setCount={setCountScore}
        select={select}
        selectChange={selectChange}
        scoreHight={scoreHight}
      />
    </div>
  );
}
