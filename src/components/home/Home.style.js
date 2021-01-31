import styled, { keyframes } from "styled-components";
import main from "../image/s_8.jpg";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftToRight = keyframes`
  0%{
    opacity: 0;
    transform: translateX(-100%);
  }
  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

export const HomeSection = styled.div`
  background-image: url(${main});
  height: 100vh;
  display: flex;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const HomeContent = styled.div`
  color: white;
  text-align: right;
  position: relative;
  display: flex;
  overflow: visible;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    align-items: flex-start;
  }
`;

export const HomeWrapper = styled.div`
  width: 43.66%;
  z-index: 99 !important;
  display: flex;
  align-items: center;
  z-index: 2;

  @media only screen and (max-width: 600px) {
    height: 50%;
    width: 100%;
  }
`;

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  left: 0;
  padding: 0 80px;
  opacity: ${({ current }) => (current ? "" : "1")};
  animation: ${LeftToRight} 2s;
  transition: 2s ease-in-out;

  h1 {
    font-size: 5rem;
    font-weight: 900;
    line-height: 5rem;
    text-transform: uppercase;
    text-align: left;
    span {
      color: yellow;
    }

    @media only screen and (max-width: 600px) {
      font-size: 50px;
      line-height: 50px;
      text-align: left;
    }
  }

  p {
    margin: 50px 0;
    text-align: justify;
    @media only screen and (max-width: 600px) {
      font-size: 12px;
      margin: 0;
    }

    @media only screen and (max-width: 1024px) {
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 600px) {
    align-items: flex-start;
    padding: 0 40px;
  }
`;
export const Button = styled(Link)`
  font-size: 30px;
  padding: 10px 50px;
  border-radius: 30px;
  outline: transparent;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  float: right;
  transition: background-color 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    color: #000;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    padding: 10px 20px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
    padding: 10px 20px;
  }
`;

export const SliderSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  z-index: 2;

  @media only screen and (max-width: 600px) {
    height: 50%;
    width: 100%;
    padding-top: 40px;
    align-items: flex-start;
  }
`;

export const Slider = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 50%;
  height: 80%;
  overflow: visible;

  @media only screen and (max-width: 600px) {
    height: 80%;
    width: 80%;
    transform: translateY(20%);
    padding: 50px;
  }

  @media only screen and (max-width: 1024px) {
    height: 50%;
    width: 50%;
    transform: translateY(20%);
  }
`;

export const Slide = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
`;

export const Imageholder = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Icon = styled(FaPlay)``;

export const SlideControl = styled.div`
  z-index: 99;
  color: #fff;
  position: absolute;
  bottom: 40px;
  width: 50px;
  height: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50px;
  border: 2px solid #fff;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
