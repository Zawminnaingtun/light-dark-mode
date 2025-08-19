import React from 'react'
import { SimpleThemeToggle } from '../components/SampleThemeToggle'
import ThemeToggle from '../components/ThemeToggle'

const ThemePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Theme Switcher</h1>
          <div className="flex items-center gap-2">
            {/* <SimpleThemeToggle /> */}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="">
        Hello World
      </div>
    </div>
  )
}

export default ThemePage