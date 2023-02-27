import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(91, 172, 164, 0.521);
  padding-bottom: 15px;
  padding-top: 15px;
  border-radius: 20px;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  right: 0;
`;
export const Form = styled.form`
  border: 1px solid gray;
  width: 320px;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: 0 auto;
  opacity: 1;
  border-radius: 8px;
  box-shadow: 2px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;
export const Input = styled.input`
  font-size: 20px;
  border-color: transparent;
  background-color: transparent;
  &::placeholder {
    font-size: 20px;
  }
`;
export const Button = styled.button`
  margin-top: 5px;
  background-color: transparent;
  border-color: transparent;
  transform: scale(1);
  color: gray;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    color: #38bdbddc;
  }
`;