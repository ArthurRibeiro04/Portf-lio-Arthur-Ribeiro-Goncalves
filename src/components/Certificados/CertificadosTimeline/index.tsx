import { useState } from "react";
import * as S from "./styles";

import { certificados } from "../data";
import { CertificadoItem } from "../CertificadoItem";
import { CertificadoModal } from "../CertificadoModal";

export function CertificadosTimeline() {
  const [certificadoSelecionado, setCertificadoSelecionado] = useState<any>(null);

  return (
    <S.Section>

      <S.Titulo>Certificados</S.Titulo>

      <S.Timeline>

        {certificados.map((certificado, index) => (
          <CertificadoItem
            key={certificado.id}
            certificado={certificado}
            side={index % 2 === 0 ? "left" : "right"}
            onClick={() => setCertificadoSelecionado(certificado)}
          />
        ))}

      </S.Timeline>

      <CertificadoModal
        certificado={certificadoSelecionado}
        onClose={() => setCertificadoSelecionado(null)}
      />

    </S.Section>
  );
}