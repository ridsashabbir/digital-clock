displayTime = () => {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    // let session = document.getElementById('session');

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

    // set AM and PM accordingly

    if( hrs >= 12){
        sessions.innerHTML = "PM";
    }
    else{
        sessions.innerHTML = "AM";
    }

    // change time format

    if(hrs >= 12){
        hours.innerHTML = hrs - 12;
    }


};

setInterval(displayTime, 1000);