import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation-name: Opacity;
  animation-duration: 700ms;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  transition-property: transform, opacity, visibility;
  transition-duration: 250ms;
  transition-delay: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 200;
`;

export const ModalWindow = styled.div`
  position: absolute;
  width: 360px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  @media screen and (min-width: 600px) {
    width: 480px;
    height: 350px;
  }
  @media screen and (min-width: 700px) {
    width: 600px;
    height: 400px;
  }
  @media screen and (min-width: 1200px) {
    width: 1100px;
    height: 700px;
  }
`;

export const ModalImage = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 1);
`;
export const Description = styled.p`
  position: absolute;
  bottom: 15px;
  left: 20px;
  color: #fff;
  padding: 5px;
  border-radius: 10px;
  background-color: #00000060;
`;