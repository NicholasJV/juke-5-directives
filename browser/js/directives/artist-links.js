


app.directive('artistLinks', function(){
	return {
		restrict: 'E'
		templateUrl: '/templates/song-list.html',
		scope: {
			artists: '='
		}
	}
})