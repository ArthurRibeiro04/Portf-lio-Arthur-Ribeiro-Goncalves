import * as S from "./styles";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  certificado: any;
  onClose: () => void;
}

export function CertificadoModal({ certificado, onClose }: Props) {
  if (!certificado) return null;

  const isPDF = certificado.arquivo.endsWith(".pdf");

  return (
    <AnimatePresence>
      <S.Backdrop
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <S.Modal
          as={motion.div}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <S.CloseButton onClick={onClose}>✕</S.CloseButton>

          {isPDF ? (
            <S.PDF src={certificado.arquivo} />
          ) : (
            <S.Imagem src={certificado.arquivo} />
          )}
        </S.Modal>
      </S.Backdrop>
    </AnimatePresence>
  );
}