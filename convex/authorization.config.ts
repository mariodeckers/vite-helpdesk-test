// Role hierarchy and authorization utilities

export type Role = "user" | "agent" | "admin"

// Define role hierarchy - higher index = more permissions
const ROLE_HIERARCHY: Role[] = ["user", "agent", "admin"]

// Get the numeric level of a role in the hierarchy
export function getRoleLevel(role: Role): number {
  return ROLE_HIERARCHY.indexOf(role)
}

/**
 * Check if a user's role meets the required role level
 * Returns true if userRole is equal to or higher than requiredRole
 */
export function hasRole(
  userRole: Role | undefined,
  requiredRole: Role,
): boolean {
  if (!userRole) return false
  return getRoleLevel(userRole) >= getRoleLevel(requiredRole)
}

/**
 * Get all roles that a user with the given role has access to
 * (including inherited roles)
 */
export function getInheritedRoles(role: Role): Role[] {
  const level = getRoleLevel(role)
  return ROLE_HIERARCHY.slice(0, level + 1)
}
