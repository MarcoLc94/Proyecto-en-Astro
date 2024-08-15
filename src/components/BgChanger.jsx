import { useEffect, useState } from 'react';
import "./BgChanger.css";

const BackgroundChanger = () => {
  const [index, setIndex] = useState(1);

  const handleScroll = () => {
    // Obtén el elemento con el ID "contacto" y haz scroll hacia él
   console.log("hola")
   const access = document.getElementById("contact")
   access.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex < 7 ? prevIndex + 1 : 1;
        console.log(newIndex);
  
        // Forzar actualización del estilo
        document.querySelector('.background-image-example').style.backgroundImage = `url(/alberca${newIndex}.jpg)`;
  
        return newIndex;
      });
    }, 2000);
  
    return () => clearTimeout(timeoutId);
  }, [index]);


  return (
    <div 
      className="background-image-example"
      style={{ backgroundImage: `url(/alberca${index}.jpg)`}}
      id="home"
    >
      <h1>Construimos  albercas de todas formas y dimensiones.</h1>
      <div className="container-button">
        <button client:load="true" onClick={handleScroll}>Contacto</button>
      </div>
    </div>
  );
};

export default BackgroundChanger;
