import { motion } from "framer-motion";
import {
  Card,
  Image,
  Overlay,
  Title,
  Techs,
  Buttons
} from "./styles";

interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  github: string;
  tecnologias: string[];
  imagens: string[];
}

interface ProjetoCardProps {
  projeto: Projeto;
  onOpen: (projeto: Projeto) => void;
}

const ProjetoCard = ({ projeto, onOpen }: ProjetoCardProps) => {
  return (
    <Card
      as={motion.div}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      whileTap={{ scale: 0.97 }}
    >
      <Image src={projeto.imagens[0]} alt={projeto.nome} />

      <Overlay>
        <Title>{projeto.nome}</Title>

        <Techs>
          {projeto.tecnologias.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </Techs>

        <Buttons>
          <a href={projeto.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <button onClick={() => onOpen(projeto)}>
            Ver detalhes
          </button>
        </Buttons>
      </Overlay>
    </Card>
  );
};

export default ProjetoCard;