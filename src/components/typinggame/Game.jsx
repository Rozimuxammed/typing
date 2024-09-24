import Modal from "../modal/Modal";

function Game({
  value,
  inputValue,
  changeInput,
  time,
  countScore,
  select,
  selectChange,
  scoreHight,
}) {
  if (time === 0) {
    return <Modal countScore={countScore} />;
  }
  return (
    <div className="w-[850px] h-[500px] 2xl:w-[850px] xl:w-[850px] lg:w-[638px] sm:h-auto bg-milk rounded-lg sm:w-full sm:py-3 lg:py-5 xl:px-2">
      <div className="flex items-center justify-between p-5 sm:gap-4 sm:p-3 sm:h-auto">
        <div className="text-xl sm:text-xs md:text-base lg:text-lg xl:text-2xl">
          Ro'zimurodov <br /> Ro'zimuhammad
        </div>
        <select
          onChange={selectChange}
          value={select}
          className="w-[150px] sm:w-[50px] md:w-[80px] xl:w-[150px] xl:text-xl lg:w-[100px] lg:py-2 sm:text-xs outline-none py-1 rounded-xl sm:rounded-md text-center ml-16 sm:ml-0 lg:text-base"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <div className="flex items-center gap-10 text-lg sm:text-xs sm:flex-wrap sm:gap-1 md:gap-3 md:text-base lg:text-lg xl:text-2xl">
          <div>
            Score: <span>{countScore}</span>
          </div>
          <div>
            HightScore: <span>{scoreHight}</span>
          </div>
        </div>
      </div>
      <div className="text-center pt-36 text-2xl sm:pt-16">
        <div className="mb-10 text-5xl sm:text-3xl xl:text-5xl">{value}</div>
        <input
          value={inputValue}
          onChange={changeInput}
          className="mb-20 sm:mb-10 text-lg outline-none px-5 py-2 rounded-xl xl:text-xl"
          type="text"
          placeholder="enter the word"
        />
        <div className="sm:text-lg md:text-2xl xl:text-3xl">
          Time: <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

export default Game;
