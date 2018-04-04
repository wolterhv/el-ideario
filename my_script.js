$(document).ready( function(){
$('#auto').load('load.php');
refresh();
});

function refresh()
{
	setTimeout( function() {
	  $('#auto').load('load.php');
	  refresh();
	}, 4000);
}
