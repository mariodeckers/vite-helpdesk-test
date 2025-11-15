# Automatic Tests

The primary goal of these rules is to ensure that proposed tests are valuable, non-redundant, and adhere to the team's standards for behavior-driven testing and accessibility within a Vite/React/TypeScript/Vitest project.

## I. The Approval Mandate (Non-Negotiable)

1. **Mandatory Approval**: The AI agent must not create or modify any test file without first submitting a detailed proposal and receiving explicit user approval.

2. **Required Argumentation**: Every test proposal must include an argument explaining why the test is necessary, referencing the rules below (e.g., "This component test is necessary because it covers a user flow for a critical form submission and cannot be unit-tested effectively").

## II. Test Scope and Type (Preference: Component over Unit)

Tests should focus on the highest level of coverage possible without unnecessary duplication.

- **Unit Test Restriction**: Unit tests (`.test.ts`) are strictly prohibited if a component or integration test can cover the same logic by exercising the UI.

- **Unit Test Focus (Pure Logic Only)**: Only propose unit tests for:
  - **Pure Utility Logic**: Standalone utility functions (e.g., `formatters`, `validators`).
  - **Complex Hooks**: Non-rendering, complex custom hooks (e.g., `useDebounce`, `useLocalStorage`).
  - **External Library Wrappers**: Logic that abstracts or prepares data for third-party libraries.

## III. Naming and Structure (Preference: Behavior-Focused, using `it`)

Tests must describe application behavior from a user's perspective, using the specified naming convention.

- **Behavior Focus**: Test descriptions must focus on the outcome of a user action or system state change, not on internal implementation details (e.g., avoid `calls the private function`).

- **Preferred Syntax**: Use `it()` instead of `test()`, following a clear structure:
  ```javascript
  it(
    "should display the submission success message when the form is valid and submitted",
  )
  ```

## IV. Assertions and Queries (Preference: Accessibility First)

Prioritize accessibility and user experience by using React Testing Library queries that mimic how a user interacts with the page.

- **Query Hierarchy**: The AI agent must prioritize queries in the following order:
  1. `getByRole`
  2. `getByLabelText`
  3. `getByPlaceholderText` or `getByText`

- **Data-Testid Usage**: Reserve the use of `getByTestId` only as a last resort for elements that are purely presentational, not interactive, and cannot be reliably queried using accessibility-focused methods (e.g., container wrappers, charts).

## V. Mocking External Dependencies (Preference: Mock Hooks)

Ensure tests are fast, isolated, and deterministic by effectively mocking custom logic and external resources.

- **Mocking Strategy**: The AI agent must use `vi.mock()` (from Vitest) to isolate custom data-fetching hooks, API service wrappers, or complex context providers.

- **Return Control**: Tests must explicitly control the return value of mocked dependencies to verify component behavior under specific, isolated conditions (e.g., success state, error state, loading state).

## VI. 📂 File Location (Preference: Separate `tests` Folder)

Maintain a consistent and centralized structure for test files.

- **Location**: All test files (`.test.tsx` or `.test.ts`) must be placed within a root-level folder named `tests`, maintaining the same directory structure as the source files they test.
