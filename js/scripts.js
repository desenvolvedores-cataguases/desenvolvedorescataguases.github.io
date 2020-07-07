$(document).ready(function() {
    getJsonMeetup();
    getJsonDiscord();
});

function getJsonMeetup() {
    $.getJSON('https://cors-anywhere.herokuapp.com/https://www.meetup.com/GDG-Cataguases/events/json/')
        .done(function(result) {
            var eventos = "";
            result.forEach(function(item) {
                var date = new Date(item.local_time);
                var description = item.descr;

                if (description.length < 250) {
                    description = description.substring(0, description.length);
                } else {
                    description = description.substring(0, 250) + " ...";
                }

                eventos += "<div class=\"mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp\">" +
                    "<div class=\"mdl-card__title\">" +
                    "<h4 class=\"mdl-card__title-text\">" +
                    "<b>" + item.title + "</b> " +

                    "</div>" +
                    "<div class=\"mdl-card__supporting-text\">" +
                    "<span class=\"mdl-typography--font-light mdl-typography--subhead\">" +
                    "<span class=\"mdl-chip\"><span class=\"mdl-chip__text mdl-cell--4-col \"> <b>" + formattedDate(date) + "</b></span> " +
                    "</span>    " +
                    "<span class=\"mdl-chip\"><span class=\"mdl-chip__text mdl-cell--4-col \"> " + formattedInscritos(item.confirmCount) + "</span> " +
                    "</span>" +
                    description + "</div>" +
                    "<div class=\"mdl-card__actions\">" +
                    "<a class=\"mdl-button mdl-js-button mdl-button--accent mdl-js-ripple-effect\" href=\" " +
                    item.event_url + " \">Se inscreva no Meetup<i class=\"material-icons\">chevron_right</i></a></div>" +
                    "</div>";
            })

            if (result.length == 0) {
                eventos =
                    "<div class=\"mdl-cell--12-col theme-customized-section-text\"><div class=\"theme-customized-section\"\>" +
                    "<h4 class=\"mdl-typography--font-light\">Por enquanto, não temos um evento marcado, mas fique de olho no nosso Meetup!</h4>" +
                    "<div class=\"mdl-typography--font-light mdl-typography--display-3-color-contrast\">¯\\ (ツ) /¯</div>" +
                    "</div></div>";
            }

            $("#dinamic_events").replaceWith(eventos);
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });

}

function formattedDate(d = new Date) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${day}/${month}/${year}`;
}

function formattedInscritos(total = 0) {
    switch (total) {
        case 0:
            return ""
        case 1:
            return total + " inscrito ";
        default:
            return total + " inscritos ";
    }
}

function getJsonDiscord() {
    $.getJSON('https://cors-anywhere.herokuapp.com/https://discord.com/api/guilds/725703764035633293/widget.json')
        .done(function(result) {

            $("#data-badge").replaceWith("<i class=\"material-icons mdl-badge mdl-badge--overlap\" title=\"Online\" data-badge=\" " +
                result.presence_count + " \">group</i>");
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ", " + error;
            console.log("Request Failed: " + err);
        });

}
