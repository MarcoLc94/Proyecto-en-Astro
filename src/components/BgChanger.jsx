// src/components/BackgroundChanger.jsx
import { useEffect, useState } from 'react';
import "./BgChanger.css"

const BackgroundChanger = () => {
  const images = [1, 2, 3, 4, 5, 6];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div 
      className="background-image-example"
      style={{ backgroundImage: `url(/alberca${index + 1}.jpg)` }} // Ruta ajustada
    >
      <h1>Construimos albercas de todas formas y dimensiones.</h1>
      <div className="container-button">
        <button>Contáctame</button>
      </div>
    </div>
  );
};

export default BackgroundChanger;
