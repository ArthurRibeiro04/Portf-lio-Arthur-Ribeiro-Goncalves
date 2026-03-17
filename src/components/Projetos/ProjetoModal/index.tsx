import { useState } from "react";

import {
  Backdrop,
  ModalContainer,
  CloseButton,
  Title,
  Description,
  ImageContainer,
  Image,
  Techs,
  GithubButton,
  PrevButton,
  NextButton
} from "./styles";

interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  github: string;
  tecnologias: string[];
  imagens: string[];
}

interface ProjetoModalProps {
  projeto: Projeto;
  onClose: () => void;
}

const ProjetoModal = ({ projeto, onClose }: ProjetoModalProps) => {
  const [imagemAtual, setImagemAtual] = useState(0);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      onClose();
    }, 250);
  };

  const proximaImagem = () => {
    setImagemAtual((prev) =>
      prev === projeto.imagens.length - 1 ? 0 : prev + 1
    );
  };

  const imagemAnterior = () => {
    setImagemAtual((prev) =>
      prev === 0 ? projeto.imagens.length - 1 : prev - 1
    );
  };

  return (
    <Backdrop onClick={handleClose} $closing={closing}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>

        <CloseButton onClick={handleClose}>✕</CloseButton>

        <Title>{projeto.nome}</Title>

        <ImageContainer>
          <PrevButton onClick={imagemAnterior}>◀</PrevButton>

          <Image
            key={imagemAtual}
            src={projeto.imagens[imagemAtual]}
          />

          <NextButton onClick={proximaImagem}>▶</NextButton>
        </ImageContainer>

        <Techs>
          {projeto.tecnologias.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </Techs>

        <Description>{projeto.descricao}</Description>

        <GithubButton
          href={projeto.github}
          target="_blank"
          rel="noreferrer"
        >
          Ver no GitHub
        </GithubButton>

      </ModalContainer>
    </Backdrop>
  );
};

export default ProjetoModal;