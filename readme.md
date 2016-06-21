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
