import { Saidbar } from "./componentes/saidbar";
import { TwitterForm } from "./componentes/TwitterForm/twitter";
import { Tweet } from "./componentes/Tweet/tweet";
import { v4 } from "uuid";
import { getAvatar, getRandomImage } from "./componentes/utils/geneteimage";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TrendItem } from "./componentes/TrendItem/Trend";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const addNewRandomTweets = () => {
      const randomTweets = [
        "Acabei de descobrir que meu pet tem mais fãs na internet do que eu. É a vida, né? 🐾 #PetLife #Fama",
        "Café da manhã dos campeões: o que sobrou da pizza de ontem. Zero arrependimentos. 🍕☕ #ManhãFeliz #Pizza",
        "A melhor parte de um dia chuvoso é a desculpa perfeita para ficar de pijama o dia todo. 🌧️ #PreguiçaBoa #DiaDePijama",
        "Minha planta nova está crescendo! Pequenas vitórias que alegram o coração. 🪴 #Jardinagem #NovosComeços",
        "Pensando em fazer um bolo, mas a distância entre o sofá e a cozinha é um desafio olímpico hoje. 🍰 #Conforto #Desafios",
        "A trilha sonora da minha vida ultimamente é 'o barulho da notificação do celular'. 🎶📱 #VidaModerna #SonsDoDia",
        "Se eu pudesse ter um superpoder, seria sempre encontrar a ponta da fita adesiva de primeira. Que luta! #SuperPoder #ProblemasDoDia",
        "Alguém mais sente que a semana de trabalho tem 7 dias e o fim de semana tem 7 horas? ⏰ #FimDeSemana #TempoVoa",
        "A felicidade está nas pequenas coisas: um meme perfeito, uma música boa, ou achar dinheiro no bolso de uma roupa antiga. 😄 #Felicidade #PequenasCoisas",
        "Tentando entender como meu gato consegue dormir em posições tão estranhas. Ele é flexível ou só quebrou? 😹 #Gato #MistériosFelinos",
        "Minha lista de séries pra assistir só cresce. Um dia, eu chego lá! Ou não. 📺 #MaratonaDeSéries #Netflix",
        "O silêncio da casa quando todos dormem é o meu momento de paz e reflexão. Ou de comer um lanche escondido. 🤫 #Paz #MomentoMeu",
        "Hoje acordei com vontade de organizar tudo, mas aí lembrei que tenho mais 3 temporadas pra ver. A prioridade, né? ✨ #Organização #Prioridades",
        "A tecnologia é incrível, até você tentar explicar para sua avó como funciona o Wi-Fi. 😂 #Tecnologia #Vó",
        "Que sensação boa é riscar um item da lista de tarefas, mesmo que seja 'respirar'. 💪 #Produtividade #Conquistas",
        "O segredo para um bom dia? Uma boa xícara de café e não verificar as notícias logo de manhã. ☕📰 #BomDia #PazDeEspírito",
        "Se a vida te der limões, faça uma limonada. Se te der um monte de roupa pra dobrar, mande pra lavanderia. 🤷‍♀️ #DilemasDoDia #VidaReal",
        "O talento de algumas pessoas para fazer rima nos comentários é algo que eu realmente admiro. Genial! #Criatividade #Humor",
        "Quem mais se sente um detetive tentando decifrar a caligrafia de um médico? 🕵️‍♀️ #Médicos #Mistérios",
        "A beleza de não ter planos é que qualquer coisa que você faça se torna uma aventura. 🗺️ #Aventura #Liberdade",
      ];

      const randomTweet =
        randomTweets[Math.floor(Math.random() * randomTweets.length)];

      addNewTweet(randomTweet, Math.random() > 0.7);
    };

    const interval = setInterval(() => {
      addNewRandomTweets();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addNewTweet = (content, includeImage = false) => {
    const newTweet = {
      id: v4(),
      name: "User",
      username: `use${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@gmail.com`),
      content,
      time: new Date().toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: includeImage ? getRandomImage() : null,
      likes: 0,
      retweets: 0,
      comments: 0,
    };

    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  return (
    <div className="flex mx-auto max-w-7xl">
      <Saidbar />
      <main className="flex-grow border-l border-r border-gray-700 max-w-xl ">
        <header className="sticky top-0 z-10 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
          <h2 className="font-bold px-4 py-3 text-xl">For You</h2>
        </header>
        <TwitterForm
          onTweet={(content) => addNewTweet(content, Math.random() > 0.6)}
        />
        <div>
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </main>
      <aside className="hidden xl:block w-80 px-4">
        <div className="sticky top-0 pt-2">
          <div className="relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute top-3 left-3 text-gray-500"
            />
            <input
              placeholder="Search Twitter"
              className="w-full bg-gray-800 rounded-full outline-none py-2 pl-10 pr-4 text-white"
            />
          </div>

          <div className="bg-gray-800 rounded-xl mt-4 p-4">
            <h2 className="font-bold mb-4 text-xl">Subscribe to Premium</h2>
            <p className="text-gray-500 mb-4">
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </p>
            <button className="rounded-full bg-blue-500 text-white px-4 py-2 font-bold cursor-pointer hover:bg-blue-700 transition duration-200">
              Subscribe
            </button>
          </div>
          <div className="bg-gray-800 rounded-xl mt-4 p-3">
            <h2 className="font-bold text-xl mb-4">Whats happening</h2>
            <TrendItem
              category="NFL . LIVE"
              name="New York Giants at Dallas Cowboys"
            />
            <TrendItem category="Sports . Trending" name="Kyle Dugger" />
            <TrendItem
              category="Sports . Trending"
              name="Cristoffer Mins"
              tweetCount="9,567"
            />
            <TrendItem
              category="Sports . Trending"
              name="Adren Hill"
              tweetCount="13,569 posts"
            />
            <TrendItem
              category="Sports . Trending"
              name="Daboll"
              tweetCount="1,346 posts"
            />
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
