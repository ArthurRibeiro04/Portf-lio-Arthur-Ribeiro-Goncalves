import { useState } from "react";
import { projetos } from "../data";

import ProjetoCard from "../ProjetoCard";
import ProjetoModal from "../ProjetoModal";

import { Container, Grid, Title } from "./styles";
import BackButton from "../../BackButton";
import { motion } from "framer-motion";
interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  github: string;
  tecnologias: string[];
  imagens: string[];
}

const ProjetosGrid = () => {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);

  const abrirProjeto = (projeto: Projeto) => {
    setProjetoSelecionado(projeto);
  };

  const fecharProjeto = () => {
    setProjetoSelecionado(null);
  };

  return (
    <Container>
      <BackButton></BackButton>
      <Title>Projetos</Title>

      <Grid
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {projetos.map((projeto) => (
          <ProjetoCard
            key={projeto.id}
            projeto={projeto}
            onOpen={abrirProjeto}
          />
        ))}
      </Grid>

      {projetoSelecionado && (
        <ProjetoModal
          projeto={projetoSelecionado}
          onClose={fecharProjeto}
        />
      )}
    </Container>
  );
};

export default ProjetosGrid;