import { Button } from "@/components/ui/button"
import { useAuthActions } from "@convex-dev/auth/react"
import { useConvexAuth } from "convex/react"

export default function SignOutButton() {
  const { isAuthenticated } = useConvexAuth()
  const { signOut } = useAuthActions()
  return (
    <>
      {isAuthenticated && (
        <Button onClick={() => void signOut()}>Sign out</Button>
      )}
    </>
  )
}
