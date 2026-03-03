import {
  Container,
  TopSection,
  LeftText,
  RightText,
  ImageWrapper,
  Image,
  ButtonsWrapper,
  NavButton,
} from "./styles";

import Header from "../../components/Header";
import { motion } from "framer-motion";
import ArthurImage from "../../assets/arthur.png";

export function Home() {
  return (
    <Container>
      <Header />
      <TopSection>
        <LeftText
          as={motion.h1}
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Olá, muito prazer,
          <br />
          me chamo Arthur Ribeiro...
        </LeftText>

        <ImageWrapper
          as={motion.div}
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image src={ArthurImage} alt="Arthur Ribeiro" />
        </ImageWrapper>

        <RightText
          as={motion.h1}
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Venha conhecer mais sobre mim
          <br />
          e sobre minha carreira.
        </RightText>
      </TopSection>

      <ButtonsWrapper
        as={motion.div}
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.7 }}
      >
        <NavButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Sobre
        </NavButton>

        <NavButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Projetos
        </NavButton>

        <NavButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Certificados
        </NavButton>

        <NavButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          Contato
        </NavButton>
      </ButtonsWrapper>
    </Container>
  );
}