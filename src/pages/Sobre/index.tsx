import {
  Container,
  Hero,
  Title,
  HistorySection,
  TextContent,
  Paragraph,
  ImageWrapper,
  Image,
  TecnologiasSection,
} from "./styles";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import ArthurImage from "../../assets/arthur2.png";
import Header from "../../components/Header";
import TechCarousel from "../../components/TechCarousel";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export function Sobre() {
  return (
    <>
    <Header />
    <Container>
      <Hero
        as={motion.div}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <Title>Sobre Mim</Title>
      </Hero>

      <HistorySection>
        <TextContent
          as={motion.div}
          variants={containerStagger}
          initial="hidden"
          animate="visible"
        >
          <Paragraph as={motion.p} variants={fadeLeft}>
            Desde muito cedo, a tecnologia sempre fez parte da minha vida.
            Comecei explorando o universo dos videogames e, naturalmente,
            essa curiosidade evoluiu para os computadores e para entender
            como as coisas funcionavam por trás das telas.
          </Paragraph>

          <Paragraph as={motion.p} variants={fadeLeft}>
            Após concluir o ensino médio, ingressei em um curso técnico
            de Desenvolvimento Full Stack na Kenzie Academy Brasil,
            com mais de 2000 horas de formação, aprofundando meus
            conhecimentos em front-end e back-end.
          </Paragraph>

          <Paragraph as={motion.p} variants={fadeLeft}>
            Posteriormente, entrei na UFSC no curso de Tecnologia da
            Informação e Comunicação, onde permaneci por três anos e
            concluí minha graduação neste ano.
          </Paragraph>

          <Paragraph as={motion.p} variants={fadeLeft}>
            Hoje, me considero alguém com forte afinidade por programação,
            facilidade em leitura e compreensão de código e, principalmente,
            sempre disposto a aprender novas ferramentas e tecnologias.
          </Paragraph>
        </TextContent>
        <ImageWrapper
          as={motion.div}
          variants={fadeRight}
          initial="hidden"
          animate="visible"
        >
          <Image src={ArthurImage} alt="Arthur Ribeiro" />
        </ImageWrapper>
      </HistorySection>

      <TecnologiasSection>
        <Hero
          as={motion.div}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Title>Tecnologias</Title>
        </Hero>

        <TechCarousel></TechCarousel>

      </TecnologiasSection>
    </Container>
    </>
  );
}