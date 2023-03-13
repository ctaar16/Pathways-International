import styled from "styled-components";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  padding-top: 210px;
  background: #2681c4;
`;

export const FormWrap = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10%;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const Form1 = styled.p`
  height: 100px;
  display: flex;
  justify-content: center;
  background: "#fff";
  color: "#010101";

  @media screen and (max-width: 480px) {
    height: 80%; 
    font-size: 14px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const Label = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 20px 20px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  text-align: center;
`;

export const FormButton = styled.button`
  background: #0693e3;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
