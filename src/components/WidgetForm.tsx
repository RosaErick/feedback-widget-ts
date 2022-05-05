import CloseButton from "./CloseButton";
import bugImg from "../assets/bug.svg";
import lampImg from "../assets/lamp.svg";
import cloudImg from "../assets/cloud.svg";

const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImg,
            alt: "Imagem de um Inseto",
         },
    },
    IDEA: {
        title: 'ideia', 
        image: {
            source: lampImg,
            alt: "Imagem de um Lampada",
        } 
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: cloudImg,
            alt: "Imagem de uma nuvem",
        },

    },


}


export default function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu Feedback</span>
        <CloseButton />
      </header>
          WidgetForm
          

          <div className="py-8 flex gap-2  w-full">
        
              {Object.entries(feedbackTypes).map(([key, value]) => {
                  
                  return (
                      <button>
                          <img src={value.image.source} alt={value.image.alt} />
                          <span>{value.title}</span>

                      </button>
                  )
                  
                })}
              

          </div>
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
