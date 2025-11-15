# Component Export Rules

- Each component file should **default export** the component (e.g., `export default TicketList;`).
- Each feature folder (e.g., `/tickets`) should have an `index.ts` that re-exports its components for simpler imports:
  ```tsx
  // src/components/tickets/index.ts
  export { default as TicketList } from "./ticket-list"
  export { default as TicketForm } from "./ticket-form"
  ```
  This lets you import them cleanly:
  ```tsx
  import { TicketList, TicketForm } from "@/components/tickets"
  ```
