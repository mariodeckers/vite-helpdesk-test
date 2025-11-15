import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SignOutButton } from "@/routes"
import { RoleGate } from "@/routes/components/protected-route"
import { Authenticated, Unauthenticated } from "convex/react"
import { Link } from "react-router"

export default function HomePage() {
  return (
    <div className="flex items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome to Helpdesk</CardTitle>
          <CardDescription>
            Your centralized support system for managing tickets and customer
            interactions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Authenticated>
            <HomePageContent />
          </Authenticated>
          <Unauthenticated>
            <WelcomeContent />
          </Unauthenticated>
        </CardContent>
      </Card>
    </div>
  )
}

function WelcomeContent() {
  return (
    <div className="text-center">
      <p className="text-muted-foreground mb-4">
        Sign in to access your dashboard and manage support tickets.
      </p>
      <Button asChild className="w-full">
        <Link to="/login">Sign In</Link>
      </Button>
    </div>
  )
}

function HomePageContent() {
  return (
    <div className="space-y-4 text-center">
      <p className="text-muted-foreground">
        You're signed in! Explore the helpdesk features.
      </p>
      <div className="flex flex-col gap-2">
        <Button asChild variant="outline">
          <Link to="/tickets">View Tickets</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/kb">Knowledge Base</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/chat">Chat Support</Link>
        </Button>
        <RoleGate requiredRole="agent">
          <Button asChild variant="outline">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </RoleGate>
      </div>
      <SignOutButton />
    </div>
  )
}
