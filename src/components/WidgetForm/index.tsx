import bugImg from "../../assets/bug.svg";
import lampImg from "../../assets/lamp.svg";
import cloudImg from "../../assets/cloud.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccess } from "./Steps/FeedbackSuccess";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImg,
      alt: "Imagem de um Inseto",
    },
  },
  IDEA: {
    title: "ideia",
    image: {
      source: lampImg,
      alt: "Imagem de um Lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: cloudImg,
      alt: "Imagem de uma nuvem",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccess onFeedbackRestart={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <div>
              {" "}
              <FeedbackContentStep
                onFeedbackRestart={handleRestartFeedback}
                onFeedbackSent={() => {
                  setFeedbackSent(true);
                }}
                feedbackType={feedbackType}
              />{" "}
            </div>
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/rosaerick"
        >
          Erick Rosa
        </a>
      </footer>
    </div>
  );
}
