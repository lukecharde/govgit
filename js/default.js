$(document).ready(function()
{
  
  	$('ul.nav li a').each(function(){					// indicates active page in navigation
		if(this.href == window.location)  
			$(this).parent().addClass("active"); 						  
	});

	if (window.location.pathname.indexOf("html") === -1) {
		$('#overview').addClass("active");
	}

	if (location.hash == "#fork") {
		forkModal();
	}

	$('a.forkModalTrigger').on('click', function(){
		console.log(".forkModalTrigger'd");
		forkModal();
		return false;
	})

	$('.forkGovGit').on('click', function(){
		forkGovGit();
		return false;
	})	

	function forkModal(){
		$('#myModal').modal();
	}

	function forkGovGit(){
		window.location = "https://github.com/lukecharde/govgit";
	}
	
}); 