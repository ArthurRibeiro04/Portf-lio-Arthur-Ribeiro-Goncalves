import { Section, Title, Timeline } from "./styles"
import { experiencias } from "./data"
import { TimelineItem } from "./TimelineItem"

export function ExperienciaTimeline() {
  return (
    <Section id="experiencia">

      <Title>Experiência Profissional</Title>

      <Timeline>
        {experiencias.map((exp, index) => (
          <TimelineItem
            key={index}
            {...exp}
            side={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </Timeline>

    </Section>
  )
}