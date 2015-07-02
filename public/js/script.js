jQuery().ready(function(){
	
	/*======== Placeholder ========*/
	$('input, textarea').placeholder();
	
	/*===== select box =====*/
	$("select.custom").each(function() {					
		var sb = new SelectBox({
			selectbox: $(this)
		});
	});
	
	/*===== back top =====*/
	$('#top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 300);
		return false;
	});
	
});