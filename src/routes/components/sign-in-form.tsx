import { Button } from "@/components/ui/button"
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
      <p>Log in to see the numbers</p>
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
        <Button type="submit">
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
        {error && (
          <div className="rounded-md border-2 border-red-500/50 bg-red-500/20 p-2">
            <p className="text-dark dark:text-light font-mono text-xs">
              Error signing in: {error}
            </p>
          </div>
        )}
      </form>
    </div>
  )
}
