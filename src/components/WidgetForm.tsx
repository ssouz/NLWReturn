import { CloseButton } from "./CloseButton";
import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';
import { useState } from "react";
const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'imagem de uma lampada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'imagem de um balao de pensamento'
        },
    },
};

type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl 
        mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            <header>
                <span className="text-xk leading-6">Deixe seu feedback</span>

                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => setFeedbackType(key)}
                            type="button"
                        >
                            <img src={value.image.source} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}

            </div>
        </div>
    )
}