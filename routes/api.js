// Wrapper that takes in express
module.exports = function(express){
  // Sets router to the Router method of express
  var router = express.Router();

  // Default route api/
  router.get('/', function(req,res){
    res.json({home: 'true'});
  });
// /api/app_list route dummy data
// An object that holds an array of child objects
  router.get('/apps', function(req, res){
    res.json({applist:
      [
        {
          id: '0032c47b-4a7b-4232-9cc3-6af718244ea8',
         title: "App1",
         description: "Description of app1",
         artAssets:
         [
           {title: 'test', srcLink: 'http://www.google.com'},
           {title: 'test2', srcLink: 'http://www.images.google.com'}
         ],
         releaseDate: "2016-06-15T22:29:20.000Z",
         createdAt: "2016-05-15T22:29:20.000Z",
         updatedAt: "2016-05-15T22:29:20.000Z",
         user: {
           id: "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
           name: 'Karl Rohr'
         }
       },
       {
         id: '0032c47b-4a7b-4232-9cc3-6af718244ea7',
        title: "App2",
        description: "Description of app2",
        artAssets:
        [
          {title: 'test', srcLink: 'http://www.google.com'},
          {title: 'test2', srcLink: 'http://www.images.google.com'}
        ],
        releaseDate: "2016-06-15T22:29:20.000Z",
        createdAt: "2016-05-15T22:29:20.000Z",
        updatedAt: "2016-05-15T22:29:20.000Z",
        user: {
          id: "ae25e5a4-73db-4969-9f6c-acf8246b7fab",
          name: 'Lindsay Hampton'
        }
      },
      {
        id: '0032c47b-4a7b-4232-9cc3-6af718244ea6',
       title: "App3",
       description: "Description of app3",
       artAssets:
       [
         {title: 'test', srcLink: 'http://www.google.com'},
         {title: 'test2', srcLink: 'http://www.images.google.com'}
       ],
       releaseDate: "2016-06-15T22:29:20.000Z",
       createdAt: "2016-05-15T22:29:20.000Z",
       updatedAt: "2016-05-15T22:29:20.000Z",
       user: {
         id: "ae25e5a4-73db-4969-9f6c-acf8246b7fac",
         name: 'Patrick Kinney'
       }
     }
      ]});
  });
  // api/users router
  // An object that holds an array of objects that is dummy data
  router.get('/users', function(req, res){
    res.json({users:[
      {name: 'Karl Rohr'},
      {name: 'Lindsay Hampton'},
      {name: 'Patrick Kinney'}
    ]})
  });

 // /api/app/idgoeshere
 // Set up the routes to accept ids but spit out dummy data
  router.get('/apps/:id', function(req,res){
    res.json({
      id: '0032c47b-4a7b-4232-9cc3-6af718244ea7',
     title: "App2",
     description: "Description of app2",
     artAssets:
     [
       {title: 'test', srcLink: 'http://www.google.com'},
       {title: 'test2', srcLink: 'http://www.images.google.com'}
     ],
     releaseDate: "2016-06-15T22:29:20.000Z",
     createdAt: "2016-05-15T22:29:20.000Z",
     updatedAt: "2016-05-15T22:29:20.000Z",
     user: {
       id: "ae25e5a4-73db-4969-9f6c-acf8246b7fab",
       name: 'Lindsay Hampton'
     }
   });

  });
 // /api/users/idgoeshere
 // Set up the route to accept id btu spit out dummy data
  router.get('/users/:id', function(req, res){
    res.json({name: 'Karl Rohr'});
  });


  // returns router
  return router;
}
