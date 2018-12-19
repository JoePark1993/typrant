# Typrant

This is a typing game where interactivity is inherent to the user experience. Many typing softwares add interactivity as an after thought. Here typing is the core of pvp interaction. Players will roam a map looking to collide with other players. After a collision a typing battle will be initiated. Winners will move up the score board and losers will fade away.

The goal for this project is to provide a typing software that is actually effective for teaching kids how to type. Most people who type 80+ wpm on a 10fastfingers typing test learned to typing through alternative means: star craft, instant messaging, school essays. 

Strategy:
1. Provide a competitive platform for pvp interaction
2. Create a single player mode that teaches typing best practices 
3. Track progression through playable achievements (skins) 

The hope is that through competition kids will be more inclined to learn. Also awarding achievements that are playable and other people interact with will increase their value.

## Running the Code

There are 2 different servers you have to run for this project. There is the react server which just servers up the files for viewing, and a second server which handles the actual transfer of data. So to run this project you need to do the following:
1. Run `npm install` in both the root directory of the project, and in the client folder
2. Run `node server.js` in the root directory of the project
3. Run `npm start` in the client folder

## Dependencies

This project is based in javascript, and we are using npm to manage packages. All the project dependencies can be found in the 2 package.json files, but some importand ones are:
1. socket.io
2. express
3. phaser3
4. react
5. react-bootstrap

## Structure

As previously mentioned there are 2 different places where code is being served. This may or may not be changed as we learn more about webpack, and building single page applications (SPA's). However currently, server side code is in the rootdirectory, and the react project is in the client folder. Inside the client folder there is an src/ folder. In src/ is index.js which is the entry point of the project. App.js contains the parent component that everything is in. For gamedevs the game logic is going to be in the Play/ folder. Here there is a game/ folder which contains: assets/ , Scenes/, and Config/. Scenes/ is where all the game logic is going to be.

## Contributing

Please reference this [doc](https://docs.google.com/document/d/1uIKXQbMUMWy3Bdv6m15ez-7zJg3zO6wmDYPQ__8N-Fg/edit?usp=sharing) to get started with contributing. This details  how the kanban board works as well as certain coding conventions we hope to employ to maintain readability. 

