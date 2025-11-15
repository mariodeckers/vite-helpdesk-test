import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useAuthActions } from "@convex-dev/auth/react"
import { useState } from "react"
import { useNavigate } from "react-router"

export default function SignInForm() {
  const { signIn } = useAuthActions()
  const navigate = useNavigate()
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    formData.set("flow", flow)

    try {
      await signIn("password", formData)
      await navigate("/tickets")
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred")
    }
  }

  return (
    <div className="mx-auto flex w-96 flex-col gap-8">
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          void handleSubmit(e)
        }}
      >
        <input
          className="bg-light dark:bg-dark text-dark dark:text-light rounded-md border-2 border-slate-200 p-2 dark:border-slate-800"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="bg-light dark:bg-dark text-dark dark:text-light rounded-md border-2 border-slate-200 p-2 dark:border-slate-800"
          type="password"
          name="password"
          placeholder="Password"
        />
        <Button type="submit" className="h-12">
          {flow === "signIn" ? "Sign in" : "Sign up"}
        </Button>
        <div className="flex flex-row gap-2">
          <span>
            {flow === "signIn"
              ? "Don't have an account?"
              : "Already have an account?"}
          </span>
          <span
            className="text-dark dark:text-light cursor-pointer underline hover:no-underline"
            onClick={() => setFlow(flow === "signIn" ? "signUp" : "signIn")}
          >
            {flow === "signIn" ? "Sign up instead" : "Sign in instead"}
          </span>
        </div>
        {/* TODO: Refactor this error handling as Google login always shows an error */}
        {error && (
          <div className="rounded-md border-2 border-red-500/50 bg-red-500/20 p-2">
            <p className="text-dark dark:text-light font-mono text-xs">
              Error signing in: {error}
            </p>
          </div>
        )}
      </form>
      <div className="relative">
        <Separator className="my-2" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-background text-muted-foreground px-4">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <Button
          variant={"outline"}
          className="h-12"
          onClick={() => void signIn("google")}
        >
          <div className="flex gap-4">
            <img src="/google.svg" alt="Google" className="h-5 w-5" />
            <span>Log in with Google</span>
          </div>
        </Button>
      </div>
    </div>
  )
}
