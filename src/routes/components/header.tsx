import { Button } from "@/components/ui/button"
import { useCurrentUser } from "@/hooks/useAuth"
import { cn } from "@/lib/utils"
import { useAuthActions } from "@convex-dev/auth/react"
import { Authenticated, Unauthenticated } from "convex/react"
import { Link, useNavigate } from "react-router"

export default function Header() {
  const { signOut } = useAuthActions()
  const navigate = useNavigate()
  const user = useCurrentUser()

  const getInitials = (user: any) => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
    }
    if (user?.email) {
      return user.email[0].toUpperCase()
    }
    return "U"
  }

  const getDisplayName = (user: any) => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`
    }
    return user?.email || "User"
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      void navigate("/")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  return (
    <header className="bg-background sticky top-0 z-50 border-b">
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

          <div className="flex items-center space-x-4">
            <Authenticated>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  {user?.profilePictureUrl ? (
                    <img
                      src={user.profilePictureUrl}
                      alt="Profile"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
                      <span className="text-primary-foreground text-sm font-medium">
                        {getInitials(user)}
                      </span>
                    </div>
                  )}
                  <span className="text-muted-foreground hidden text-sm sm:inline">
                    Welcome, {getDisplayName(user)}!
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => void handleSignOut()}
                >
                  Sign Out
                </Button>
              </div>
            </Authenticated>
            <Unauthenticated>
              <Button
                variant="default"
                size="sm"
                onClick={() => void navigate("/login")}
              >
                Login
              </Button>
            </Unauthenticated>

            <div className="md:hidden">
              {/* Mobile menu button - placeholder for future implementation */}
              <button className="text-muted-foreground hover:text-foreground">
                Menu
              </button>
            </div>
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
