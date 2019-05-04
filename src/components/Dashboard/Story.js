import React, { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faThumbsUp, faUser);

const article = {
  padding: "5rem",
  overflow: "auto",
  height: "100%"
};

const Story = () => {
  const storyData = {
    id: 1,
    title: "La nuit des jeunes pouces",
    date: "30/32/23",
    limit: 10000,
    views: 3200,
    content: [
      {
        id: 1,
        date: "21/32/32",
        author: "Olivier",
        likes: 4,
        paragraph:
          "Interprétée initialement dans le cadre d'un sketch de l'émission Touche pas à mon poste ! le 20 mars 2013, la chanson rencontre un succès populaire et sort le 15 mai 2013 en single sur iTunes. Ce dernier réussit à détrôner le titre Get Lucky de Daft Punk en termes de vente sur la plateforme, provoquant des"
      },
      {
        id: 2,
        date: "23/43/23",
        author: "Jean",
        likes: 3,
        paragraph: "Une grande avancé pour des fantômes de la nuit et celestres"
      },
      {
        id: 3,
        date: "23/43/23",
        author: "Jean",
        likes: 3,
        paragraph: "Une grande avancé pour des fantômes de la nuit et celestres"
      },
      {
        id: 4,
        date: "23/43/23",
        author: "Jean",
        likes: 3,
        paragraph: "Chacun peut publier immédiatement du contenu en ligne, à condition de respecter les règles essentielles établies par la Fondation Wikimedia et par la communauté ; par exemple, la vérifiabilité du contenu, l'admissibilité des articles et garder une attitude cordiale."
      },
      {
        id: 5,
        date: "23/43/23",
        author: "Jean",
        likes: 3,
        paragraph: "Fils du fortuné constructeur automobile Adolphe Clément-Bayard, ce passionné d'automobiles est l'un des pionniers de la compétition automobile. Il commence sa carrière de pilote en 1904, aidé par son père. Désigné comme le « benjamin » des coureurs, il s'illustre à plusieurs reprises, terminant même sur le podium du premier Grand Prix de l'Automobile Club de France. L'année suivante, il meurt au volant de la Bayard no 13 lors des entraînements du Grand Prix de l'Automobile Club de France 1907."
      }
    ]
  };
  const [story, setStory] = useState(storyData);

  const handleLikes = () => {
    story.content.map(element => console.log(element.likes + 1));
  };

  return (
    <article className="article-window"style={article}>
      <div className="article-header">
        <span className="text-warning">
          1:30 min
          <FontAwesomeIcon className="ml-2" icon="clock" />
        </span>
        <h2 className="article-title">{story.title}</h2>
        <hr />
      </div>
      {story.content.map(element => (
        <div className="article-content">
          <p
            className="article-paragraph"
            key={element.id}
            onClick={handleLikes}
          >
            {element.paragraph}
          </p>
          <div className="article-content-info">
            <small className="text-warning mr-5">
              <FontAwesomeIcon icon="thumbs-up" className="mr-2" />
              {element.likes}
            </small>
            <small className="text-secondary mr-5">
              <FontAwesomeIcon icon="user" className="mr-2" />
              {element.author}
            </small>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Story;
