$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		// Prevent the clicking the links.
		evt.preventDefault(); 

		// Take the image's url and title. 
		var imageURL = $(this).attr("href");
		var caption = $(this).attr("title");

		// Caption and Image will destroy with Fade Out animation (1000 ms.) 
		$("#caption, #image").fadeOut(1000, function() {
			// After ending the fade out animation, new image end caption declaration.
			$("#image").attr("src", imageURL);
			$("#caption").text(caption);
			
			// Caption and image will coming with Fade In animation (1000 ms.)
			$("#caption, #image").fadeIn(1000);
		});
	});

	// move focus to first thumbnail
	$("li:first-child a").focus();
});
