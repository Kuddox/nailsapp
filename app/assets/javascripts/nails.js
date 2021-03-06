angular.module('Nancys', [])
.controller('NailCtrl', [
	'$scope',
	function($scope){
		$scope.test = 'Hello world!';
		$scope.posts = [
			{title: 'post 1', upvotes: 5},
			{title: 'post 2', upvotes: 2},
			{title: 'post 3', upvotes: 15},
			{title: 'post 4', upvotes: 9},
			{title: 'post 5', upvotes: 4}
		];
		$scope.addPost = function(){
			if(!$scope.title || $scope.title === '') { return; }
			$scope.posts.push({
				title: $scope.title, 
				upvotes: 0
			});
			$scope.title = '';
		};
		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		};
		$scope.incrementDownvotes = function(post) {
			post.downvotes -= 1;
		};
		$scope.priceList
		$scope.addReview
	}])

