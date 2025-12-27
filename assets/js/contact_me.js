$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // Additional error handling if needed
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // Prevent default submit behavior

      // Get form values
      var url = "https://formspree.io/" + "{% if site.formspree_form_path %}{{ site.formspree_form_path }}{% else %}{{ site.email }}{% endif %}";
      var name = $("#name").val();
      var username = $("#username").val();
      var email = $("#email").val();
      var phone = $("#phone").length ? $("#phone").val() : '';
      var message = $("#message").val();

      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button to prevent duplicates

      if(username === '') { // Honeypot check
        $.ajax({
          url: url,
          type: "POST",
          dataType: "json",
          data: {
            name: name,
            email: email,
            phone: phone,
            message: message
          },
          cache: false,

          success: function() {
            // Success message (friendly & supportive)
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
            $('#success > .alert-success').append("<strong>Thanks! Your message is on its way. I’ll review it and get back to you soon.</strong>");
            $('#success > .alert-success').append('</div>');
            // Clear all fields
            $('#contactForm').trigger("reset");
          },

          error: function() {
            // Failure message (friendly & concise)
            $('#success').html("<div class='alert alert-danger'>");
            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
            $('#success > .alert-danger').append("<strong>Hi, something prevented your message from sending. Please use <a href='https://forms.gle/gx3JBM2cUXf2PsZWA' target='_blank'>this form</a> to get in touch.</strong>");
            $('#success > .alert-danger').append('</div>');
            // Clear all fields
            $('#contactForm').trigger("reset");
          },

          complete: function() {
            setTimeout(function() {
              $this.prop("disabled", false); // Re-enable submit button
            }, 1000);
          }
        });
      }
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  // Tab click handling
  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });

});

// Clear success/failure message when focusing on name field
$('#name').focus(function() {
  $('#success').html('');
});
