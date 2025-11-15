# Component Export Rules

- Each component file should **default export** the component (e.g., `export default TicketList;`).
- Each feature folder (e.g., `/tickets`) should have an `index.ts` barrel file which re-exports its components for simpler imports:
  ```tsx
  // src/components/tickets/index.ts
  export { default as TicketList } from "./ticket-list"
  export { default as TicketForm } from "./ticket-form"
  ```
  This lets you import them cleanly:
  ```tsx
  import { TicketList, TicketForm } from "@/components/tickets"
  ```
  Always prefer importing from barrel files over imports from the component files.
