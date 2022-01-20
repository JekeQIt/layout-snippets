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
    var radialPercent =  $('#progressWidthInput').val();
    console.log(radialPercent);
    $('#MainPart_divProgressbar_Progress').removeAttr('style').attr('style', 'width:'+inputWidth+'%');
    $('.circle-inset .contents').text(radialPercent+'%')
    $('.circle .mask.full, .circle .fill').css({'transform': 'rotate('+radialPercent*3.6/2+'deg)'  });
    $('.circle .fill.fix').css({'transform': 'rotate('+radialPercent*3.6 +'deg)'  });
  })
  $('#MainPart_ulProgressbarBox_Holder_Processbar').removeAttr('style')
})
