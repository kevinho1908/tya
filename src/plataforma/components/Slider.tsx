import React, { useState } from 'react'
import styled from 'styled-components';


//añadiremos css a los componentes.
const CarouselImg = styled.img`
  max-width: 100%;
  width: auto;
  height: 50%;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const CarouselButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 15px;
`;

const CarouselButton = styled.button`
  color: white;
  background-color: black;
  padding: 8px;
  margin: 0 5px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Slider = (props: any) => {

  //coleccion de imagenes:
  const images = ["sd-login.jpg", "sd.jpg", "TyALogo.png"]
  //variable y modificacodr de estados
  const [selectedIndex, setSelectedIndex] = useState(0); //valor predeteminado 0
  //obetener imagenes, este estara ligado al estado del componente.
  const [selectedImage, setSelectedImage] = useState(images[0]);

  //variable que maneja la opacidad.
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index: number, images: string[], next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1; //shorthands
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  }

  const previus = () => {
    selectNewImage(selectedIndex, images, false);
  }

  const next = () => {
    selectNewImage(selectedIndex, images);
  }

  return (
    <>
      <Container>

        <CarouselImg src={`assets/${selectedImage}`} alt="imagen"
          className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)} />

      </Container>

      {/* button's */}

      <CarouselButtonContainer>

        <CarouselButton onClick={previus}> {"<"}</CarouselButton>
        <CarouselButton onClick={next}> {">"}</CarouselButton>

      </CarouselButtonContainer>
    </>
  )

}
