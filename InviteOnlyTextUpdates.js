if ($(".key-required").length > 0) {
  // Observer to update email button and input
  const target = document.querySelector(".key-required");
  const config = {
    attributes: false,
    childList: true,
    characterData: false,
    subtree: true,
  };
  var emailObserver = new MutationObserver(function (mutations) {
    if ($("#main_invite_div").length === 1) {
      $("#btnSubmit_Email").text(" ");
      $("#btnSubmit_Code").text(" ");
      $("#invitee_email").attr("placeholder", "Email address");

      emailObserver.disconnect();
    }
  });
  emailObserver.observe(target, config);

  // Observer to update code email and input
  const codeObserver = new MutationObserver(function (mutations) {
    if ($("#invitee_code").length === 1) {
      $("#btnSubmit_Code").text(" ");
      codeObserver.disconnect();
    }
  });
  codeObserver.observe(target, config);

  var errorTarget;

  // Observer to update error messages
  const errorObserver = new MutationObserver(function (mutations) {
    if ($("#error_box").text() === "Your email cannot be verified. Please enter the email registered for this event.") {
      $("#error_box").text("The email you entered was incorrect. Please try again.");
      console.log("errorObserver stop");
    }
  });
  // Observer to watch for creation of error box
  const errorBoxObserver = new MutationObserver(function (mutations) {
    if ($("#error_box").length > 0) {
      errorTarget = document.querySelector("#error_box");
      errorObserver.observe(errorTarget, config);
      console.log("errorBoxObserver Stop");
      errorBoxObserver.disconnect();
    }
  });
  errorBoxObserver.observe(target, config);
}
