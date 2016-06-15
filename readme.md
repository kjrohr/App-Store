## Synopsis
This is a simple restful api demonstration, using dummy data. Basic CRUD example works with users and apps!

## All apps: App1 - /api/apps
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
},
{
id: 4,
name: "RAGE",
code: "id",
createdAt: "2016-06-09T22:07:37.000Z",
updatedAt: "2016-06-09T22:07:37.000Z"
},
{
id: 5,
name: "Skyrim",
code: "beth",
createdAt: "2016-06-09T22:07:49.000Z",
updatedAt: "2016-06-09T22:07:49.000Z"
}
]
```

## App by ID - /api/apps/1
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

## All Users - /api/users
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
 {
 id: 6,
 name: "Patrick Kinney",
 age: 25,
 hobby: "Gaming",
 createdAt: "2016-06-09T02:42:28.000Z",
 updatedAt: "2016-06-09T02:42:28.000Z"
 },
 {
 id: 10,
 name: "Chris Chapman",
 age: 29,
 hobby: "Paint ball",
 createdAt: "2016-06-09T21:30:08.000Z",
 updatedAt: "2016-06-09T21:30:08.000Z"
 }
]
```

## User by ID example: Lindsay Hampton - /api/users/3
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
# Development Portion

## Dev Dependencies
npm install chai dotenv mocha eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react expect supertest

## DEBUGGING

### Turn on DEBUGGING
When starting the development server use DEBUG=true nodemon src/server.js

### Without DEBUGGING
nodemon src/server.js

## Mocha Usage
In terminal type in mocha or mocha filepath for the test you want to run.
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
