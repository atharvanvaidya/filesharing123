$(document).ready(function() {
	$(".upload-content").height($(window).height() - 160);
	$(".file-hierarchy").height($(window).height() - 160);
	$(".upload-area").height($(window).height() - 160);
	$(window).resize(function() {
		$(".upload-content").height($(window).height() - 160);
		$(".file-hierarchy").height($(window).height() - 160);
		$(".upload-area").height($(window).height() - 160);
	});
});