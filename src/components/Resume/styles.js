import styled from "styled-components";

export const ContentContainer = styled.div`
  width: calc(1000px);
  margin: auto;
  background-color: #222;
  padding: 40px 40px;
  border-radius: 40px;
  min-height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ContentTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

export const DFlex = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
`;

export const Half = styled.div`
  width: 50%;
  padding: 0 25px;
`;

export const BoxWrapper = styled.div`
  width: 100%;
  border-left: 3px solid gray;
  padding: 1px 0 1px 20px;
`;

export const BoxInner = styled.div`
  margin: 10px 0;
  //border: 1px solid #007BEA;
  border-left: 2px solid #007BEA;
  padding: 10px 20px;
  //background-color: rgba(255,255,255,.9);
  //color: black;
  box-shadow: 0 0 5px grey;
  border-radius: 0 5px 5px 0;
  position: relative;

  div {
    margin: 5px 0;
  }

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 37px;
    left: -30px;
    background-color: #222;
    border: 2px solid #007BEA;
    z-index: 99;
  }

  &:after {
    content: "";
    width: 30px;
    height: 2px;
    position: absolute;
    top: 43px;
    left: -30px;
    background-color: #007BEA;
  }

`;

export const BoxTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Year = styled.div`
  color: #007BEA;
  //margin-right: 10px;
  font-size: 12px;

  span {
    margin: 0 5px;
  }
`;
export const Organization = styled.div`
  //padding-left: 10px;
  //border-left: 1px solid grey;
  color: grey;
  font-size: 12px;
`;

export const BoxDescription = styled.div`
  font-size: 12px;
  line-height: 25px;
`;


export const ShortInfoWrapper = styled.div`
  width: 100%;
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
  line-height: 22px;
`;

export const ShortInfoValue = styled.div`
  //width: 55%;
  color: lightgrey;
  line-height: 22px;
`;

export const ColumnTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;


export const DownloadResumeButton = styled.a`
    
`;