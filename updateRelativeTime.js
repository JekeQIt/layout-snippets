queueViewModel.pageReady(function (data) {
  var pageid = $("body").attr("data-pageid");
  var culture = $("body").attr("data-culture");

  if (pageid == "before") {
  }

  if (pageid == "queue") {
    $("#MainPart_lbWhichIsIn").hide();
    $(`<span id="MainPart_lbWhichIsIn2"></span>`).insertBefore("#MainPart_lbWhichIsIn");
    var minutes = queueViewModel.ticket.whichIsIn().split(" ");
    if (minutes[0] === "less") {
      $(`#MainPart_lbWhichIsIn2`).text("minder as ‘n minuut");
    } else if (minutes[0] === "more") {
      $(`#MainPart_lbWhichIsIn2`).text("meer as ‘n uur");
    } else {
      var m = parseInt(minutes[0]);
      console.log("else", m);
      if (typeof m === "number") {
        console.log("is a number");
        $(`#MainPart_lbWhichIsIn2`).text(`${m} minute`);
      } else {
        console.log("not a number");
      }
    }
    console.log("time updated");
    if (queueViewModel.layout.queueIsPausedVisible() || queueViewModel.layout.servicedSoonVisible()) {
      console.log("paused or ss");
      $(`#MainPart_lbWhichIsIn2`).hide();
    } else {
      $(`#MainPart_lbWhichIsIn2`).show();
    }
  }

  if (pageid == "after") {
  }

  if (pageid == "exit") {
  }

  if (pageid == "error") {
    var errorid = $("body").attr("data-errorid");

    if (errorid == "4") {
    }

    if (errorid == "5") {
    }
  }
});

queueViewModel.modelUpdated(function (data) {
  $("#MainPart_lbWhichIsIn").hide();
  var minutes = data.ticket.whichIsIn.split(" ");
  if (minutes[0] === "less") {
    $(`#MainPart_lbWhichIsIn2`).text("minder as ‘n minuut");
  } else if (minutes[0] === "more") {
    $(`#MainPart_lbWhichIsIn2`).text("meer as ‘n uur");
  } else {
    var m = parseInt(minutes[0]);
    console.log("else", m);
    if (typeof m === "number") {
      console.log("is a number");
      $(`#MainPart_lbWhichIsIn2`).text(m + " minute");
    } else {
      console.log("not a number");
    }
  }
  console.log("time updated");
  if (data.ticket.queuePaused === true || data.layout.servicedSoonVisible === true) {
    console.log("paused or ss true");
    $(`#MainPart_lbWhichIsIn2`).hide();
  } else {
    $(`#MainPart_lbWhichIsIn2`).show();
  }
});
