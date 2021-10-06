import styled from "styled-components";

export const MainContentWrapper = styled.div`
  width: calc(100% - 300px);
  color: white;
  padding: 40px 0;
  display: flex;
  align-items: center;
  overflow: auto;
  @media only screen and (max-width: 1320px){
    width: calc(100% - 100px);
  }
  @media only screen and (max-width: 720px) {
    width: 100%;
  }
  @media only screen and (max-width: 610px){
   padding: 10px 10px 40px;
  }
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
  @media only screen and (max-width: 1320px){
    width: 800px;
    padding: 40px 40px;
  }
  
  @media only screen and (max-width: 950px){
    width: 600px;
  }
  @media only screen and (max-width: 610px){
    width:100%;
    padding: 20px;
    border-radius: 20px;
  }
`;

export const ContentTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: center;

  @media only screen and (max-width: 610px) {
    width: 80%;
    font-size: 40px;
  }
  @media only screen and (max-width: 510px){
    font-size: 30px;
  }
`;

export const JobName = styled.div`
  text-align: center;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    //border-bottom: 1px solid #007BEA;
    font-weight: bold;
    font-size: 20px;
    position: relative;

    &:first-letter {
      margin-left: 10px;
    }

    &:before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: calc(100% - 10px);
      height: 2px;
      background-color: #007BEA;
    }
  }
`;

export const Description = styled.div`
  width: 55%;
  line-height: 25px;
  margin: 10px 0;
  font-size: 18px;

  a {
    color: white;
  }
`;

export const DFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ShortInfoWrapper = styled.div`
  width: 40%;
`;

export const ShortInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;

  span {
    margin: 0 10px 0 5px;
  }
`;

export const ShortInfoKey = styled.div`
  //border-bottom: 2px solid #007BEA;
  font-weight: bold;
`;

export const ShortInfoValue = styled.div`
  //width: 55%;
  color: lightgrey;
`;