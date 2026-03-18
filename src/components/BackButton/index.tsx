import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(-1)}>
      <span>←</span>
      Voltar
    </Container>
  );
}