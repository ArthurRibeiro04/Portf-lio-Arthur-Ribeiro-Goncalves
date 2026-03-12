import {
  Item,
  Card,
  Dot,
  Empresa,
  Cargo,
  Periodo,
  Descricao
} from "./styles"

interface Props {
  empresa: string
  cargo: string
  periodo: string
  descricao: string
  side: "left" | "right"
}

export function TimelineItem({
  empresa,
  cargo,
  periodo,
  descricao,
  side
}: Props) {
  return (
    <Item
      side={side}
      initial={{ opacity: 0, x: side === "left" ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <Dot side={side} />

      <Card>
        <Empresa>{empresa}</Empresa>
        <Cargo>{cargo}</Cargo>
        <Periodo>{periodo}</Periodo>
        <Descricao>{descricao}</Descricao>
      </Card>
    </Item>
  )
}