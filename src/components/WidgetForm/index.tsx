import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImgUrl from '../../assets/bug.svg'
import ideaImgUrl from '../../assets/idea.svg'
import thoughtImgUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImgUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImgUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImgUrl,
      alt: 'Imagem de uma nuvem de pensamento'
    }
  }
}
export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)
  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }
  return (
    <div className="
     bg-zinc-900 
       p-4
       relative
       rounded-2xl
       mb-4 
       flex flex-col items-center 
       shadow-lg
       w-[calc(100vw-2rem)]
       md:w-auto
       ">

      {feedbackSent ? (
        <FeedbackSuccessStep onRestartRequestFeedback={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onRestartRequestFeedback={handleRestartFeedback}
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a href="#" className="underline underline-offset-3">BSVCode</a>
      </footer>
    </div>
  )
}