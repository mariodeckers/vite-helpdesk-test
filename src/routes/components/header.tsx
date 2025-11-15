import { cn } from "@/lib/utils"
import { Link } from "react-router"

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary text-xl font-bold transition-colors"
            >
              HelpDesk
            </Link>
            <nav className="hidden items-center space-x-4 md:flex">
              <NavLink to="/kb">Knowledge Base</NavLink>
              <NavLink to="/tickets">Tickets</NavLink>
              <NavLink to="/chat">Chat</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button - placeholder for future implementation */}
            <button className="text-muted-foreground hover:text-foreground">
              Menu
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={cn(
        "hover:text-primary text-sm font-medium transition-colors",
        "text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </Link>
  )
}
