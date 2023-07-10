import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ListItem from './components/ListItem';

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/valorant",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-144x192.jpg",
    alt: "Imagem do jogo Valorant",
  },

  {
    url: "https://www.twitch.tv/directory/game/World%20of%20Warcraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/18122-144x192.jpg", 
    alt: "Imagem do jogo World of Warcraft",
  },

  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-144x192.jpg",
    alt: "Imagem do jogo League of Legends",
  },

  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20of%Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-832x1109.jpg",
    alt: "Imagem do jogo Teamfight Tactics",
  },
];

const channelListData = [
  {  
    url: "https://www.twitch.tv/mwzera",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/4d7ab066-c988-482c-90db-fa3e0eb40b29-profile_image-150x150.png",
    alt: "Imagem do proplayer Mwzera",
  },

  {
    url: "https://www.twitch.tv/asmongold",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-150x150.png",
    alt: "Imagem do streamer Asmongold",
  },

  {
    url: "https://www.twitch.tv/brtt",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/c70194ff-884e-4b35-9848-5fa3bcbd49e5-profile_image-150x150.png",
    alt: "Imagem do streamer brTT",
  },

  {
    url: "https://www.twitch.tv/techzz",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/596fb115-9868-48f2-a240-5448cf186bd3-profile_image-150x150.png",
    alt: "Imagem do streamer Techzz",
  },
]

const socialListData = [
  {
    url: "https://www.twitch.tv/kimvlr",
    imageUrl: "/assets/twitch.svg",
    alt: "Canal da Twitch",
  },

  {
    url: "https://www.instagram.com/marcosp_limam/",
    imageUrl: "/assets/instagram.svg",
    alt: "Perfil do Instagram",
  },

  {
    url: "https://www.twitter.com/marcosplimam",
    imageUrl: "/assets/twitter.svg",
    alt: "Perfil do Twitter",
  },
]


function App() {
  return (
    <div className="App">
      {/*incluir header aqui*/}
      <Header />

      <main> 
          <Section 
            profile="Marcos 'kim' Lima"
            title="Meus jogos"
            subtitle="Os games que eu mais curto!!!"   
            className="games-list"
          >
          
          {
            gamesListData.map(function (item){
              return (
                <ListItem
                url= {item.url}
                imageUrl= {item.imageUrl}
                alt= {item.alt} 
                />
            )
            })
          }
          
          
          </Section>
          
          <Section
            title="Canais e streamers"
            subtitle="Os canais e streamers que eu mais acompanho!!!"
            className="channel-list"
          >
              
          {
            channelListData.map(function (item){
              return (
                <ListItem
                url= {item.url}
                imageUrl = {item.imageUrl}
                alt = {item.alt}
                />
              )
            })
          }
          
          </Section>

          <Section
            title="Minhas redes"
            subtitle="Se conecte comigo agora mesmo"
            className="social-list"
          >

            {
              socialListData.map(function (item){
                return (
                  <ListItem
                    url= {item.url}
                    imageUrl = {item.imageUrl}
                    alt = {item.alt}
                  />
                )
              })
            }


          </Section>
      </main>      

    </div>
  );
}

export default App;
