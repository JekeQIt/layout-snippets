queueViewModel.pageReady(function (data) {
  var pageid = $("body").attr("data-pageid");
  var culture = $("body").attr("data-culture");

  if (pageid == "before") {
  }

  if (pageid == "queue") {
    //Create new elements for expectedServiceTime. overwrite issues can cause the original elements to momentarsily display inaccurate times.
    if ($("#expectedServiceTime").length === 0) {
      $(`<span id="expectedServiceTime" data-bind="visible: layout.expectedServiceTimeVisible"></span>`).insertAfter("#MainPart_lbExpectedServiceTimeText");
    }
    //apply the Knockout data-bind that's added to the to the new expected service time element.
    ko.applyBindings(queueViewModel, document.getElementById("expectedServiceTime"));

    //Get ISO service time
    const isoTimeString = queueViewModel.options.inqueueInfo.ticket.expectedServiceTimeUTC;

    //run conversion function
    convertISOTimeToLocalTime(isoTimeString);
  }

  if (pageid == "after") {
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
  //Continue updating expectedServiceTime when model waiting room updates.
  const isoTimeString = data.ticket.expectedServiceTimeUTC;
  //run conversion function
  convertISOTimeToLocalTime(isoTimeString);
});

function convertISOTimeToLocalTime(isoTimeString) {
  // Create a Date object from the ISO 8601 string (interpreted as UTC)
  const utcDate = new Date(isoTimeString);

  // Format the time to display hours and minutes in 12-hour format (standard time)
  const localTime = utcDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour format (standard time)
  });

  // Get the time zone abbreviation separately
  const timeZone = utcDate
    .toLocaleString("en-US", {
      timeZoneName: "short", // Only show the time zone abbreviation
    })
    .split(" ")
    .pop(); // Extract the time zone abbreviation from the string

  //update new expectedServiceTime element
  $("#expectedServiceTime").text(localTime.replace(/\s/g, ""));
  return { localTime, timeZone };
}
