import Link from "next/link";

const animes = [
  {
    title: "Sword Art Online",
    episode: 10,
    url: "asdasd",
    imgUrl: "/sample.jpg",
  },
  {
    title: "Sword Art Online",
    episode: 10,
    url: "asdasd",
    imgUrl: "/sample.jpg",
  },
  {
    title: "Sword Art Online",
    episode: 10,
    url: "asdasd",
    imgUrl: "/sample.jpg",
  },
  {
    title: "Sword Art Online",
    episode: 10,
    url: "asdasd",
    imgUrl: "/sample.jpg",
  },
  {
    title: "Sword Art Online",
    episode: 10,
    url: "asdasd",
    imgUrl: "/sample.jpg",
  },
  {
    title: "Sword Art Online",
    episode: 10,
    url: "asdasd",
    imgUrl: "/sample.jpg",
  },
  {
    title: "Sword Art Online",
    episode: 10,
    url: "asdasd",
    imgUrl: "/sample.jpg",
  },
];

const Animes = ({ withEpisodes }) => {
  return (
    <div className="animes-container">
      {animes.map((anime, index) => {
        return (
          <Link href={`/info/${anime?.id}`}>
            <div className="anime-wrapper" key={index}>
              <div>
                <div className="overlay"></div>
                <img src={anime.imgUrl} alt={`anime-${index}`} />
                <p>{anime.title}</p>
              </div>
              {withEpisodes && (
                <p className="episode link">Episode {anime.episode}</p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Animes;
