# RiskFirst Task

RiskFirst React &amp; Redux Task

### Used Tech Stack:

- React
- Redux
- redux-thunk
- react-router
- typescript
- styled-components

### Functionality

There is a loading state and error handling implemented.
Each business has it's own URL (example: `/details/2`) which can be accessed directly and it will load the needed information.

If the `id` doesn't exist (example: `/details/1000`) there is a page not found error handling which will navigate you to an error page with information.

### About the businesses images

The service that is used for the images is responding relatively slow so I ended up adding a library that handles slow loads as it loads a local placeholder image on the same place that we are expecting to receive the network image. So initially we see the placeholder in the moment that the image is loaded from the 3th party provider (~2secs) it will replace the placeholder image.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
