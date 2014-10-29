app.controller('BlogController', ['$http', function($http){
    
    var blog = this;
    blog.title = "ng-Blog";
    
    blog.posts = {};
    $http.get('posts.json').success(function(data){
      blog.posts = data;
    });
    
    blog.tab = 'blog';
    
    blog.selectTab = function(setTab){
      blog.tab = setTab;
    };
    
    blog.isSelected = function(checkTab){
      return blog.tab === checkTab;
    };
    
    blog.post = {};
    blog.addPost = function(){
      blog.post.createdOn = Date.now();
      blog.post.comments = [];
      blog.post.likes = 0;
      blog.posts.unshift(this.post);
      blog.tab = 0;
      blog.post ={};
    };   
    
  }]);