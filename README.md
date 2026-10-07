```markdown
# Dropdown component

A dropdown component written in TypeScript and React with function components.

The content is passed in from outside. The dropdown detects automatically which way to open – down-right, up-right, down-left or up-left – and opens on click or hover towards the side with the most free space next to the trigger.

- A click inside the content does not close the dropdown.
- A click outside or a second click on the trigger closes it.
- Only one dropdown can be open at a time; opening another closes the current one.
- When the trigger scrolls out of the viewport the dropdown hides, and it reappears when the trigger comes back.

## Getting started

You need Node.js and npm installed.

    npm install
    npm start

The app runs at http://localhost:5173/.
```
