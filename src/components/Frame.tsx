import { useState } from 'react'

/** Shows the image, or a neat placeholder if the file is not there yet. */
export function Frame({ src, alt, label, lazy = true }: { src: string; alt: string; label: string; lazy?: boolean }) {
  const [missing, setMissing] = useState(false)
  if (missing) return <div className="placeholder">{label}</div>
  return <img src={src} alt={alt} loading={lazy ? 'lazy' : 'eager'} onError={() => setMissing(true)} />
}
