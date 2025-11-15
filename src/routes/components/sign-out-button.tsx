import { useAuthActions } from "@convex-dev/auth/react"
import { useConvexAuth } from "convex/react"

export default function SignOutButton() {
  const { isAuthenticated } = useConvexAuth()
  const { signOut } = useAuthActions()
  return (
    <>
      {isAuthenticated && (
        <button
          className="text-primary-foreground bg-primary rounded-md px-2 py-1"
          onClick={() => void signOut()}
        >
          Sign out
        </button>
      )}
    </>
  )
}
