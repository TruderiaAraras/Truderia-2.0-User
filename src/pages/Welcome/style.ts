import styled from "styled-components";
import { Link } from 'react-router-dom';

import menuBackground from "../../assets/png/NewBackground.png";
import logoIcon from "../../assets/png/logo.png";
import facebookIcon from "../../assets/png/facebook.png";
import whatsappIcon from "../../assets/png/whatsapp.png";
import instagramIcon from "../../assets/png/instagram.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-image: url(${menuBackground});
  background-size: cover;
  background-position: 60%;
  overflow: scroll;
`;

export const Content = styled.div`
  width: 100%;
  height: 65vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  width: 333px;
  height: 180px;

  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const WrapperButton = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
`;

export const ButtonSocial = styled.button`
  width: 80vw;
  min-width: 300px;
  max-width: 100%;
  padding: 9px 16px;
  border-radius: 15px;
  box-shadow: 0px 2px 8px -2px rgb(0 0 0 / 63%);
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.color.PRIMARY};
  background-color: ${({ theme }) => theme.color.SHAPE};;
  cursor: pointer;

  margin-bottom: 10px;
`;

export const Button = styled(Link)`
  width: 80vw;
  min-width: 300px;
  max-width: 100%;
  padding: 9px 16px;
  border-radius: 15px;
  box-shadow: 0px 2px 8px -2px rgb(0 0 0 / 63%);
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.color.PRIMARY};
  background-color: ${({ theme }) => theme.color.SHAPE};;
  cursor: pointer;
  text-align: center;
`;

export const Footer = styled.div`
  width: 100%;
  height: 120px;
  margin-top: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.color.PRIMARY};
`;

export const TopFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleFooter = styled.h2`
  color: ${({ theme }) => theme.color.ORANGE_LIGHTER};
  font-family: "Roboto Condensed";
  letter-spacing: 4px;
  font-weight: normal;
  font-size: 16px;
`;

export const BottomFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
`;

export const LinkButton = styled.a`
  margin: 0 12px;
`;

export const IconWhatsApp = styled.div`
  width: 51px;
  height: 51px;

  background-image: url(${whatsappIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const IconInstagram = styled.div`
  width: 51px;
  height: 51px;

  background-image: url(${instagramIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const IconFacebook = styled.div`
  width: 51px;
  height: 51px;

  background-image: url(${facebookIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;