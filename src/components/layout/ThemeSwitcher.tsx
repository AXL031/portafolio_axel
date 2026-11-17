'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Check, Monitor, Moon, Sun } from 'lucide-react'
import { applyThemePreference, THEME_STORAGE_KEY, type ThemePreference } from '@/lib/theme'

const options = [
  { value: 'light', label: 'Claro', icon: Sun },
  { value: 'dark', label: 'Oscuro', icon: Moon },
  { value: 'system', label: 'Sistema', icon: Monitor },
] as const

function getPreference(): ThemePreference {
  const theme = document.documentElement.getAttribute('data-theme')
  return theme === 'light' || theme === 'dark' ? theme : 'system'
}

function getServerPreference(): ThemePreference {
  return 'system'
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

  const syncStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY && event.key !== null) return
    const theme = event.newValue
    applyThemePreference(theme === 'light' || theme === 'dark' ? theme : 'system')
  }
  window.addEventListener('storage', syncStorage)

  return () => {
    observer.disconnect()
    window.removeEventListener('storage', syncStorage)
  }
}

export function ThemeSwitcher() {
  const preference = useSyncExternalStore(subscribe, getPreference, getServerPreference)
  const [open, setOpen] = useState(false)
  const container = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const selected = options.find(option => option.value === preference)!
  const Icon = selected.icon

  useEffect(() => {
    if (!open) return

    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !container.current?.contains(event.target)) setOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        trigger.current?.focus()
      }
    }
    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  function selectTheme(theme: ThemePreference) {
    applyThemePreference(theme)
    try {
      if (theme === 'system') localStorage.removeItem(THEME_STORAGE_KEY)
      else localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // The selected theme still works for this page if storage is blocked.
    }
    setOpen(false)
    trigger.current?.focus()
  }

  return (
    <div className="theme-switcher" ref={container} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
    }}>
      <button
        ref={trigger}
        className="theme-toggle"
        type="button"
        aria-label={`Elegir tema. Actual: ${selected.label}`}
        aria-expanded={open}
        aria-controls="theme-options"
        title={`Tema: ${selected.label}`}
        onClick={() => setOpen(!open)}
      >
        <Icon size={18} aria-hidden="true" />
      </button>
      <div id="theme-options" className="theme-options" role="group" aria-label="Apariencia" hidden={!open}>
        <p className="eyebrow">Apariencia</p>
        {options.map(({ value, label, icon: OptionIcon }) => (
          <button key={value} type="button" aria-pressed={preference === value} onClick={() => selectTheme(value)}>
            <OptionIcon size={16} aria-hidden="true" />
            <span>{label}</span>
            {preference === value && <Check size={15} aria-hidden="true" />}
          </button>
        ))}
      </div>
    </div>
  )
}
