queueViewModel.pageReady(function (data) {
  var pageid = $("body").attr("data-pageid");
  var culture = $("body").attr("data-culture");
  if (pageid == "before") {
    // $("#lbHeaderH2").html(`[Event Name]`);
    // $("#lbHeaderP").html(`[Event Name] has not yet begun...`);
  }
  if (pageid == "queue") {
    // $("#lbHeaderH2").html(`YOU ARE NOW IN LINE`);
    // $("#lbHeaderP").html(`You are in line for...`);
  }
  // $("#footer-disclaimer").html("Footer disclaimer");
});
