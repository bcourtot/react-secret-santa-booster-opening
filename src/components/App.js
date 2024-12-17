import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [names, setNames] = useState(['brice', 'cedric', 'jo', 'jeremy', 'gael', 'larry', 'louis', 'matthew']);
  const [filteredNames, setFilteredNames] = useState([...names]);
  const [inputName, setInputName] = useState('');
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedCardImage, setSelectedCardImage] = useState(null);

  const handleInputChange = (e) => setInputName(e.target.value);

  const handleFilter = () => {
    if (inputName.trim()) {
      setFilteredNames((prev) => prev.filter((name) => name !== inputName));
    }
    setShowCarousel(true);
  };

  const handleShowAll = () => {
    setFilteredNames([...names]);
    setShowCarousel(true);
  };

  const handleBoosterClick = (name) => {
    setFilteredNames((prev) => prev.filter((n) => n !== name));

    const nameIndex = names.indexOf(name);
    const cardImage = cardImages[nameIndex];
    setSelectedCardImage(cardImage);
  };

  const boosterImages = [
    '/img/booster.png',
    '/img/booster-2.png',
    '/img/booster-3.png',
    '/img/booster-4.png',
    '/img/booster-5.png',
  ];

  const cardImages = [
    '/img/cards/brice.jpg',
    '/img/cards/cedric.jpg',
    '/img/cards/gael.jpg',
    '/img/cards/jeremy.jpg',
    '/img/cards/jo.jpg',
    '/img/cards/larry.jpg',
    '/img/cards/louis.jpg',
    '/img/cards/matthew.jpg',
  ];

  const getBoosterImage = () => {
    const randomIndex = Math.floor(Math.random() * boosterImages.length);
    return boosterImages[randomIndex];
  };

  return (
    <div className="app">
      <h1>Tirage Secret Santa</h1>

      {!showCarousel && (
        <div className="input-filter">
          <input
            type="text"
            value={inputName}
            onChange={handleInputChange}
            placeholder="Entrez votre prénom eg: brice, jo, etc"
          />
          <button class="btn-filter" onClick={handleFilter}>Valider</button>
          <button class="btn-show-all"onClick={handleShowAll}>Afficher tout</button>
        </div>
      )}

      {showCarousel && (
        <div className="booster-list">
          {filteredNames.map((name, index) => (
            <div
              key={name}
              className="booster"
              style={{
                backgroundImage: `url(${getBoosterImage()})`,
              }}
              onClick={() => handleBoosterClick(name)}
            ></div>
          ))}
        </div>
      )}

      {selectedCardImage && (
        <div className="selected-card">
          <h2>Félicitations ! </h2> 
          <p> Vous avez tiré :</p>
          <img src={selectedCardImage} alt="Selected Card" />
        </div>
      )}
    </div>
  );
};

export default App;

