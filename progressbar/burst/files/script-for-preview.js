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
          console.log("adding updated class.");
          $("#MainPart_divProgressbar_Progress").addClass("updated");
        } else {
          $("#MainPart_divProgressbar_Progress").removeClass("updated");
        }
      });
      //do something when paused button clicked.
      $("#PreviewStatesContent label:nth-child(4) input").click(function () {
        if ($("#PreviewStatesContent label:nth-child(4) input")[0].checked === true) {
          console.log("selected");
        }
        if ($("#PreviewStatesContent label:nth-child(4) input")[0].checked === false) {
          console.log("not selected");
        }
      });
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
