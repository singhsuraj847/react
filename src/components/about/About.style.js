import styled, { css } from "styled-components";

export const AboutSection = styled.div`
  width: 100%;
  margin: 20% auto;
  position: absolute;

  h1 {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    margin-bottom: 3rem;
    font-weight: 600;
    color: #fff;

    @media screen and (max-width: 930px) {
      margin-top: 5rem;
      margin-bottom: 2rem;
    }
  }
`;
export const AboutContainer = styled.div`
  width: 90%;
  margin-left: 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 20px;
  grid-gap: 40px;
  place-items: center;
`;

export const AboutTitle = styled.div``;
export const AboutBox = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  background: #fff;
  display: block;
  border-radius: 4px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: #fff;
    transition: 0.5s;
    z-index: -1;
  }
  &:hover:before {
    transform: rotate(20deg);
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
  }
  &:hover:after {
    transform: rotate(10deg);
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const AboutImg = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;
  background: #222;
  transition: 0.5s;
  z-index: 1;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    bottom: 80px;
  }
`;

export const AboutDetail = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 60px;
  text-align: center;
  h2 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 20px;
    color: #777;
    text-transform: uppercase;
  }
  span {
    font-weight: 500;
    font-size: 16px;
    color: #f38695;
    display: block;
    margin-top: 5px;
  }
`;
