var language = "en-US";
$.countdown.setDefaults($.countdown.regional[language]);
$("#defaultCountdown").countdown("option", {
  layout:
    '<span class="countdown_row ">' +
    '{d<}<span class="countdown_section days">' +
    '<span class="countdown_amount days">{dnn} </span>' +
    '<span class="countdown_label days">days</span>' +
    "</span>{d>}" +
    '{h<}<span class="countdown_section">' +
    '<span class="countdown_amount hrs"> {hnn} </span>' +
    '<span class="countdown_label hrs">hrs</span>' +
    "</span>{h>}" +
    '<span class="countdown_section">' +
    '<span class="countdown_amount mins"> {mnn} </span>' +
    '<span class="countdown_label mins">min</span>' +
    "</span>" +
    '<span class="countdown_section">' +
    '<span class="countdown_amount secs"> {snn} </span>' +
    '<span class="countdown_label secs">sec</span>' +
    "</span>" +
    "</span>",
  expiryText:
    '<span class="countdown_row">' + '<span class="countdown_section">' + '<span class="countdown_amount mins"> 00 </span>' + '<span class="countdown_label mins">mins</span>' + "</span>" + '<span class="countdown_section">' + '<span class="countdown_amount secs"> 00 </span>' + '<span class="countdown_label secs">secs</span>' + "</span>" + "</span>",
});
