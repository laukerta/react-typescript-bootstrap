### Getting Started

This is a independent subproject for writing/executing E2E-tests for the web application. This means
it shares no dependencies with the web application. Instead it uses its own dependencies, tools,
defines its own typescript compiler configuration and eslint rule set. The source code is transpiled
to NodeJS modules and aren't bundled to a single javascript file as with the case of the source code
within the web application. To install the needed dependencies and tools run the following command
in this (`<workspace_root>/e2e/`) directory:

`npm install`

**Note: all commands must be executed within this direcotry (`<workspace_root>/e2e/`)**

### Run End-To-End Tests (see https://webdriver.io/)

The E2E tests must be defined within the `/specs/` sub-folder. Each test file shall be accompanied
by a page object, following the filename pattern: `<name>.po.ts` (note: _Consult the web to learn
more about the purpose of page objects_).

Make sure that the web application is running before executing the E2E tests. Execute the follwing
command within the `<workspace_root>`:

`npm start`

After starting the web application run the E2E tests via:

`npx wdio`
