var myApp = angular.module('myApp', ['ngRoute']);

myApp.run(function($rootScope){
  $rootScope.$on('$locationChangeStart',function(){
    console.log('change path');
  })
})

myApp.controller('MainCtrl',['$scope', function($scope){

}]);

myApp.factory('PostsFactory',function(){
  var factory={
    posts: [
  {
    "index": 0,
    "name": "occaecat in et exercitation esse",
    "content": "Elit nostrud magna consectetur amet proident eiusmod occaecat. Cillum tempor do in aute minim id nostrud nisi velit incididunt eu. Proident laborum Lorem nulla eu aute eiusmod esse nostrud elit voluptate. Et tempor laborum sint sunt exercitation pariatur. Occaecat magna in dolore ea ex dolore minim ad duis quis fugiat ad ea.",
    "comments": [
      {
        "username": "Charmaine",
        "city": "Vivian",
        "email": "trishaduke@dragbot.com",
        "content": "Occaecat occaecat nulla eiusmod sit culpa nisi amet. Eiusmod incididunt aliqua non sit reprehenderit Lorem aliqua labore sint. Occaecat duis irure irure do in nostrud id dolor qui. Anim sunt culpa in aliquip minim nulla cupidatat et. Occaecat ex exercitation fugiat aute consequat nostrud enim. Ex excepteur est occaecat non amet adipisicing quis nisi ipsum duis proident eiusmod eu. Anim voluptate commodo culpa sint ut voluptate cillum commodo anim consequat magna occaecat. Et esse eu amet quis consectetur labore mollit tempor excepteur incididunt. Veniam proident reprehenderit fugiat ex. Nostrud proident exercitation ad aute commodo occaecat.",
        "date": "Fri Apr 06 2007 20:12:20 GMT+0200 (Paris, Madrid (heure d’été))"
      },
      {
        "username": "Jeanette",
        "city": "Greenock",
        "email": "hooverbrennan@knowlysis.com",
        "content": "Commodo pariatur excepteur laboris laborum occaecat aliqua dolore dolore quis mollit nostrud dolor et sunt. Officia esse mollit incididunt aliqua eu labore eiusmod ad cillum. Do minim aliqua incididunt proident aliquip eiusmod fugiat excepteur culpa aliquip tempor magna. Velit in amet consequat labore sint enim enim culpa non aute esse consequat. Fugiat veniam aute deserunt magna labore quis laboris laborum eiusmod. Consectetur ullamco laboris veniam consectetur tempor exercitation sunt esse. Aliqua aliqua ipsum excepteur ipsum sunt eu ipsum velit eiusmod occaecat eu. Dolore et ipsum minim consequat laborum ea nisi officia velit exercitation magna sit eu. Ullamco do anim officia quis et. Ipsum nulla reprehenderit veniam dolor labore dolore officia qui veniam deserunt nisi.",
        "date": "Sun Feb 07 1971 18:22:51 GMT+0100 (Paris, Madrid)"
      },
      {
        "username": "Mayra",
        "city": "Marysville",
        "email": "elisefowler@insectus.com",
        "content": "Nostrud ut eiusmod quis nisi esse dolor eiusmod mollit laborum cillum commodo et exercitation velit. Et veniam labore Lorem sit ad do. Voluptate deserunt adipisicing irure est culpa. Officia do excepteur enim fugiat dolor. Labore Lorem occaecat do proident aute non adipisicing pariatur ut. Eiusmod sunt amet id Lorem nulla non ut magna ea. Est amet quis velit incididunt eu occaecat proident nostrud aute deserunt ea. Sit excepteur laboris occaecat et qui aliquip. Consectetur eiusmod consectetur sunt consectetur non voluptate aliquip magna cupidatat tempor. Sit anim nisi enim elit dolor esse velit duis esse cupidatat ipsum mollit nisi proident.",
        "date": "Mon Nov 21 2016 00:39:55 GMT+0100 (Paris, Madrid)"
      }
    ]
  },
  {
    "index": 1,
    "name": "in incididunt proident consectetur culpa",
    "content": "Dolore labore cillum veniam occaecat occaecat amet sint dolore aliquip aliqua non. Aute labore fugiat pariatur deserunt duis laboris amet adipisicing. Adipisicing tempor officia eiusmod sint amet et nostrud. Aute occaecat labore elit exercitation id do fugiat Lorem deserunt pariatur exercitation ea. Aliqua excepteur tempor occaecat duis elit irure et esse consequat consequat voluptate ipsum labore cillum.",
    "comments": [
      {
        "username": "Foley",
        "city": "Weeksville",
        "email": "princefry@eargo.com",
        "content": "Ut anim elit tempor consectetur laboris sint sit occaecat incididunt. Nulla nostrud esse sunt do aute proident laborum. Aliqua nulla anim excepteur excepteur sit adipisicing reprehenderit sunt aute cillum excepteur. Aliqua sint culpa labore voluptate est irure voluptate dolore ad nisi eu nulla non irure. Enim nulla ea est aliqua non sit adipisicing aute culpa commodo. Magna nostrud adipisicing quis dolor non consequat dolore aliqua in enim id sit. Eiusmod sit consequat excepteur labore proident quis officia ipsum est nisi ut anim. Quis excepteur dolor aliqua labore deserunt mollit incididunt excepteur adipisicing laborum ut aliquip cupidatat laborum. Eu qui ea dolore aliquip veniam. Exercitation Lorem non labore do.",
        "date": "Tue Dec 02 2003 06:29:53 GMT+0100 (Paris, Madrid)"
      },
      {
        "username": "Jones",
        "city": "Stockwell",
        "email": "haydengriffin@terragen.com",
        "content": "Non dolor reprehenderit do id voluptate aute Lorem quis adipisicing dolor. Sit proident velit ea velit. Ea duis laboris quis sit ut aliquip quis commodo elit nisi esse. Proident est labore amet occaecat occaecat do aliquip ea sit consectetur. Ullamco ipsum culpa adipisicing mollit velit reprehenderit ullamco laboris. Labore nostrud duis fugiat ea. Commodo elit incididunt est mollit laborum anim velit incididunt in incididunt consequat cupidatat magna deserunt. Non eiusmod esse pariatur ad laborum ullamco incididunt exercitation deserunt ipsum ex anim. Labore officia ad pariatur sunt sit cupidatat laboris pariatur nulla eu. Veniam reprehenderit excepteur cupidatat reprehenderit officia.",
        "date": "Sat Feb 19 1983 12:06:12 GMT+0100 (Paris, Madrid)"
      },
      {
        "username": "Parker",
        "city": "Collins",
        "email": "wardlee@dogtown.com",
        "content": "Aute velit minim dolore do veniam dolor eiusmod sint officia sint deserunt dolore et enim. Amet ea qui culpa quis amet proident irure amet nisi aliqua qui consequat eu. Veniam minim incididunt reprehenderit culpa deserunt duis nulla quis do dolor aliqua. Veniam elit laborum occaecat in. Aliquip eu labore in tempor reprehenderit. Id eiusmod anim aliqua consequat magna nostrud. Sit eiusmod elit laborum adipisicing. Voluptate non duis amet cillum pariatur. Labore eiusmod ea cupidatat dolor do elit duis dolor Lorem do nostrud. Sint minim occaecat eiusmod tempor laboris aliqua dolor nisi.",
        "date": "Sat May 05 2001 02:48:55 GMT+0200 (Paris, Madrid (heure d’été))"
      }
    ]
  },
  {
    "index": 2,
    "name": "enim anim id dolore adipisicing",
    "content": "Aute aliquip nisi aute aliqua nostrud voluptate laborum commodo commodo laboris. Occaecat aliqua incididunt non enim ut quis adipisicing. Cupidatat cupidatat ullamco magna culpa nostrud aute quis. Minim deserunt adipisicing laboris tempor eu commodo. Nulla et excepteur consequat ad culpa laborum culpa Lorem culpa fugiat aliqua.",
    "comments": [
      {
        "username": "Randall",
        "city": "Blanco",
        "email": "renavalencia@exovent.com",
        "content": "Magna dolore sit deserunt aute fugiat consequat officia commodo anim adipisicing cillum ex dolor. Culpa nulla culpa irure eiusmod sint esse. Ad amet id consequat tempor Lorem. Cillum cillum aliqua ex labore aute. Ea quis esse occaecat dolore ullamco consequat cillum dolor Lorem velit consectetur consectetur veniam. Magna incididunt cillum qui exercitation exercitation adipisicing deserunt non id magna deserunt enim occaecat. Lorem labore ex ea quis consequat veniam excepteur culpa magna pariatur. Dolore cupidatat labore est sint et ullamco enim. Veniam consequat veniam sit consequat reprehenderit qui in in. Commodo cupidatat pariatur excepteur cupidatat culpa qui eiusmod veniam nostrud voluptate anim ut cupidatat.",
        "date": "Sat Sep 08 2007 10:30:03 GMT+0200 (Paris, Madrid (heure d’été))"
      }
    ]
  },
  {
    "index": 3,
    "name": "consequat cillum commodo irure nulla",
    "content": "Ea fugiat voluptate deserunt incididunt non cillum magna eu non dolore veniam aliquip. Mollit quis quis sunt fugiat. Anim consectetur eu eu quis nostrud tempor. Eu occaecat amet mollit anim nostrud incididunt nostrud nulla cillum dolor incididunt in exercitation minim. Sunt non ullamco excepteur occaecat consectetur.",
    "comments": [
      {
        "username": "Cherie",
        "city": "Topanga",
        "email": "tillmanrandolph@overfork.com",
        "content": "Sit enim minim ea exercitation. Incididunt sit velit non in dolore sunt dolore fugiat ad in commodo officia ex officia. Exercitation dolore sit esse laborum nisi elit pariatur veniam incididunt excepteur aute nostrud do tempor. Officia est eu amet laborum velit sunt adipisicing aute. Dolore voluptate veniam laboris minim. Voluptate ut laborum id aute nostrud exercitation. Qui fugiat esse fugiat deserunt fugiat elit. Deserunt adipisicing consequat irure velit sit eu nisi mollit mollit. Lorem amet pariatur deserunt Lorem nulla mollit fugiat. Consequat irure minim sint duis consequat ad Lorem qui aliqua.",
        "date": "Thu May 03 2007 09:56:36 GMT+0200 (Paris, Madrid (heure d’été))"
      }
    ]
  },
  {
    "index": 4,
    "name": "ipsum occaecat non nulla ullamco",
    "content": "Sit fugiat et ea incididunt. Nisi duis consequat est consectetur tempor laborum occaecat ullamco duis officia fugiat elit pariatur est. Ut et cupidatat nisi nisi duis nostrud excepteur Lorem officia dolor culpa cupidatat. Nisi cillum nostrud adipisicing minim quis et anim ex qui eu esse. In nostrud laborum tempor dolor et aliqua pariatur veniam culpa ea sunt.",
    "comments": [
      {
        "username": "Pamela",
        "city": "Biddle",
        "email": "deirdregutierrez@terrago.com",
        "content": "Esse veniam ex Lorem ipsum sunt qui anim occaecat amet tempor non consectetur. Sit officia deserunt in aliquip in. Do minim voluptate aute ea esse sunt dolore mollit. Dolor est eu laborum nisi nostrud nisi magna nostrud. Enim sit Lorem aute nisi amet amet est in. Incididunt laboris pariatur dolore minim fugiat ullamco. Eu irure reprehenderit sint irure adipisicing ipsum. Cillum aliqua voluptate velit consequat ut. Labore ullamco ex consequat dolor aliqua ex consequat Lorem minim est. Nostrud id voluptate aliquip sunt aliquip ut sunt irure veniam nulla ipsum enim.",
        "date": "Tue Jan 23 1973 10:37:30 GMT+0100 (Paris, Madrid)"
      },
      {
        "username": "Lolita",
        "city": "Oasis",
        "email": "rachaelhoward@comverges.com",
        "content": "Deserunt aliquip ipsum qui ea aliqua ea ea Lorem eiusmod occaecat. Proident enim cupidatat culpa consequat consequat. Qui culpa duis nisi minim enim voluptate incididunt sint non aliqua. Ad sit dolore ullamco deserunt eiusmod veniam veniam. Adipisicing ut aliqua Lorem culpa deserunt quis est fugiat Lorem anim occaecat cillum. Esse in irure Lorem sint. Ex exercitation aliquip labore sit eu sunt. Ad nostrud sunt nostrud qui. Sit incididunt proident quis tempor aute ad labore eiusmod eu culpa commodo culpa eu sint. Officia veniam cillum labore cillum ex enim eiusmod proident.",
        "date": "Fri Jan 14 1994 09:17:44 GMT+0100 (Paris, Madrid)"
      },
      {
        "username": "Ball",
        "city": "Como",
        "email": "thompsoncarpenter@inventure.com",
        "content": "Mollit ullamco ut pariatur laborum tempor eu ut voluptate consectetur aliqua et reprehenderit exercitation. Voluptate cillum ut mollit magna velit qui in Lorem aute. Veniam sit commodo consequat dolor Lorem anim sint anim in duis. Mollit nostrud ullamco velit duis. Anim ex mollit irure eu esse excepteur non commodo cillum et dolore consequat Lorem aliqua. Commodo deserunt aliquip sunt labore fugiat mollit excepteur anim eiusmod voluptate nostrud ad cupidatat. Anim ad cupidatat occaecat laborum culpa aliquip. Exercitation nisi nulla reprehenderit Lorem adipisicing cupidatat culpa mollit do aliquip labore. Laborum mollit esse do sunt elit enim commodo reprehenderit. Sint quis quis in duis ea veniam dolore.",
        "date": "Fri Oct 01 1999 04:44:00 GMT+0200 (Paris, Madrid (heure d’été))"
      },
      {
        "username": "Angelina",
        "city": "Lodoga",
        "email": "wyattbrewer@cincyr.com",
        "content": "Ut duis eiusmod cupidatat deserunt reprehenderit pariatur dolore. Esse ea dolor exercitation laborum cupidatat ut minim exercitation sit ea et sunt fugiat. Eu officia proident officia nulla magna veniam. Lorem labore labore ipsum officia aute aute ut cupidatat sint enim. Dolore commodo nostrud enim irure laborum voluptate ipsum excepteur proident amet consectetur cupidatat occaecat. Aliqua est id voluptate sit ut commodo. In exercitation et amet fugiat pariatur nostrud irure cupidatat dolor minim. Aliqua anim ullamco laboris ipsum cillum incididunt. Culpa nisi in duis ex dolor ea ex officia tempor adipisicing voluptate proident minim. In laboris reprehenderit culpa veniam fugiat ex eu amet laborum incididunt adipisicing excepteur eiusmod.",
        "date": "Sat Feb 03 1973 02:43:01 GMT+0100 (Paris, Madrid)"
      }
    ]
  },
  {
    "index": 5,
    "name": "fugiat ex reprehenderit tempor deserunt",
    "content": "Nostrud Lorem ut nulla id deserunt ut. Ex ut laborum veniam magna quis labore in enim cupidatat officia Lorem qui officia. Labore fugiat deserunt velit qui velit est do amet quis pariatur eu. Qui elit Lorem nostrud esse id aute ad quis. Dolore fugiat do ullamco minim voluptate mollit aliqua aute nostrud ex dolor duis.",
    "comments": [
      {
        "username": "Dean",
        "city": "Salix",
        "email": "luellasaunders@ramjob.com",
        "content": "Adipisicing cupidatat deserunt velit laboris eiusmod officia consectetur eu in tempor officia dolor consectetur deserunt. Culpa ad nulla est irure amet pariatur. Magna minim ipsum commodo reprehenderit mollit incididunt incididunt ea. Consectetur sunt sit pariatur dolore nulla magna fugiat eu reprehenderit ex. Tempor mollit nisi anim dolore proident. Do ex fugiat pariatur nisi sint irure elit ad occaecat. Nostrud qui officia pariatur eiusmod proident consequat consectetur incididunt nostrud eiusmod nisi eiusmod quis commodo. Deserunt nostrud nisi proident exercitation aliqua excepteur ullamco. Incididunt aliquip Lorem enim proident excepteur cupidatat dolore cupidatat. Mollit aute est nostrud sit esse sit sunt ad elit nulla aliquip.",
        "date": "Sun Apr 30 1989 16:08:49 GMT+0200 (Paris, Madrid (heure d’été))"
      },
      {
        "username": "Gibson",
        "city": "Hanover",
        "email": "mcculloughlyons@interfind.com",
        "content": "Voluptate quis labore sunt exercitation occaecat duis excepteur pariatur. Duis exercitation nisi velit exercitation nulla labore elit dolor. Consectetur amet excepteur ex nostrud culpa pariatur irure. Cupidatat Lorem enim id nostrud irure elit tempor consequat. Eu est consequat incididunt adipisicing reprehenderit minim magna adipisicing voluptate laborum anim enim et quis. Est dolor pariatur ut non veniam irure nostrud id minim eiusmod enim. In ea culpa irure dolor Lorem excepteur commodo. Pariatur eiusmod dolore officia fugiat. Laborum duis dolor reprehenderit officia minim labore. Eiusmod duis incididunt velit dolore labore irure quis sit ullamco duis aute sunt veniam enim.",
        "date": "Fri Feb 27 2004 16:05:34 GMT+0100 (Paris, Madrid)"
      },
      {
        "username": "Lee",
        "city": "Allamuchy",
        "email": "susanmullins@skyplex.com",
        "content": "Laboris velit officia irure qui fugiat ex et ex est tempor adipisicing ex aute culpa. Qui ullamco duis aliqua sunt consectetur reprehenderit ut irure incididunt anim dolor pariatur aliqua. Pariatur velit reprehenderit sunt adipisicing id consectetur dolore sunt aute minim. Exercitation Lorem ex exercitation magna sunt nisi labore Lorem. Dolor reprehenderit id proident elit est quis laboris. Deserunt consequat consequat do aliquip commodo voluptate elit do tempor labore incididunt occaecat cillum. Fugiat quis mollit incididunt ut do. Eiusmod ut est ullamco nisi aliqua cupidatat in irure ut id voluptate in. Labore dolor exercitation sit sint est velit esse irure officia. Quis nisi est qui nisi cillum labore ex dolor occaecat.",
        "date": "Thu Jun 18 1998 11:38:22 GMT+0200 (Paris, Madrid (heure d’été))"
      },
      {
        "username": "Julie",
        "city": "Gordon",
        "email": "leolamills@zidant.com",
        "content": "Magna consequat elit pariatur esse. Enim voluptate minim do sit occaecat cupidatat duis non veniam consequat aliqua. Commodo ad laborum dolor sint ad aliquip et laborum. Veniam esse excepteur commodo fugiat pariatur aute commodo irure mollit eu pariatur. Reprehenderit mollit irure cillum quis cupidatat aliqua dolore veniam officia nostrud est magna. Officia sunt voluptate enim culpa incididunt enim mollit velit ipsum sit reprehenderit nulla officia. Id pariatur laborum qui pariatur nisi esse commodo deserunt. Velit enim eu dolore nostrud et qui irure amet occaecat anim consequat aute quis est. Ea fugiat pariatur elit duis laboris fugiat dolor officia. Do consectetur velit cupidatat ut nulla eu et sit.",
        "date": "Sat May 15 2010 04:47:13 GMT+0200 (Paris, Madrid (heure d’été))"
      }
    ]
  },
  {
    "index": 6,
    "name": "proident excepteur ullamco fugiat veniam",
    "content": "Duis id tempor ad nulla qui. Irure labore anim irure et cillum laborum. Consectetur duis officia ipsum exercitation exercitation culpa reprehenderit enim minim laboris. Do consectetur et ad veniam nisi do ipsum duis irure aliqua consequat irure sit ut. Labore ullamco in pariatur eu adipisicing nisi exercitation mollit minim duis ullamco minim est nulla.",
    "comments": [
      {
        "username": "Leigh",
        "city": "Trinway",
        "email": "valeriejoseph@pharmacon.com",
        "content": "Reprehenderit ad consectetur deserunt est Lorem dolor sit quis officia exercitation sit proident duis. Elit commodo eu ullamco labore laboris Lorem sint irure tempor. Sit ad dolore aute deserunt qui ipsum eiusmod officia. Fugiat do dolor ea consectetur nulla et anim in et nostrud. Enim laborum ullamco ullamco non do excepteur qui in fugiat do velit qui enim. Nisi nisi ut esse ex sit velit dolore cillum eu labore officia. Non aliquip sit enim nostrud eu ea anim. Proident culpa sint officia commodo ut dolore cupidatat anim veniam est dolore. Sint dolor ut ea veniam nulla tempor mollit labore irure non. Aute eu aliqua sit elit sint occaecat dolore aliquip in ea nulla ea quis.",
        "date": "Fri Jan 01 1999 11:26:06 GMT+0100 (Paris, Madrid)"
      }
    ]
  }
],

    getPosts: function(){return this.posts;},
    getPost: function(id){

      var post = this.posts.find(function(elem){
        return elem.index === parseInt(id);
      });

      return post;


    }
  };

  return factory;
})

