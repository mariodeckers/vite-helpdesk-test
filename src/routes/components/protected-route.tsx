// Route protection components for React Router

import { Role, useCurrentUser, useHasRole } from "@/hooks/useAuth"
import { ReactNode } from "react"
import { Navigate } from "react-router"

interface ProtectedRouteProps {
  children: ReactNode
  requiredRole?: Role
  fallback?: ReactNode
  redirectTo?: string
}

/**
 * Protects routes based on authentication and role
 */
export function ProtectedRoute({
  children,
  requiredRole,
  fallback,
  redirectTo = "/",
}: ProtectedRouteProps) {
  const user = useCurrentUser()
  const hasRequiredRole = useHasRole(requiredRole || "user")

  // Show loading state while checking authentication
  if (user === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  // Not authenticated
  if (!user) {
    return fallback ? <>{fallback}</> : <Navigate to={redirectTo} replace />
  }

  // Authenticated but doesn't have required role
  if (requiredRole && !hasRequiredRole) {
    return fallback ? <>{fallback}</> : <Navigate to="/unauthorized" replace /> // TODO: change to /not-found
  }

  // Has required role
  return <>{children}</>
}

interface RoleGateProps {
  children: ReactNode
  requiredRole: Role
  fallback?: ReactNode
}

/**
 * Conditionally renders content based on user role
 * Use this for hiding/showing UI elements within a page
 */
export function RoleGate({ children, requiredRole, fallback }: RoleGateProps) {
  const hasRequiredRole = useHasRole(requiredRole)

  if (!hasRequiredRole) {
    return fallback ? <>{fallback}</> : null
  }

  return <>{children}</>
}
