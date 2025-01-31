import React, { useState, useEffect } from "react";
import "./Main.css";
import { playlists } from "../../assets/playlists";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Main = ({ searchTerm }) => {
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);

  // Lógica para fazer a pesquisa da API
  useEffect(() => {
    if (searchTerm === "") {
      setResults([]);
      setNoResults(false);
      return;
    }

    setLoading(true);
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.length === 0) {
          setNoResults(true);
          setResults([]);
        } else {
          setNoResults(false);
          setResults(data);
        }
      })
      .catch(() => {
        setLoading(false);
        setNoResults(true);
      });
  }, [searchTerm]);

  return (
    <div className="playlist-container">
      {/* Exibição das playlists quando não há pesquisa */}
      <div id="result-playlists" className={searchTerm === "" ? "" : "hidden"}>
        <div className="playlist">
          <h1 id="greeting">Boas vindas</h1>
          <h2 className="session">Navegar por todas as seções</h2>
        </div>
        <div className="offer__scroll-container">
          <div className="offer__list">
            <section className="offer__list-item">
              {playlists.map((playlist, index) => (
                <a href="#" key={index} className="cards">
                  <div className={`cards card${index + 1}`}>
                    <img src={playlist.img} alt={playlist.title} />
                    <span>{playlist.title}</span>
                  </div>
                </a>
              ))}
            </section>
          </div>
        </div>
      </div>

      {/* Exibição do resultado do artista */}
      <div id="result-artist" className={noResults ? "hidden" : ""}>
        {results.length > 0 && (
          <div className="grid-container">
            <div className="artist-card">
              <div className="card-img">
                <img
                  id="artist-img"
                  className="artist-img"
                  src={results[0]?.urlImg}
                  alt={results[0]?.name}
                />
                <div className="play">
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faPlay} />
                  </span>
                </div>
              </div>
              <div className="card-text">
                <a href="" title={results[0]?.name} className="vst">
                  <span className="artist-name" id="artist-name">
                    {results[0]?.name}
                  </span>
                  <span className="artist-categorie">Artista</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Se estiver carregando */}
      {loading && <p>Carregando...</p>}

      {/* Se não houver resultados */}
      {noResults && <p id="no-results-message">Nenhum resultado encontrado</p>}
    </div>
  );
};

export default Main;
