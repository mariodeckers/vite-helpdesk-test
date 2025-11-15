// React hooks for authorization checks

import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"

export type Role = "user" | "agent" | "admin"

const ROLE_HIERARCHY: Role[] = ["user", "agent", "admin"]

function getRoleLevel(role: Role): number {
  return ROLE_HIERARCHY.indexOf(role)
}

function hasRole(userRole: Role | undefined, requiredRole: Role): boolean {
  if (!userRole) return false
  return getRoleLevel(userRole) >= getRoleLevel(requiredRole)
}

/**
 * Hook to get current user with role
 */
export function useCurrentUser() {
  // You'll need to create this query in Convex
  return useQuery(api.users.currentUser)
}

/**
 * Hook to check if user has a specific role
 */
export function useHasRole(requiredRole: Role): boolean {
  const user = useCurrentUser()
  return hasRole(user?.role, requiredRole)
}

/**
 * Hook to check if user is authenticated
 */
export function useIsAuthenticated(): boolean {
  const user = useCurrentUser()
  return user !== null && user !== undefined
}
