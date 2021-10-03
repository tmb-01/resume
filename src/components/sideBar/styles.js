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
`;

export const AvatarImage = styled.div`
  width: 200px;
  height: 200px;
  background-color: #444444;
  padding: 18px;
  border-radius: 50%;
  margin: 30px auto 0;
  box-shadow: 0 0 50px black;

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
      stroke: none;
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

`;

export const NavIcon = styled.div`
  display: flex;
  width: 40px;
  margin-left: 50px;

  svg {
    path {
      stroke: #969696;
    }

    .fill {
      stroke: none;
      fill: #969696;
    }
  }
`;

export const NavText = styled.div`
  text-transform: capitalize;

`;


export const SocialMediaWrapper = styled.div`
  display: flex;
  background-color: #444;
  border-radius: 10px;
  box-shadow: 0 0 40px black;
  width: 100%;
  margin: 30px 0;
  justify-content: space-evenly;
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
        fill: url(#a);
      }

      .second {
        fill: url(#b);
      }

      .third {
        fill: url(#c);
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
`;