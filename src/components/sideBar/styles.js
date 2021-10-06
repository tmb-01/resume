import styled from "styled-components";
import {Link} from "react-router-dom";

export const SideBarWrapper = styled.div`
  width: 300px;
  height: 100%;
  background-color: #222;
  border-radius: 0 40px 40px 0;
  //padding: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  overflow-x: visible;
  @media only screen and (max-width: 1320px) {
    width: 100px;
  }

  @media only screen and (max-width: 720px) {
    width: 100%;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    flex-direction: row;
    height: fit-content;
    z-index: 9999999;
    border-radius: 0;
  }
  @media only screen and (max-width: 510px){
    //height: 50px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AvatarImage = styled.div`
  width: 200px;
  height: 200px;
  background-color: #444444;
  padding: 18px;
  border-radius: 50%;
  margin: 30px auto 0;
  box-shadow: 0 0 50px black;

  @media only screen and (max-width: 1320px) {
    display: none;
  }

  div {
    box-shadow: 0 0 20px black;
    border-radius: 50%;
    overflow: hidden;
    display: flex;

    img {
      //width: 100%;
      //height: 100%;
    }
  }
`;

export const NavbarWrapper = styled.div`
  margin: 0 0;
  width: 100%;
  padding-right: 30px;
  @media only screen and (max-width: 1320px) {
    padding-right: 10px;
    margin: auto;
  }
  @media only screen and (max-width: 720px) {
    display: flex;
    //justify-content: space-between;
    padding: 0;
    width: calc(100% - 80px);
    margin: 0;
    border-right: 1px solid grey;
  }
`;

export const NavBox = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({active}) => active ? "white" : "#969696"};
  height: 60px;
  //border: 1px solid white;
  cursor: pointer;
  border: 0;
  position: relative;

  * {
    z-index: 5;
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
    border-radius: 0 10px 10px 0;
    background-color: ${({active}) => active ? "#444444cc" : ""} !important;
  }

  svg {
    path {
      stroke: ${({active}) => active ? "#007BEA" : ""} !important;
    }

    .fill {
      stroke: none !important;
      fill: ${({active}) => active ? "#007BEA" : ""} !important;
    }
  }

  &:hover {
    color: white;

    &:before {
      background-color: #44444455;
    }

    svg {
      path {
        stroke: #007BEA;
      }

      .fill {
        stroke: none;
        fill: #007BEA;
      }
    }
  }

  @media only screen and (max-width: 1320px) {
    height: 70px;
  }
  @media only screen and (max-width: 720px) {
    width: 25%;
    
    &:before{
      border-radius: 0;
    }
  }
  @media only screen and (max-width: 510px){
    height: 50px;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  width: 40px;
  margin-left: 50px;

  svg {
    //width: 100%;
    path {
      stroke: #969696;
    }

    .fill {
      stroke: none;
      fill: #969696;
    }
  }

  @media only screen and (max-width: 1320px) {
    width: fit-content;
    //margin-left: 20px;
    margin: auto;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  @media only screen and (max-width: 720px) {
    margin: auto;
  }
  @media only screen and (max-width: 510px){
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const NavText = styled.div`
  text-transform: capitalize;
  @media only screen and (max-width: 1320px) {
    display: none;
  }

`;

export const AllSocialMediaWrapper = styled.div`
  padding: 0 30px;
  @media only screen and (max-width: 720px) {
    padding: 0;
  }
`;


export const SocialMediaWrapper = styled.div`
  display: flex;
  background-color: #444;
  border-radius: 10px;
  box-shadow: 0 0 40px black;
  width: 100%;
  margin: 30px 0;
  justify-content: space-evenly;

  @media only screen and (max-width: 1320px) {
    width: fit-content;
    display: ${({isOpenSM}) => isOpenSM ? "flex" : "none"};
    position: fixed;
    left: 0;
    bottom: 0;
    margin: 0;
    z-index: 9999;
    padding: 20px;
    background-color: #222;
    //box-shadow: none;
    border-radius: 0 40px 0 0;
  }

  @media only screen and (max-width: 720px) {
    right: 0;
    left: auto;
    flex-direction: column;
    border-radius: 40px  0 0 0;
  }
`;

export const SocialMediaIcon = styled.a`
  width: fit-content;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  border: 0;

  svg {
    width: auto;
    height: 100%;

    path {
      fill: #222;
      transition-duration: .5s;
    }

    #transparent {
      fill: #444;
    }


    circle {
      fill: #222;
      transition-duration: .5s;
    }
  }

  &:hover {
    .telegram {
      circle {
        fill: #039be5;
      }

      path {
        fill: #fff !important;
      }
    }

    .instagram {
      .first {
        fill: url(#a) !important;
      }

      .second {
        fill: url(#b) !important;
      }

      .third {
        fill: url(#c) !important;
      }
    }

    .facebook {
      path {
        fill: #1976D2 !important;
      }
    }

    .github {
      path {
        fill: black;
      }
    }

    .linkedIn {
      path {
        fill: #0077b5 !important;
      }
    }
  }

  @media only screen and (max-width: 1320px) {
    svg {
      width: auto;
      height: 100%;

      path {
        fill: #969696;
        transition-duration: .5s;
      }

      #transparent {
        fill: #222;
      }


      circle {
        fill: #969696;
        transition-duration: .5s;
      }
    }

  }

  @media only screen and (max-width: 720px) {
    height: 45px;
    padding: 10px;
  }

`;


export const SocialMediaToggle = styled.a`
  width: 40px;
  height: 40px;
  margin: 0 auto 20px;
  position: relative;
  //right: 0;
  //left: 0;
  //bottom: 30px;
  border: 0;
  display: none;

  svg {
    width: 100%;
    height: 100%;
    fill: #969696;
  }

  &:hover, &:focus {
    svg {
      fill: #007BEA;
    }
  }

  .social-media {
    display: none;
  }

  @media only screen and (max-width: 1320px) {
    display: block;
    .social-media {
      padding: 20px;
      display: ${({isOpenSM}) => isOpenSM ? "flex" : "none"};
      box-shadow: 0 0 10px #444;
    }
  }
  @media only screen and (max-width: 720px) {
    height: 100%;
    margin: auto;
    padding: 0;
  }
  @media only screen and (max-width: 510px){
    width: 30px;
    height: 30px;
  }
`;