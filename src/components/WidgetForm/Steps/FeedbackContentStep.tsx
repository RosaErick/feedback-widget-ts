import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import CloseButton from "../../CloseButton";

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
          <div className="py-8 flex gap-2  w-full">
              <form className="my-4 w-full">
                  <textarea
                      placeholder="Deixe seu feedback"
                      className="min-w-[304px] w-full h-[112px] text-sm placeholder-zinc-400  text-zinc-100 border-zinc-600
                      bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar  scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" 
                    
                  
                  />

              </form>


      </div>
    </>
  );
}
