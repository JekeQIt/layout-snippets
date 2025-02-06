var language = "es-CL";
$.countdown.setDefaults($.countdown.regional[language]);
$("#defaultCountdown").countdown("option", {
  layout:
    '<span class="countdown_row ">' +
    '{d<}<span class="countdown_section days">' +
    '<span class="countdown_amount days">{dnn} </span>' +
    '<span class="countdown_label days">Días</span>' +
    "</span>" +
    '<span class="colon">:</span>{d>}' +
    '{h<}<span class="countdown_section">' +
    '<span class="countdown_amount hrs"> {hnn} </span>' +
    '<span class="countdown_label hrs">Horas</span>' +
    "</span>" +
    '<span class="colon">:</span>{h>}' +
    '<span class="countdown_section">' +
    '<span class="countdown_amount mins"> {mnn} </span>' +
    '<span class="countdown_label mins">Minutos</span>' +
    "</span>" +
    '<span class="colon">:</span>' +
    '<span class="countdown_section">' +
    '<span class="countdown_amount secs"> {snn} </span>' +
    '<span class="countdown_label secs">Segundos</span>' +
    "</span>" +
    "</span>",
  expiryText:
    '<span class="countdown_row">' +
    '<span class="countdown_section">' +
    '<span class="countdown_amount mins"> 00 </span>' +
    '<span class="countdown_label mins">Minutos</span>' +
    "</span>" +
    '<span class="colon">:</span>' +
    '<span class="countdown_section">' +
    '<span class="countdown_amount secs"> 00 </span>' +
    '<span class="countdown_label secs">Segundos</span>' +
    "</span>" +
    "</span>",
});
