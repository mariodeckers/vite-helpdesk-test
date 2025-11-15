import { authTables } from "@convex-dev/auth/server"
import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
// The schema provides more precise TypeScript types.
export default defineSchema({
  ...authTables,

  users: defineTable({
    email: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    profilePictureUrl: v.optional(v.string()),
    role: v.optional(
      v.union(v.literal("user"), v.literal("agent"), v.literal("admin")),
    ),
    updatedAt: v.optional(v.number()),
  }).index("by_email", ["email"]),

  numbers: defineTable({
    value: v.number(),
  }),
})
