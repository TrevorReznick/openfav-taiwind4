import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<'theme-light' | 'dark'>('dark')

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setThemeState(isDarkMode ? 'dark' : 'theme-light')
  }, [])

  React.useEffect(() => {
    document.documentElement.classList[theme === 'dark' ? 'add' : 'remove'](
      'dark'
    )
  }, [theme])

  return (
    <Toggle
      aria-label="Toggle dark mode"
      onClick={() => setThemeState(theme === 'dark' ? 'theme-light' : 'dark')}
    >
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    </Toggle>
  )
}
