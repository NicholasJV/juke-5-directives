


// PlaylistFactory, thePlaylist, theAlbum, theArtist

app.directive('songList', function(PlayerFactory, PlaylistFactory){
	return {
		restrict: 'E',
		templateUrl: '/templates/song-list.html',
		scope: {
			songs: '='
		},
		link: function(scope){
			scope.isCurrent = function(song){
				var current = PlayerFactory.getCurrentSong();
				return current && current._id == song._id;
			}

			scope.start = function(song){
				PlayerFactory.start(song, scope.songs);
			}
			

			// remember you tried:
			// scope.isCurrent = PlayerFactory.isCurrent 
			

			// REFACTOR this from the review lecture !!!


		}
	}
})