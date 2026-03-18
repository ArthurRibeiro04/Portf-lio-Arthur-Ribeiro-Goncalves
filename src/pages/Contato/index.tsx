import BackButton from "../../components/BackButton";
import {
  Container,
  Content,
  Title,
  ContactItem,
  Icon,
  Info,
  TopStripe,
  StripeImage,
  BottomStripe,
} from "./styles";

import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";


export default function Contato() {
  return (
    <Container>
      <BackButton/>

      <TopStripe>
        <StripeImage src="/public/contact-1.jpg" />
        <StripeImage src="/public/contact-2.jpg" />
        <StripeImage src="/public/contact-3.jpg" />
        <StripeImage src="/public/contact-left.jpg" />
        <StripeImage src="/public/contact-right.jpg" />
        <StripeImage src="/public/contact-1.jpg" />
        <StripeImage src="/public/contact-2.jpg" />
        <StripeImage src="/public/contact-3.jpg" />
        <StripeImage src="/public/contact-left.jpg" />
        <StripeImage src="/public/contact-right.jpg" />
      </TopStripe>

      <BottomStripe>
        <StripeImage src="/public/contact-1.jpg" />
        <StripeImage src="/public/contact-2.jpg" />
        <StripeImage src="/public/contact-3.jpg" />
        <StripeImage src="/public/contact-left.jpg" />
        <StripeImage src="/public/contact-right.jpg" />
        <StripeImage src="/public/contact-1.jpg" />
        <StripeImage src="/public/contact-2.jpg" />
        <StripeImage src="/public/contact-3.jpg" />
        <StripeImage src="/public/contact-left.jpg" />
        <StripeImage src="/public/contact-right.jpg" />
      </BottomStripe>

      <Content>
        <Title>Fala comigo 👇</Title>

        <ContactItem href="https://wa.me/5548999184091?text=Fala,%20vim%20pelo%20seu%20site!">
          <Icon>
            <FaPhone />
          </Icon>
          <Info>(48) 99918-4091</Info>
        </ContactItem>

        <ContactItem href="#">
          <Icon>
            <FaEnvelope />
          </Icon>
          <Info>ribeirogon.arthur@gmail.com</Info>
        </ContactItem>

        <ContactItem href="https://www.linkedin.com/in/arthur-ribeiro-gon%C3%A7alves/">
          <Icon>
            <FaLinkedin />
          </Icon>
          <Info>LinkedIn</Info>
        </ContactItem>

        <ContactItem href="https://github.com/ArthurRibeiro04">
          <Icon>
            <FaGithub />
          </Icon>
          <Info>GitHub</Info>
        </ContactItem>
      </Content>
    </Container>
  );
}