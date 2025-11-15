# Naming Conventions

## Folders & Files

Folders and File names should ALL be kebab-case. The names of the components, hooks and other function definitions should follow rules of React.

Example:

- Component `TicketList` should have file name `ticket-list.tsx`
- Hook `useAuth` should have file name `use-auth.ts`

## Imports

Use the configured path aliases for non-relative imports.

Example:

```
import { RoutesConfig } from "@/routes"
```
