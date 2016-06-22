## Synopsis
This is a simple restful api demonstration, using dummy data. Basic CRUD example works with users and apps!

# Development

## Dev Dependencies
npm install chai dotenv mocha eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react expect supertest

## DEBUGGING

### Turn on DEBUGGING
When starting the development server use DEBUG=true nodemon src/server.js

### Without DEBUGGING
nodemon src/server.js

## Mocha Usage
In terminal type in mocha or mocha file path for the test you want to run.
If everything is working perfectly it shall output...

  API

    ✓ /api/users/id should return a user object with Lindsay (53ms)

  Apps

    ✓ Should be able to read all apps.
    ✓ Should be able to read one app
    ✓ Should be able to create an app.
    ✓ Should be able to update an app.
    ✓ Should be able to delete an app.

  Users

    ✓ Should be able to read all.
    ✓ Should be able to read one
    ✓ Should be able to create.
    ✓ Should be able to update.
    ✓ Should be able to delete.

If a unit test fails it will display what broke and where.

## Workflow

Below is a list of steps in order that I do for my workflow after I'm ready to do a commit and a push.

### 1. Check Your Status
In the command line, type in git status. This tells us what is in the staging area, what isn't in the staging area and what has been changed.

### 2. Add Your Files
In the command line, type in git add -A OR git add fileName OR git add directoryName. These will add what you need into the staging area and ready for a commit.

### 3. Commit Your Staged Files
In the command line, type in git commit -m "Message goes here" this will create a commit id for the work that you've just committed.

### 4. Push Your Feature Branch
In the command line, type in git push github branchName. 'github' is an alias used for my remotes and 'branchName' is a generalization for whatever branch you may be working on.

### 5. Rebase Your Master Into Your Feature Branch
In the command line, type in git rebase master. This will put in reorder chronologically the commits from the master into the feature branch.

### 6. Go To Your Release Branch
In the command line, type in git checkout release. This will switch you from the feature branch you were working on to the release.

### 7. Merger Your Feature Branch Into Your Release
In the command line, type in git merge featureBranch. This will put all the rebased code into the proper branch for codeship, and heroku.

### 8. Tag Your Release
In the command line, type git tag -a vx.x. Replace the x's with the appropriate numbers for your project.

### 9. Push Your Code
In the command line, type git push github release. 'github' is an alias for my remote, and 'release' is my release branch. This will push your code to your remote repo.

### 10. Push Your Tag
In the command line, type git push github release --tag.
'github' is an alias for my remote, 'release' is my release branch. This will push your code with a tagged release to your remote repo.


# ENDPOINTS
## GET - All apps: App1 - /api/apps
``` javascript
[
  {
      id: 1,
      name: "Doom",
      code: "id",
      createdAt: "2016-06-09T22:06:01.000Z",
      updatedAt: "2016-06-09T22:06:01.000Z"
    },
    {
      id: 2,
      name: "Starcraft 2",
      code: "blizz",
      createdAt: "2016-06-09T22:06:12.000Z",
      updatedAt: "2016-06-09T22:06:12.000Z"
    }
...
]
```

## GET - App by ID - /api/apps/1
### Replace the number 1 with the id of the app you wish to look up.
``` javascript

{
  id: 1,
  name: "Doom",
  code: "id",
  createdAt: "2016-06-09T22:06:01.000Z",
  updatedAt: "2016-06-09T22:06:01.000Z"
}

```

## PUT - Add an App - /api/apps
### Please use the postman application for this.

``` javascript
{
  "name": "Heroes of the Storm",
  "code": "blizz"
}
```

## PUT - Update an App by id - /api/apps/1
### Please use the postman application for this.

``` javascript
{
  "name": "Doom 4",
  "code": "id"
}
```

## DELETE - Delete an App by id - /api/apps/5
### Please use the postman application for this.

In post man select DELETE from the drop down, and type in the url to the app you would like to delete.

## GET - All Users - /api/users
``` javascript
[
  {
    id: 3,
    name: "Lindsay Hampton",
    age: 22,
    hobby: "Gaming",
    createdAt: "2016-06-09T01:36:20.000Z",
    updatedAt: "2016-06-09T02:26:14.000Z"
  },
  {
    id: 5,
    name: "Karl Rohr",
    age: 25,
    hobby: "Gaming",
    createdAt: "2016-06-09T02:42:10.000Z",
    updatedAt: "2016-06-09T02:42:10.000Z"
 },
...
]
```

## GET - User by ID example: Lindsay Hampton - /api/users/3
### Replace the number 3 with the id of the user you wish to look up.

``` javascript
{
  id: 3,
  name: "Lindsay Hampton",
  age: 22,
  hobby: "Gaming",
  createdAt: "2016-06-09T01:36:20.000Z",
  updatedAt: "2016-06-09T02:26:14.000Z"
}
```

## PUT - Add a User - /api/users
### Please use the postman application for this.

``` javascript
{
  "name": "Trent Reznor",
  "age": 51,
  "hobby" "Creating music"
}
```

## PUT - Update a User - /api/users/3
### Please use the postman application for this.

``` javascript
{
  "name": "Lindsay",
  "age": 22,
  "hobby": "The Witcher"
}
```

## DELETE - Delete a User by id - /api/users/39
### Please use the postman application for this.

In post man select DELETE from the drop down, and type in the url to the user you would like to delete.
