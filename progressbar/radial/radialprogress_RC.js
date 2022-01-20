$("#MainPart_divProgressbar").hide();
$(
  '<div class="radial-progressbar"> ' +
    '<div class="circle">' +
    '<div class="mask full">' +
    '<div class="mask fill"></div>' +
    "</div>" +
    '<div class="mask half">' +
    '<div class="mask fill"></div>' +
    '<div class="mask fill fix"></div>' +
    "</div>" +
    '<div class="shadow">' +
    "</div>" +
    "</div>" +
    '<div class="circle-inset">' +
    '<div class="contents "></div>' +
    "</div>" +
    "</div>"
).appendTo(".warning-box");
$("#MainPart_divProgressbar_Progress_Runner").appendTo(".circle-inset");

var radialPercent = queueViewModel.ticket.progress();
radialPercent = radialPercent * 100;
$(".circle-inset .contents").text(radialPercent + "%");
$(".circle .mask.full, .circle .fill").css({
  transform: "rotate(" + (radialPercent * 3.6) / 2 + "deg)",
});
$(".circle .fill.fix").css({ transform: "rotate(" + radialPercent * 3.6 + "deg)" });
