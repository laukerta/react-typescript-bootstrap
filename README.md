### Getting Started

Install all dependencies and tools (e.g. eslint or prettier) via `npm install`

### Run ESLint (see https://eslint.org/)

You can check the validity of your source files by the ESLint rules defined in `.eslintrc.js` via:

`npx eslint . --ext ts,tsx`

Files/Folders/Patterns which shall be ignored by eslint must be specified in `.eslintignore`

### Run Prettier (see https://prettier.io/)

You can check the format of your source files by the configuration defined in `.editorconfig` and
`.prettierrc` via:

`npx prettier --check **/*`

Files/Folders/Patterns which shall be ignored by prettier must be specified in `.prettierignore`

### Run End-To-End Tests

See [e2e/README.md](e2e/README.md) for instructions on how to run E2E-Test

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open [http://localhost:3000](http://localhost:3000) to
view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors in the console.

### `npm test` (or `npm test -- --coverage` for additional report)

Launches the test runner in the interactive watch mode.<br /> See the section about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles React in production
mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.
This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel,
ESLint, etc) right into your project so you have full control over them. All of the commands except
`eject` will still work, but they will point to the copied scripts so you can tweak them. At this
point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle
deployments, and you shouldn’t feel obligated to use this feature. However we understand that this
tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
