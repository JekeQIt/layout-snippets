$(document).ready(function () {
  if (queueViewModel.eventId === "preview-layout" || queueViewModel.eventId === "testevent") {
    console.log("preview");
    var pageid = $("body").attr("data-pageid");

    if (pageid == "queue") {
      $("#reminderStatusMesage").after(
        '<label class="cblabel queueElement">' +
          '<input type="range" value="75" id="progressWidthInput" max="100" min="0">' +
          '<span class="title">&nbsp Width of progress bar</span>' +
          '<span class="qmark">?' +
          '<span class="tooltip">Change the width of the progress bar</span>' +
          "</span>" +
          "</label>" +
          `<label class="cblabel queueElement">
          <input class="update-state" type="checkbox" >
          Progessbar updating state
          <span class="qmark">?
            <span class="tooltip">Click to see the progressbar in the updating state/span></span>
        </label>`
      );
      $("#progressWidthInput").change(function () {
        var inputWidth = $("#progressWidthInput").val();
        var radialPercent = $("#progressWidthInput").val();
        console.log(radialPercent);
        $("#MainPart_divProgressbar_Progress")
          .removeAttr("style")
          .attr("style", "width:" + inputWidth + "%");
        $(".circle-inset .contents").text(radialPercent + "%");
        $(".circle .mask.full, .circle .fill").css({ transform: "rotate(" + (radialPercent * 3.6) / 2 + "deg)" });
        $(".circle .fill.fix").css({ transform: "rotate(" + radialPercent * 3.6 + "deg)" });
      });
      $("#MainPart_ulProgressbarBox_Holder_Processbar").removeAttr("style");
      //prgressbar length
      $("#progressWidthInput").change(function () {
        var inputWidth = $("#progressWidthInput").val();
        console.log(inputWidth);
        $("#MainPart_divProgressbar_Progress")
          .removeAttr("style")
          .attr("style", "width:" + inputWidth + "%");
      });
      //updating state checkbox
      $(".update-state").change(function () {
        if (!$("#MainPart_divProgressbar_Progress").hasClass("updated")) {
          console.log("added updated class.");
          $("#MainPart_divProgressbar_Progress").addClass("updated");
        } else {
          $("#MainPart_divProgressbar_Progress").removeClass("updated");
        }
      });
      //do something when paused button clicked.
      // $("#PreviewStatesContent label:nth-child(4) input").change(function () {});
    }
  }
});
// var once = true;
// queueViewModel.modelUpdated(function (data) {
//   if (once) {
//     console.log(data);
//     once = false;
//   }
// });
