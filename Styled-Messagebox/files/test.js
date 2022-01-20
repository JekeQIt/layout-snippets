queueViewModel.pageReady(function (data) {
    var pageid = $("body").attr("data-pageid");
    if (pageid == "queue") {
      $('#reminderStatusMesage').after(
        '<label class="cblabel queueElement">' +
            '<input type="range" value="75" id="progressWidthInput" max="100" min="0">'+
            '<span class="title">&nbsp Width of progress bar</span>'+
            '<span class="qmark">?'+
                '<span class="tooltip">Change the width of the progress bar</span>'+
            '</span>'+
        '</label>'
      );

    }

});

$(document).ready(function(){
  $('#progressWidthInput').change(function(){
    var inputWidth = $('#progressWidthInput').val();
    console.log(inputWidth);
    $('#MainPart_divProgressbar_Progress').removeAttr('style').attr('style', 'width:'+inputWidth+'%');
  })
})
