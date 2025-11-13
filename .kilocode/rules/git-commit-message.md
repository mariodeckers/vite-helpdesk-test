# Git Commit Message Naming Rules

When asked to suggest a name for a Git commit message, follow below guidelines.

## Commit Message Format
Use the Conventional Commits specification format:
```
<type>(<scope>): <subject>
```

## Type Categories

### Main Types
- **feat**: New feature or functionality
- **fix**: Bug fix or correction
- **docs**: Documentation changes only
- **style**: Code style changes (formatting, missing semi-colons, etc.)
- **refactor**: Code changes that don't fix bugs or add features
- **perf**: Performance improvements
- **test**: Adding or modifying tests
- **chore**: Maintenance tasks, build changes, auxiliary tool updates

### Additional Types
- **build**: Build system or external dependencies changes
- **ci**: CI/CD configuration changes
- **revert**: Reverting a previous commit
- **merge**: Merging branches (when needed for clarity)

## Scope Guidelines
- Use scope to indicate the affected component or module
- Examples: `(api)`, `(auth)`, `(ui)`, `(database)`, `(worker)`, `(config)`
- Omit scope when changes affect the entire project or scope is unclear
- Use `*` or omit parentheses when the change is global

## Subject Line Rules
- Use imperative mood: "Add" not "Added", "Fix" not "Fixed"
- Start with lowercase letter (after the type)
- Keep under 72 characters
- Be specific and descriptive
- Avoid ending with a period

## Examples
- `feat(auth): add user login functionality`
- `fix(api): resolve null pointer in user service`
- `docs(readme): update installation instructions`
- `refactor(worker): optimize database query performance`
- `test(api): add unit tests for user validation`
- `chore(deps): update dependencies to latest versions`

## Additional Guidelines
- Focus on the change, not the implementation details
- Avoid vague terms like "update" or "change"
- When in doubt, use the most specific type that applies
- Use consistent terminology across commits