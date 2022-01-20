queueViewModel.pageReady(function (data) {

    var pageid = $("body").attr("data-pageid");
    var culture = $("body").attr("data-culture");
    // $('#main-top').insertAfter('#whatisthis')
    if (pageid == "before") {

    }

    if (pageid == "queue") {
      var progress = queueViewModel.ticket.progress();
          progress = progress*100
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

//queueViewModel.modelUpdated(function (data) {
//});

// $(document).ready(function(){
//   $('#MainPart_ulProgressbarBox_Holder_Processbar').removeAttr('style')
// })
