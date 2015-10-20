

app.directive('albumList', function(){
	return {
		restrict: 'E',
		scope: {
			albums: '='
		},
		templateUrl: '/templates/album-list.html'
	}

})