$(document).ready( function() {
	
	$('#yeah').click(function(){
		$('.intro').hide();
		$('.main-list').show();
	});

	$('#add-button').click( function() {
		if( $('input#add-li').val().trim().length == 0) {
			$('#error').show();
			$('input#add-li').val("");
		} else {
			$('ul#list').prepend('<li class="todo"><button class="nevermind"></button>' + $('input#add-li').val() + '<button class="gotten"></button></li>');
			$('input#add-li').val("");
		};

	});

$(document).on("click", ".done", function() {
	$(this).closest('li').fadeOut(300);
})

$(document).on("click", ".nevermind", function() {
	$(this).closest('li').fadeOut(300);
});

$(document).on("click", ".gotten", function() {
		$(this).closest('li').addClass('done');
		$(this).closest('li').removeClass('todo');
		$(this).hide();
		$(this).siblings('.nevermind').hide();


	});
	
});