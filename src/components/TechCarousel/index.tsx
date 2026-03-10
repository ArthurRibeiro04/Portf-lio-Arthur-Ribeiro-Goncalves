import { CarouselContainer, Track, Card } from "./styles"
import { motion} from "framer-motion"

const tecnologias = [
  { nome: "HTML", img: "/src/assets/html.png" },
  { nome: "CSS", img: "/src/assets/css.png" },
  { nome: "JavaScript", img: "/src/assets/js.png" },
  { nome: "Java", img: "/src/assets/java.png" },
  { nome: "React", img: "/src/assets/react.svg" },
  { nome: "Node", img: "/src/assets/node.svg" },
  { nome: "Python", img: "/src/assets/python.png" },
  { nome: "NestJS", img: "/src/assets/nest.svg" },
  { nome: "Flask", img: "/src/assets/flask.svg" },
  { nome: "Prisma", img: "/src/assets/prisma.png" },
  { nome: "PostgreSQL", img: "/src/assets/postgres.png" },
  { nome: "Django", img: "/src/assets/django.png" },
  { nome: "Docker", img: "/src/assets/docker.png" }
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