import { useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState(document.documentElement.dataset.theme === 'dark')
  const toggle = () => {
    const theme = dark ? 'light' : 'dark'
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* storage blocked */ }
    setDark(!dark)
  }
  return (
    <button type="button" className="toggle" onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {dark ? '☀' : '☾'}
    </button>
  )
}
