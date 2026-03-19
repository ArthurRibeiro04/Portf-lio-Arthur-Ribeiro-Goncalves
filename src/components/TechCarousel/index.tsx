import { CarouselContainer, Track, Card } from "./styles"
import { motion} from "framer-motion"

const tecnologias = [
  { nome: "HTML", img: "/tecnologias/html.png" },
  { nome: "CSS", img: "/tecnologias/css.png" },
  { nome: "JavaScript", img: "/tecnologias/js.png" },
  { nome: "Java", img: "/tecnologias/java.png" },
  { nome: "React", img: "/tecnologias/react.svg" },
  { nome: "Node", img: "/tecnologias/node.svg" },
  { nome: "Python", img: "/tecnologias/python.png" },
  { nome: "NestJS", img: "/tecnologias/nest.svg" },
  { nome: "Flask", img: "/tecnologias/flask.svg" },
  { nome: "Prisma", img: "/tecnologias/prisma.png" },
  { nome: "PostgreSQL", img: "/tecnologias/postgres.png" },
  { nome: "Django", img: "/tecnologias/django.png" },
  { nome: "Docker", img: "/tecnologias/docker.png" }
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