var bSidesApp = {};

bSidesApp.key = '81cef5faf61aa735acfc226b1eef4a54';

bSidesApp.init = function(){
	// console.log('hi');
	var query = $('#search').val();
	$('#button').on('click', function(){
		query = $('#search').val();
		$('h1').empty();
		$('h2').empty();
		$('iframe').empty();
		bSidesApp.getSongs(query);
	})
};


bSidesApp.getSongs = function(query){
	$.ajax({
		url:'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks',
		type: 'GET',
		data: {
			format : 'json',
			api_key : bSidesApp.key,
			// method: artist.gettoptracks,
			artist: query,
			// limit : 3
		},
		dataType: 'json',
		success: function(result){
			
			
			result.toptracks.track.reverse();
			
	

			bSidesApp.displaySongs(result.toptracks.track);
			 // console.log(result.toptracks.track[0].artist.name);
			 // console.log(result.toptracks.track[0].name);
			// console.log(result.toptracks.track[1].artist.name);
			// console.log(result.toptracks.track[1].name);
			// console.log(result.toptracks.track[2].artist.name);
			// console.log(result.toptracks.track[2].name);

			// console.log(result.toptracks.track.artist.name)
			// bSidesApp.displaySongs(result.toptracks)
		}
	});
}



bSidesApp.displaySongs = function(data){
	for (var i = 0; i < 3; i++){
		console.log(data[i]);

		var songName = data[i].name;
		console.log(songName);

		var bandName = data[i].artist.name;

		var video = data[i].url;
		console.log(video);

		$('h1').html(bandName);
		$('h2').append(songName);
		$('#link').attr('href', video);
		

		//data[i] ===> result.toptracks.track[i]
		// ===> reult.toptracks.track[0]

	}
}





$(function(){
	bSidesApp.init();

})