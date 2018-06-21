$(function() {
	$(".change-complete").on("click", function(event) {
	  var id = $(this).data("id");
	  var comp = $(this).data("comp");
  
	  var newComp = {
		completed: comp
	  };
  
	  // Send the PUT request.
	  $.ajax("/api/bucketlist/" + id, {
		type: "PUT",
		data: newComp
	  }).then(
		function() {
		  console.log("changed complete to", comp);
		  // Reload the page to get the updated list
		  location.reload();
		}
	  );
	});
  
	$(".create").on("submit", function(event) {
	  // Make sure to preventDefault on a submit event.
	  event.preventDefault();
  
	  var newItem = {
		name: $("#item").val().trim(),
		
	  };
	  console.log(newItem);
  
	  // Send the POST request.
	  $.ajax("/api/bucketlist", {
		type: "POST",
		data: newItem
	  }).then(
		function() {
		  console.log("created new list item");
		  // Reload the page to get the updated list
		  location.reload();
		}
	  );
	});

	//delete button
	$(".delete").on("click", function(event) {
		var id = $(this).data("id");
	
		// Send the PUT request.
		$.ajax("/api/bucketlist/" + id, {
		  type: "DELETE",
		  
		}).then(
		  function() {
			console.log("deleted " + id);
			// Reload the page to get the updated list
			location.reload();
		  }
		);
	  });




  });
  

