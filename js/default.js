$(document).ready(function()
{
  
  	$('ul.nav li a').each(function(){					// indicates active page in navigation
		if(this.href == window.location)  
			$(this).parent().addClass("active"); 						  
	});

	if (window.location.pathname.indexOf("html") === -1) {
		$('#overview').addClass("active");
	}
	
}); 