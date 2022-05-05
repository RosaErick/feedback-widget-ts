import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";
import { ScreenShotButton } from "../ScreenShotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestart: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestart,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header className="flex justify-center gap-5">
        <button
          onClick={onFeedbackRestart}
          type="button"
          className="absolute  top-5 left-5  text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          placeholder="Deixe seu feedback"
          className="min-w-[304px] w-full h-[112px] text-sm placeholder-zinc-400  text-zinc-100 border-zinc-600
                      bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar  scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        />
        <footer className="flex gap-2 mt-2">
          <ScreenShotButton />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          >
            Enviar Feedback
          </button>
        </footer>


      </form>
    </>
  );
}
