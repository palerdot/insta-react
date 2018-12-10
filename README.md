## Instagram Clone built with ReactJS

Instagram clone created with React/Redux/Redux-persist/. This app persists the data in the browser localstorage using `redux-persist`. If you would like to clear the data for some reason you can clear the localstorage using `localStorage.clear()` and refresh to restore the default data.

![Insta React sample profile](insta-react.png)

## Setting up

This project is bootstrapped with `create-react-app`. Please make sure you have **latest node** (preferable 6+)

## Features
- View posts
- Add Likes to Posts
- Add comment to Posts
- Delete Posts
- Add new posts (by selecting predefined image, since this is a frontend only app which cannot persist uploaded image)

## Running the app and folder structure

```javascript
// install dependencies
yarn install
// start the dev server
yarn start
// you can also make a production build and run the stuff inside the build folder

// zip folder - insta-react-app.tar.gz
// folder structure
-- src/
   -- components/
      -- container/ // redux related
      -- presentation/ // just view related
    -- data/ // static data
    -- utils/ // util to show notificatoin
    -- actions/ // redux actions
    -- reducers/ // redux reducers
-- screens/
    // has mock screens
```

