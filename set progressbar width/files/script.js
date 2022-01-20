queueViewModel.pageReady(function (data) {

    var pageid = $("body").attr("data-pageid");
    var culture = $("body").attr("data-culture");

    if (pageid == "before") {

    }

    if (pageid == "queue") {
      $('#reminderStatusMesage').after(
        '<label class="cblabel queueElement">' +
            '<input type="number"  id="progressWidthInput">'+
            '<span class="title">&nbsp Width of progress bar</span>'+
            '<span class="qmark">?'+
                '<span class="tooltip">Change the width of the progress bar. Number, 1-100%</span>'+
            '</span>'+
        '</label>'
      );

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
  if (pageid == "queue") {
    // var progressWidth = 0;


   }

});
$(document).ready(function(){
  $('#progressWidthInput').change(function(){
    var inputWidth = $('#progressWidthInput').val();
    if (inputWidth > 100) {
      inputWidth = 100
    } else if (inputWidth < 0) {
      inputWidth = 0
    }
    $('#MainPart_divProgressbar_Progress').removeAttr('style').attr('style', 'width:'+inputWidth+'%');
    console.log(inputWidth);

  })
})
