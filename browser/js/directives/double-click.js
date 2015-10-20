

app.directive('doubleClick', function(){
	return {
		restrict: 'A',
		scope: {
			clicked: '&'
		},
		link: function(scope, elem, attr){
			elem.on('click', function(){
				scope.doubleClick();
			})
		}
	}

})