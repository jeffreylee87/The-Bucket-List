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

	  //validator
  		function validateForm(){
          var isValid = true;
          $(".form-control").each(function(){
              if($(this).val()===""){
                  isValid = false;
              }
          })
          return isValid;
      };

 if(validateForm()){
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

	  }else{
    alert("Type your info in, you don't want to be alone forever.")
}  
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
  

