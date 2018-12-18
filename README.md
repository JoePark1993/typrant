# Typrant

This is a typing game where interactivity is inherent to the user experience. Many typing softwares add interactivity as an after thought. Here typing is the core of pvp interaction. Players will roam a map looking to collide with other players. After a collision a typing battle will be initiated. Winners will move up the score board and losers will fade away.

The goal for this project is to provide a typing software that is actually effective for teaching kids how to type. Most people who type 80+ wpm on a 10fastfingers typing test learned to typing through alternative means: star craft, instant messaging, school essays. 

Strategy:
1. Provide a competitive platform for pvp interaction
2. Create a single player mode that teaches typing best practices 
3. Track progression through playable achievements (skins) 

The hope is that through competition kids will be more inclined to learn. Also awarding achievements that are playable and other people interact with will increase their value.

## Running the Code

First use `npm install` to download dependencies from package.json. Then run `node server.js`.

## Dependencies

This project is based in javascript, and we are using npm to manage packages. The project dependencies are:
1. socket.io
2. express
3. phaser3

## Structure

Currently all the game logic is in `public/js/game.js` and all the server logic is in `server.js`. We hope to change this and properly manage all the scenes in different folders. All game assets are in the `public/assets/` folder. 

## Contributing

We will be populating the Issues and Projects board soon! We hope to make it as easy as possible to contribute to this project. 

We also have a small growing group of alpha testers. Alpha play tester will be alerted when the game will be up on the web at: https://cs141-kaikaikoala.c9users.io/ . Please email kaishinpk@gmail.com if you would like to be added to the group. Currently we host the game on a temporary aws c9 server for 30 minute play tests. 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
