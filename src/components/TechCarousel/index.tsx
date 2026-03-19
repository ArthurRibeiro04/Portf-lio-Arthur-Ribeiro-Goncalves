import { CarouselContainer, Track, Card } from "./styles"
import { motion} from "framer-motion"

const tecnologias = [
  { nome: "HTML", img: "/public/tecnologias/html.png" },
  { nome: "CSS", img: "/public/tecnologias/css.png" },
  { nome: "JavaScript", img: "/public/tecnologias/js.png" },
  { nome: "Java", img: "/public/tecnologias/java.png" },
  { nome: "React", img: "/public/tecnologias/react.svg" },
  { nome: "Node", img: "/public/tecnologias/node.svg" },
  { nome: "Python", img: "/public/tecnologias/python.png" },
  { nome: "NestJS", img: "/public/tecnologias/nest.svg" },
  { nome: "Flask", img: "/public/tecnologias/flask.svg" },
  { nome: "Prisma", img: "/public/tecnologias/prisma.png" },
  { nome: "PostgreSQL", img: "/public/tecnologias/postgres.png" },
  { nome: "Django", img: "/public/tecnologias/django.png" },
  { nome: "Docker", img: "/public/tecnologias/docker.png" }
]


export default function TechCarousel() {

  const loopTech = [...tecnologias, ...tecnologias]

  return (
    <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.2 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    >
    <CarouselContainer>
        <Track>
        {loopTech.map((tech, index) => (
            <Card key={index}>
            <img src={tech.img} alt={tech.nome} />
            </Card>
        ))}
        </Track>
    </CarouselContainer>
    </motion.div>
  )
}