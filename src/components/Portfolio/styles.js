import styled from "styled-components";

export const MainContentWrapper = styled.div`
  width: calc(100% - 300px);
  color: white;
  padding: 40px 0;
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: calc(1000px);
  margin: auto;
  background-color: #222;
  padding: 40px 70px;
  border-radius: 40px;
  min-height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PortfolioCardBox = styled.div`
  width: ${({oneOfThree}) => oneOfThree ? 33.3333 : 50}%;
  padding: 10px;
`;

export const PortfolioCard = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  * {
    z-index: 2;
  }
`;

export const VideoBox = styled.div`
  width: 100%;
  margin: auto;
  object-fit: cover;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #00000099;
    z-index: 99999;
    transition-duration: .5s;
  }

  &:hover {
    &::before {
      //background-color: #00000011;
      display: none;
    }

    div {
      opacity: 0;
    }
  }
`;

export const Video = styled.video`
  width: 100%;
  margin: auto;
  border-radius: 5px;
  position: relative;
`;

export const CategoryText = styled.div`
  background-color: #007BEA;
  padding: 7px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  width: fit-content;
`;

export const PATextBox = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  z-index: 99999999;
  transition-duration: .2s;
  //width: fit-content;
  
`;


export const ExternalLinkBox = styled.a`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #007BEA;
  padding: 5px;
  z-index: 99999999;
  display: flex;
  border-radius: 5px;
  svg{
    width: 30px;
    fill: white;
  }
`;