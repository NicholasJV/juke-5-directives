
app.directive('doubleClick', function($rootScope){
	return {
		restrict: 'A',
		// templateUrl: '/templates/song-list.html',
		scope: {
			doubleClick: '&' 
			// ^ the attribute name:
			// (we choose to make it the same as the directive name)
		},
		link: function(scope, elem){	
			// console.log('elem', elem);
			elem.on('dblclick', function(){
				scope.doubleClick();
				$rootScope.$digest();
				// console.log('dbclicked!');
			})
		}
	}
});