import { Password } from "@convex-dev/auth/providers/Password"
import { convexAuth } from "@convex-dev/auth/server"

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Password],
  callbacks: {
    // Assign a default user role
    async afterUserCreatedOrUpdated(ctx, args) {
      // Skip if this is an existing user update
      if (args.existingUserId) return

      // For new users, set their default role to "user"
      await ctx.db.patch(args.userId, {
        role: "user",
      })
    },
  },
})
