import { useState } from 'react'
import { Frame } from './Frame'

/** One large screenshot (opens full size when clicked) with thumbnails to switch. */
export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0)
  return (
    <div className="shot">
      <a className="shot-main" href={images[current]} target="_blank" rel="noreferrer" aria-label={`Open ${title} screenshot full size`}>
        <Frame key={images[current]} src={images[current]} alt={`${title}, screenshot ${current + 1}`} label="SCREENSHOT GOES HERE" />
      </a>
      {images.length > 1 && (
        <div className="thumbs">
          {images.map((src, i) => (
            <button type="button" key={src} aria-pressed={i === current} aria-label={`Show screenshot ${i + 1}`} onClick={() => setCurrent(i)}>
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
