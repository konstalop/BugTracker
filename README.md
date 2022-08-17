# BugTracker

BugTracker is a project management / bugtracking tool made with React frontend and Node/Express in the backend with MongoDB as database. Sensitive user information is securely hashed with salting. JWT tokens are used to authorize users.

## Live demo of the project

https://mern-bugtracker.herokuapp.com/

## Requirements

- [Node](https://nodejs.org/en/) (Made with node 16.13.2)
- [Git](https://git-scm.com/)


## How to install

BugTracker can be installed with git clone:

```
git clone https://github.com/konstalop/BugTracker
```

After cloning this repository, you need to install all of the dependencies: 

##### :heavy_exclamation_mark: You need to run this command in the root of the project and in the root of the client folder. :heavy_exclamation_mark:
```
npm install
```

After you have installed all of the dependencies create an .env file containing the following

```
PORT=5000
MONGODB_URI= PASTE YOUR OWN DB_URL HERE
ACCESS_TOKEN_SECRET= PASTE YOUR OWN ACCESS_TOKEN_SECRET HERE
```

After you have an .env file, run the following command:
```
npm run dev
```

Now BugTracker should be running at http://localhost:3000

## Testing
E2E Testing is done using [Cypress](https://www.cypress.io/)

Navigate to `/client/` folder

Install cypress with
 ```
 npm install cypress --save-dev
 ```

Running tests with cypress browser
```
npx cypress open
``` 
Running tests in terminal
```
npm run cypress
```

## Features
- Login / register users
- User authentication / authorization
- Create projects
- Create tickets in the projects
- Tickets are able to contain the following information:
  - Title
  - Description
  - Time estimate
  - Type
    - Issue, Feature, Suggestion
  - Priority
    - Low, Medium, High, Critical
  - Status
    - Open, Working, Closed
  - Author
  - Date
- (Teams)
  

## TODO:

#### For application
- Teams
- Commenting tickets
- Analytics of tickets (graphs of data etc.)
- Roles (Developer, Admin, Manager)


## License

This application uses [The MIT License](https://opensource.org/licenses/MIT).


 
