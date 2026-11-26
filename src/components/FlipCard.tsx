import { useState } from 'react'

type Props = { index: number; title: string; color: string; tools: string[] }

export function FlipCard({ index, title, color, tools }: Props) {
  const [flipped, setFlipped] = useState(false)
  return (
    <button type="button" className={`flip ${flipped ? 'flipped' : ''}`} aria-pressed={flipped}
      aria-label={flipped ? `${title}: ${tools.join(', ')}` : `${title}, show tools`}
      onClick={() => setFlipped(!flipped)}>
      <span className="flip-inner">
        <span className={`face front ${color}`}>
          <span className="num">0{index + 1}</span>
          <span className="flip-title">{title}</span>
          <span className="hand">flip me →</span>
        </span>
        <span className="face back">
          <span className="chips">{tools.map(t => <span key={t} className="chip">{t}</span>)}</span>
        </span>
      </span>
    </button>
  )
}
