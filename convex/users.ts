// User queries for React components

import { query } from "./_generated/server"
import { getCurrentUser } from "./lib/authorization"

/**
 * Get current authenticated user with their role
 * Used by React hooks
 */
export const currentUser = query({
  args: {},
  handler: async (ctx) => {
    return await getCurrentUser(ctx)
  },
})
