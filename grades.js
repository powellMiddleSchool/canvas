$(document).ready(function(){
//open Student Grades page
	var regex = new RegExp('/accounts/([0-9]+)/users/([0-9]+)$');
	var matches = regex.exec(document.location);
	if (matches) {
		if ($('#jj_allgrades').length == 0) {
			var text = document.getElementsByTagName('h2');
			var gh = text[0];
			var url = '/users/' + matches[2] + '/grades?' + gh.innerHTML;
			$('#right-side-wrapper div').append('<a id="jj_allgrades" class="btn button-sidebar-wide" href="' + url + '"><i class="icon-gradebook"></i> View All Grades for Student</a>');
		}
	}
};
