import React, { useState } from "react";

import StoryList from "./StoryList";
import StoryPreview from "./StoryPreview";

import TypeWriter from "../Elements/Typewriter";

const container = {
  flex: 1
};
const sideBar = {
  background: "#EDEFF8",
  height: "100%",
  overflow: "auto"
};
const Overview = () => {
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
        paragraph:
          "Chacun peut publier immédiatement du contenu en ligne, à condition de respecter les règles essentielles établies par la Fondation Wikimedia et par la communauté ; par exemple, la vérifiabilité du contenu, l'admissibilité des articles et garder une attitude cordiale."
      },
      {
        id: 5,
        date: "23/43/23",
        author: "Jean",
        likes: 3,
        paragraph:
          "Fils du fortuné constructeur automobile Adolphe Clément-Bayard, ce passionné d'automobiles est l'un des pionniers de la compétition automobile. Il commence sa carrière de pilote en 1904, aidé par son père. Désigné comme le « benjamin » des coureurs, il s'illustre à plusieurs reprises, terminant même sur le podium du premier Grand Prix de l'Automobile Club de France. L'année suivante, il meurt au volant de la Bayard no 13 lors des entraînements du Grand Prix de l'Automobile Club de France 1907."
      }
    ]
  };

  const [story, setStory] = useState(storyData);

  let FireStoreCollection

  const [fireStory, setFireStory] = useState(FireStoreCollection)

    

  return (
    <div className="row no-gutters" style={container}>
      <div className="col-lg-4 d-sm-none d-md-block" style={sideBar}>
        <StoryList
          title={story.title}
          text={story.content[0].paragraph.slice(0, 150)}
        />
      </div>
      <div className="col-lg-8 section-dynamic">
        <StoryPreview
          title={story.title}
          paragraph={story.content.map(element => element.paragraph)}
        />
        <TypeWriter
          rows="5"
          limit={150}
          value=""
          placeholder="Once uppon a time in the middle west..."
        />
      </div>
    </div>
  );
};

export default Overview;
