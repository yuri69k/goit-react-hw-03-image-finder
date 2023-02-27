import styled from 'styled-components';

export const ImageItem = styled.li`
  box-shadow: 0px 3px 5px -4px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 0px 3px 5px -4px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 3px 5px -4px rgba(0, 0, 0, 1);
  border: 1px solid #e2d3d3bc;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transform: scale(1);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  border: 3px solid transparent;
`;

export const InfoWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 11px 13px -3px rgba(0, 0, 0, 0.21) inset;
  -webkit-box-shadow: 0px 11px 13px -3px rgba(0, 0, 0, 0.21) inset;
  -moz-box-shadow: 0px 11px 13px -3px rgba(0, 0, 0, 0.21) inset;
`;
export const Info = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Comments = styled.b`
  color: #2bb9a9;
  font-size: 14px;
`;