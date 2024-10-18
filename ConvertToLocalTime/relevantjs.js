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
    //Create new elements for MessageOnQueueTicketTimeText. overwrite issues can cause the original elements to momentarsily display inaccurate times.
    if ($("#messageOnQueueTicketTimeText").length === 0) {
      $(`<span id="messageOnQueueTicketTimeText"></span>`).insertAfter("#MainPart_h2MessageOnQueueTicket");
    }
    //create new element for windowStartTime
    if ($("#windowStartTime").length === 0) {
      $(`<div id="windowStartTime"></div>`).appendTo("#pConfirmRedirectTime");
    }

    //apply the Knockout data-bind that's added to the to the new expected service time element.
    ko.applyBindings(queueViewModel, document.getElementById("expectedServiceTime"));

    //Get ISO service time
    const isoTimeString = queueViewModel.options.inqueueInfo.ticket.expectedServiceTimeUTC;
    //run conversion function
    convertISOTimeToLocalTime(isoTimeString);

    //test to see if a dynamic message has been created. There is no timestamp if a messsage has not been created.
    if (queueViewModel.message() != null) {
      const messageUpdateTime = queueViewModel.message().timestamp;
      convertMessageUpdateTimeToLocalTime(messageUpdateTime);
    }
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
//model update
var windowStartTimeSet = false;
queueViewModel.modelUpdated(function (data) {
  //Continue updating expectedServiceTime when model waiting room updates.
  const isoTimeString = data.ticket.expectedServiceTimeUTC;
  convertISOTimeToLocalTime(isoTimeString);

  //test to see if a dynamic message has been created. There is no timestamp if a messsage has not been created.
  if (data.message != null) {
    const messageUpdateTime = data.message.timestampUTC;
    //run conversion function
    convertMessageUpdateTimeToLocalTime(messageUpdateTime);
  }
  //test to see if show confirm redirect modal is open. if it is, display current time in local timezone.
  if (windowStartTimeSet === false) {
    if (queueViewModel.showConfirmRedirectDialog() === true) {
      //run conversion function
      convertWindowStartTimeToLocalTime();
    }
  }
});

//function to convert expectedServiceTime to local time
function convertISOTimeToLocalTime(isoTimeString) {
  // Create a Date object from the ISO 8601 string (interpreted as UTC)
  const utcDate = new Date(isoTimeString);

  // Format the time to display hours and minutes in 12-hour format (standard time)
  const localTime = utcDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour format (standard time)
  });

  //update new expectedServiceTime element
  $("#expectedServiceTime").text(localTime.replace(/\s/g, ""));
}
//function to convert Message last updated time to local time
function convertMessageUpdateTimeToLocalTime(messageUpdateTime) {
  // Create a Date object from the ISO 8601 string (interpreted as UTC)
  const utcDate = new Date(messageUpdateTime);

  // Format the time to display hours and minutes in 12-hour format (standard time)
  const localTime = utcDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour format (standard time)
  });

  //update new expectedServiceTime element
  $("#messageOnQueueTicketTimeText").text(localTime.replace(/\s/g, ""));
}
///function to convert Window Start time. Only Runs once, when confirmRedirct modal opens
function convertWindowStartTimeToLocalTime() {
  const now = new Date(); //
  console.log(now);

  // Format the time to display hours and minutes in 12-hour format (standard time)
  const localTime = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour format (standard time)
  });

  //update new expectedServiceTime element
  $("#windowStartTime").text(localTime.replace(/\s/g, ""));
  windowStartTimeSet = true;
  console.log("windowStartTimeSet", windowStartTimeSet);
}