myApp.controller('PostsCtrl', ['$scope','PostsFactory', function ($scope,PostsFactory) {

  $scope.posts=PostsFactory.getPosts();
  

}]);

myApp.controller('ErrorCtrl', ['$scope','$routeParams','PostsFactory','$location',function ($scope,$routeParams,PostsFactory,$location) {

  $scope.Return = function(){ $location.path('/messages/'+$routeParams.id);}

}]);

myApp.controller('MessagesCtrl',['$scope','$routeParams','PostsFactory','$location', function($scope,$routeParams,PostsFactory,$location){
  
  var post = PostsFactory.getPost($routeParams.id);
  /*
  var post = posts.find(function(elem){
        return elem.index === parseInt($routeParams.id);});
  */  
  $scope.messages = post.comments;
  $scope.title = post.name;
  
  $scope.Splice = function(){ PostsFactory.posts=[]; }
  $scope.Home = function(){ $location.path('/'); }
  $scope.Error = function(){ $location.path('/error/'+$routeParams.id);}
  

}]);

myApp.config(function($routeProvider){
  $routeProvider
    .when('/',{templateUrl:'home.html',controller:'PostsCtrl'})
    .when('/error/:id',{templateUrl:'error.html',controller:'ErrorCtrl'})
    .when('/messages/:id',{
        templateUrl:'messages.html',
        controller:'MessagesCtrl',
        resolve: {
          posts: function(PostsFactory){
            return PostsFactory.getPosts(); 
          }
        }
        })
    .otherwise({templateUrl:'/'});
})