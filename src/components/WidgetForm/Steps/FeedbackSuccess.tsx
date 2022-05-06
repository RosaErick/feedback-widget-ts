import React from "react";
import CloseButton from "../../CloseButton";
import successImage from "../../../assets/success.svg";

interface FeedbackSuccessProps {
  onFeedbackRestart: () => void;
}

export function FeedbackSuccess({ onFeedbackRestart }: FeedbackSuccessProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImage} alt="Success" />
        <span className="text-xl mt-2"> Agradecemos o Feedback!</span>

        <button
          onClick={onFeedbackRestart}
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md  border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
