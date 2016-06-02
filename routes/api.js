module.exports = function(express){
  var router = express.Router();

  router.get('/', function(req,res){
    res.json({home: 'true'});
  });

  router.get('/app_list', function(req, res){
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

  router.get('/users', function(req, res){
    res.json({users:[
      {name: 'Karl Rohr'},
      {name: 'Lindsay Hampton'},
      {name: 'Patrick Kinney'}
    ]})
  });

  router.get('/App1', function(req,res){
    res.json({appInfo:[
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
     }
    ]})
  });

  router.get('/karl', function(req, res){
    res.json({userInfo:[
      {name: 'Karl Rohr'}
    ]
    })
  });



  return router;
}
