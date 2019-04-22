import React, {useEffect} from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faClock);

const article = {
  padding: "5rem",
  overflow: "auto",
  height: "100%"
};


const StoryPreview = () => {
  return (
    <article style={article}>
      <div className="article-header">
        <span className="text-warning">
          1:30 min
          <FontAwesomeIcon className="ml-2" icon="clock" />
        </span>
        <h2 className="article-title">The biggest guy in the world</h2>
        <hr />
      </div>
      <p className="article-paragraph">
        Quand il pète il troue son slip est une chanson humoristique sortie en
        2013. Elle est interprétée par l'animateur Cartman, sous les traits de
        son personnage de Sébastien Patrick, renommé par la suite Sébastien
        Patoche. La chanson et le personnage sont des parodies de l'animateur
        Patrick Sébastien et de son répertoire de chansons populaires, les
        paroles faisant aussi référence à Chuck Norris et à la série télévisée
        Walker, Texas Ranger.
      </p>
      <p className="article-paragraph">
        Interprétée initialement dans le cadre d'un sketch de l'émission Touche
        pas à mon poste ! le 20 mars 2013, la chanson rencontre un succès
        populaire et sort le 15 mai 2013 en single sur iTunes. Ce dernier
        réussit à détrôner le titre Get Lucky de Daft Punk en termes de vente
        sur la plateforme, provoquant des réactions dans les milieux artistique
        et journalistique. La chanson est ensuite intégrée à l'album J'emmerde
        les bobos ! qui sort le 8 juillet 2013.
      </p>
      <p className="article-paragraph">
        Interprétée initialement dans le cadre d'un sketch de l'émission Touche
        pas à mon poste ! le 20 mars 2013, la chanson rencontre un succès
        populaire et sort le 15 mai 2013 en single sur iTunes. Ce dernier
        réussit à détrôner le titre Get Lucky de Daft Punk en termes de vente
        sur la plateforme, provoquant des réactions dans les milieux artistique
        et journalistique. La chanson est ensuite intégrée à l'album J'emmerde
        les bobos ! qui sort le 8 juillet 2013.
      </p> 
      <p className="article-paragraph">
        Interprétée initialement dans le cadre d'un sketch de l'émission Touche
        pas à mon poste ! le 20 mars 2013, la chanson rencontre un succès
        populaire et sort le 15 mai 2013 en single sur iTunes. Ce dernier
        réussit à détrôner le titre Get Lucky de Daft Punk en termes de vente
        sur la plateforme, provoquant des réactions dans les milieux artistique
        et journalistique. La chanson est ensuite intégrée à l'album J'emmerde
        les bobos ! qui sort le 8 juillet 2013.
      </p> 
      <p className="article-paragraph">
        Interprétée initialement dans le cadre d'un sketch de l'émission Touche
        pas à mon poste ! le 20 mars 2013, la chanson rencontre un succès
        populaire et sort le 15 mai 2013 en single sur iTunes. Ce dernier
        réussit à détrôner le titre Get Lucky de Daft Punk en termes de vente
        sur la plateforme, provoquant des réactions dans les milieux artistique
        et journalistique. La chanson est ensuite intégrée à l'album J'emmerde
        les bobos ! qui sort le 8 juillet 2013.
      </p> 
    </article>
  );
};

export default StoryPreview;
