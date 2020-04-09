# Welcome to Meteor ToDos
This application was created as an exercise to further explore Meteor, React, and MongoDB.

Meteor ToDos functionality supports collaboration on a single todo list. It includes user log in log out functionality, the ability for a user to add and delete tasks, hide all tasks that have previously been checked off, as well as to create public or private tasks.


## Table of Contents
<!--ts-->
   * [Set Up](#set-up)
   * [Live App](#live-app)
   * [Helpful Terminal Commands](#helpful-terminal-commands)
   * [Helpful Links](#helpful-links)
   * [Tech Stack](#tech-stack)
<!--te-->

## **Set Up**

### Clone repo
```
https://github.com/nathangthomas/meteor-todos
```
### Run Meteor ToDos Locally
- Type `meteor` in your terminal to spin up your server.
- Visit [http://localhost:3000/](http://localhost:3000/) in your browser to interact with the app.
- Run the test suite by first shutting down your current server or specifying a new port with `--port XYZ`.
  You can then run `TEST_WATCH=1 meteor test --driver-package meteortesting:mocha` to run tests.

## Live App
You can also interact with a live version of Meteor ToDos hosted on Heroku [HERE](https://meteor--todos.herokuapp.com).


## Helpful Terminal Commands:
- `meteor create new-app` creates a new Meteor app.
- `meteor create --react new-react-app` creates a new Meteor app using React
- `meteor` runs your local server on localhost:3000
- `meteor remove whatever-you-want-to-remvoe`
- `meteor remove whatever-you-want-to-add`
- `meteor add react-meteor-data` Allows us to create a "data container" to feed Meteor's reactive data into React's component hierarchy
- `meteor mongo` Opens a console into your app's local development database
- `meteor add accounts-ui accounts-password` Adds packages to enable the accounts system and UI
- `TEST_WATCH=1 meteor test --driver-package meteortesting:mocha` Run app in test mode
- `--port XYZ` Specify alternate port

### Running On an iOS Simulator
- `meteor install-sdk ios` Run application inside the IOS simulator
- `meteor add-platform ios` Install Xcode from the App Store
- `sudo xcodebuild -license accept` short cut for ^^
- `meteor run ios`
- `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer` Enable Xcode tools in the terminal environment
- `meteor run ios-device` Opens project in Xcode
- `meteor run ios-device --mobile-server=http://1.1.1.1:3000`
- `meteor add-platform ios` Adds iOS platform to project

## Helpful Links:
- [Meteor Guide](https://guide.meteor.com/)
- [Facebook's React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [React Docs](https://reactjs.org/)
- [JSX](https://reactjs.org/docs/jsx-in-depth.html)
- [React Events](https://reactjs.org/docs/events.html)
- [Meteor's Optimistic UI - Blog Post](https://blog.meteor.com/optimistic-ui-with-meteor-67b5a78c3fcf)

## Tech Stack:
### This app was built with the following:
- [Meteor](https://www.meteor.com/)
- [React](https://reactjs.org/)
- [JavaScript](https://www.javascript.com/)
- [MongoDB](https://www.mongodb.com/)
