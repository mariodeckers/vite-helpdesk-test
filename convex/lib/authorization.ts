// Authorization helpers for Convex functions

import { getAuthUserId } from "@convex-dev/auth/server"
import { MutationCtx, QueryCtx } from "../_generated/server"
import { hasRole, Role } from "../authorization.config"

/**
 * Get the current user with their role
 */
export async function getCurrentUser(ctx: QueryCtx | MutationCtx) {
  const userId = await getAuthUserId(ctx)
  if (!userId) return null

  // Fetch user from your users table
  const user = await ctx.db.get(userId)
  return user
}

/**
 * Require authentication - throws if user is not authenticated
 */
export async function requireAuth(ctx: QueryCtx | MutationCtx) {
  const user = await getCurrentUser(ctx)
  if (!user) {
    throw new Error("Unauthorized: You must be logged in")
  }
  return user
}

/**
 * Require a specific role - throws if user doesn't have required role
 */
export async function requireRole(
  ctx: QueryCtx | MutationCtx,
  requiredRole: Role,
) {
  const user = await requireAuth(ctx)

  if (!hasRole(user.role, requiredRole)) {
    throw new Error(
      `Unauthorized: This action requires ${requiredRole} role or higher`,
    )
  }

  return user
}

/**
 * Check if current user has a specific role (without throwing)
 */
export async function checkRole(
  ctx: QueryCtx | MutationCtx,
  requiredRole: Role,
): Promise<boolean> {
  const user = await getCurrentUser(ctx)
  return hasRole(user?.role, requiredRole)
}
