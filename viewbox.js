
$(function(){
	$('.image-link').viewbox({
		setTitle: true //add caption if link has title attribute
		,margin: 250
		,resizeDuration: 100
		,openDuration: 100
		,closeDuration: 200
		,closeButton: true
		,fullscreenButton: false
		,navButtons: true
		,closeOnSideClick: true
		,nextOnContentClick: false
		,useGestures: true
	});
});