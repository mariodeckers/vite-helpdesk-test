import { SignInForm } from "./index"

export default function LoginPage() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-card-foreground mt-6 text-center text-3xl font-extrabold">
            Sign in to your account
          </h2>
          <p className="text-muted-foreground mt-2 text-center text-sm">
            Access your helpdesk dashboard
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}
