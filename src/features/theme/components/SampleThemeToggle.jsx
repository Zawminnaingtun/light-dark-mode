import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { Button } from "../../../components/ui/button"

export function SimpleThemeToggle() {
  const { setTheme, theme } = useTheme()

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-[1.2rem] w-[1.2rem]" />
      case "dark":
        return <Moon className="h-[1.2rem] w-[1.2rem]" />
      case "system":
        return <Monitor className="h-[1.2rem] w-[1.2rem]" />
      default:
        return <Sun className="h-[1.2rem] w-[1.2rem]" />
    }
  }

  return (
    <Button variant="outline" size="icon" onClick={handleThemeChange} className="relative bg-transparent">
      {getIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
