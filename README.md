# Address Book

## Run Locally

1. Clone the project

```bash
git clone https://github.com/buraksaraloglu/address-book.git
```

2. Go to the project directory

```bash
cd address-book
```

3. Install dependencies

```
yarn
```

4. Start the server

```
yarn dev
```

5. All Done 🥳

## Demo

Once the build completes, your app is live! Open http://localhost:3000 with your browser to see the result.

Changes to components should hot-reload in the browser.

## Deployment

To deploy run the following command:

```bash
yarn build
```

The build will be placed in the `build` directory.

If you want to deploy to a different directory, you can specify the directory changing the path in the webpack config.

## Scripts

- Start dev server using `yarn dev`.
- Build and bundling your resources for production `yarn build`.
- Deploy it to GitHub pages using `yarn deploy`
- `yarn type-check` validate code using TypeScript compiler.
- `yarn lint` and `yarn format` to run ESLint and Prettier for all files in the `src` directory.
- `yarn commit` run commitizen. Alternative
