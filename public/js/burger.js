$('.devourBtn').on('click', function() {
    let id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(
        function(data) {
    
          // Reload the page to get the updated list
          location.reload();
        }
      );
})