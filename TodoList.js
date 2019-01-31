$("ul").on("click", "li", function() {
	$(this).toggleClass("Completed");
});
// Click on X to delete todo 
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});
// Listen to the key pressed 
$("input[type = text]").keypress(function(event) {
	if(event.which === 13) {
		// get input
		var todoText = $(this).val(); 
		// create a new li and add to ul
		$("ul").append("<li><span><i class = 'fa fa-trash'></i></span>"+ todoText +"</li>");

	}
})
//Toggle plus button
$(".fa-plus").click(function() {
	$("input[type = text]").fadeToggle();
}) 
