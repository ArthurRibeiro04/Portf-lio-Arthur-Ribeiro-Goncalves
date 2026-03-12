import * as S from "./styles";
import { motion } from "framer-motion";

interface Props {
  certificado: {
    titulo: string;
    instituicao: string;
    descricao: string;
    carga: string;
    ano: string;
    preview: string;
    arquivo: string;
  };
  side: "left" | "right";
  onClick: () => void;
}




export function CertificadoItem({ certificado, side, onClick }: Props) {

  const isPDF = certificado.arquivo.endsWith(".pdf");

  return (
    <S.Container
      as={motion.div}
      side={side}
      initial={{ opacity: 0, x: side === "left" ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      <S.Dot side={side} />

      <S.Card>
        {isPDF ? (
          <S.PreviewPDF src={certificado.arquivo} />
        ) : (
          <S.PreviewImg src={certificado.preview} />
        )}

        <S.Info>
          <S.Titulo>{certificado.titulo}</S.Titulo>

          <S.Meta>
            {certificado.instituicao} • {certificado.ano}
          </S.Meta>

          <S.Carga>{certificado.carga}</S.Carga>

          <S.Descricao>{certificado.descricao}</S.Descricao>
        </S.Info>
      </S.Card>
    </S.Container>
  );
}