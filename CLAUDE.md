# QA Automation AI Agent Guidelines

## Tech Stack
- Playwright with TypeScript
- Test Runners: UI Tests (`tests/ui`), API Tests (`tests/api`)

## Testing Rules
1. Use Page Object Model (POM) pattern for UI tests where applicable.
2. Store environment base URLs in config.
3. Write clean TypeScript with strict typing.
4. Ensure tests run headlessly in CI pipeline (GitHub Actions).

## Targets
- UI Site: https://www.saucedemo.com
- API Base: https://restful-booker.herokuapp.com