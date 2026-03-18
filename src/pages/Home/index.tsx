import {
  Container,
  LeftSection,
  RightSection,
  Image,
  IntroText,
  LinksWrapper,
  NavLinkStyled,
  Title,
} from "./styles";



import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArthurImage from "../../assets/arthur.png";

export function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title
        as={motion.h1}
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Portfólio — Arthur Ribeiro Gonçalves
      </Title>
      {/* ESQUERDA */}
      <LeftSection
        as={motion.div}
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={ArthurImage} alt="Arthur Ribeiro" />

        <IntroText>
          Olá, muito prazer,
          <br />
          me chamo Arthur Ribeiro...
        </IntroText>
      </LeftSection>

      {/* DIREITA */}
      <RightSection>
        <LinksWrapper
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <NavLinkStyled
            as={motion.div}
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: 1, x: 0 },
            }}
            whileHover={{ x: 15 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("/sobre")}
          >
            Sobre
          </NavLinkStyled>

          <NavLinkStyled
            as={motion.div}
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: 1, x: 0 },
            }}
            whileHover={{ x: 15 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("/projetos")}
          >
            Projetos
          </NavLinkStyled>

          <NavLinkStyled
            as={motion.div}
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: 1, x: 0 },
            }}
            whileHover={{ x: 15 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("/certificados")}
          >
            Certificados
          </NavLinkStyled>

          <NavLinkStyled
            as={motion.div}
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: 1, x: 0 },
            }}
            whileHover={{ x: 15 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("/contato")}
          >
            Contato
          </NavLinkStyled>
        </LinksWrapper>
      </RightSection>
    </Container>
  );
}