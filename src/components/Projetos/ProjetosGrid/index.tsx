import { useState } from "react";
import { projetos } from "../data";

import ProjetoCard from "../ProjetoCard";
import ProjetoModal from "../ProjetoModal";

import { Container, Grid, Title } from "./styles";

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
      <Title>Projetos</Title>

      <Grid>
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