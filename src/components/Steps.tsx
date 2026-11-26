import { useEffect, useState } from 'react'
import { useInView } from './useInView'

export function Steps({ steps }: { steps: { title: string; question: string }[] }) {
  const [ref, seen] = useInView<HTMLOListElement>(0.35)
  const [active, setActive] = useState(-1)
  useEffect(() => {
    if (!seen || active >= steps.length - 1) return
    const t = setTimeout(() => setActive(a => a + 1), 700)
    return () => clearTimeout(t)
  }, [seen, active, steps.length])
  return (
    <ol className="steps" ref={ref}>
      {steps.map((s, i) => (
        <li key={s.title} className={i <= active ? 'lit' : ''}>
          <span className="num">0{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.question}</p>
          {i < steps.length - 1 && <span className={`arrow ${i === active ? 'moving' : ''}`} aria-hidden="true">→</span>}
        </li>
      ))}
    </ol>
  )
}
