function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function populateCalendar() {
    var tableBody = document.getElementById("calendario").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var currentDay = today.getDate();

    var daysInMonth = getDaysInMonth(year, month);

    var dayCounter = 1;

    for (var i = 0; i < 6; i++) {
        var row = tableBody.insertRow(i);

        for (var j = 0; j < 7; j++) {
            var cell = row.insertCell(j);

            if (i === 0 && j < new Date(year, month, 1).getDay()) {
                cell.innerHTML = '';

            } else if (dayCounter <= daysInMonth) {
                cell.innerHTML = dayCounter;

                // examples
                if (dayCounter === currentDay) {
                    $(cell).addClass('active');
                }

                if (dayCounter === 6) {
                    $(cell).addClass('active');
                }

                if (dayCounter === 9) {
                    $(cell).addClass('active');
                }

                dayCounter++;
            }
        }
    }
}

function showModal() {
    var $cell = $(this);
    var $modal = $("#infoModal");

    $modal.css({
        top: $cell.offset().top + 75,
        left: $cell.offset().left + $cell.outerWidth() - 100
    });

    $modal.show();
}

function hideModal() {
    $("#infoModal").hide();
}
$(document).ready(function () {
    populateCalendar();

    $("td.active").on("mouseenter", showModal);
    $("td.active").on("click", showModal);
    $("td.active").on("mouseleave", hideModal);
});