const dateHtml = document.getElementById('date');

window.onload = date=() => {
    // var inputDate = document.querySelector("input[type='date']");
    var today = new Date();
    var year = today.getFullYear();
    var month = (today.getMonth() + 1).toString().padStart(2, '0');
    var day = today.getDate().toString().padStart(2, '0');
    var formattedDate = year + '-' + month + '-' + day;
    // inputDate.value = formattedDate;
    return formattedDate;
};

dateHtml.value = date();

window.onload = function() {
    var inputTime = document.querySelector("input[type='time']");
    var todayTime = new Date();
    var hoursTime = todayTime.getHours().toString().padStart(2, '0');
    var minutesTime = todayTime.getMinutes().toString().padStart(2, '0');
    var formattedTime = hoursTime + ':' + minutesTime;
    inputTime.value = formattedTime;
};

