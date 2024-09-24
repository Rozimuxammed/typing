import React from "react";

function Modal({ countScore }) {
  return (
    <div className="w-[350px] h-[450px] sm:h-auto xl:h-[450px] xl:w-[450px] bg-milk rounded-lg flex flex-col justify-start items-center gap-7 p-10">
      <h1 className="mb-20 text-5xl sm:text-3xl sm:mb-10 xl:text-5xl xl:pt-5">Game over</h1>
      <div className="border-2 border-white px-7 py-2 text-xl rounded-xl mb-12 xl:text-2xl">
        Your score is <span className="font-bold">{countScore}</span>
      </div>
      <button className="border-2 border-white bg-black text-white px-10 py-2 rounded-lg">
        <a href="">Try again</a>
      </button>
    </div>
  );
}

export default Modal;
