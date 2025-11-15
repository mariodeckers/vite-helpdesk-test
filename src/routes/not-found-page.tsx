import { Link } from "react-router"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-8">
      <div className="space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-muted-foreground text-6xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md">
            Sorry, we couldn't find the page you're looking for. The page might
            have been moved, deleted, or you may have entered an incorrect URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="focus-visible:ring-ring ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Go Home
          </Link>

          <div className="text-muted-foreground flex items-center justify-center space-x-4 text-sm">
            <Link to="/kb" className="hover:text-foreground transition-colors">
              Knowledge Base
            </Link>
            <span>•</span>
            <Link
              to="/tickets"
              className="hover:text-foreground transition-colors"
            >
              Tickets
            </Link>
            <span>•</span>
            <Link
              to="/chat"
              className="hover:text-foreground transition-colors"
            >
              Chat
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
