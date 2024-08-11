import { useEffect, useState } from 'react';
import "./BgChanger.css";

const BackgroundChanger = () => {
  const [index, setIndex] = useState(1); 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("hola");
      setIndex((prevIndex) => {
        if (prevIndex < 6) {
          console.log(prevIndex);
          return prevIndex + 1;
        } else {
          return 1; // Reinicia el índice a 1 si es mayor que 6
        }
      });
    }, 1000);

    return () => clearTimeout(timeoutId); // Limpia el timeout al desmontar el componente
  }, [index]);

  return (
    <div 
      className="background-image-example"
      style={{ backgroundImage: `url(/alberca${index}.jpg)`}}
    >
      <h1>Construimos albercas de todas formas y dimensiones.</h1>
      <div className="container-button">
        <button>Contáctame</button>
      </div>
    </div>
  );
};

export default BackgroundChanger;
