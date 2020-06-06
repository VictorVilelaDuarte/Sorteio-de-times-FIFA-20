import styled from "styled-components";

export const Container = styled.div`
  background-color: #030303;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TeamDiv = styled.div`
  height: 400px;
  width: 300px;
  border: 1px dashed #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  height: 45px;
  margin-top: 20px;
  width: 180px;
  color: #282c34;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
`;

export const Name = styled.h2`
  top: 20px;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
`;

export const Preview = styled.h3`
  color: #fff;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
`;

export const Ba = styled.img`
  margin-top: 35px;
  height: 100px;
  width: 100px;
`;

export const BaCorporation = styled.p`
  color: #fff;
  margin-top: 5px;
  font-size: 12px;
`;
