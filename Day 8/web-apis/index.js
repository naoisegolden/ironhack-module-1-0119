
function getPosition() {
    if ("geolocation" in navigator) {
        /* geolocation is available */
    } else {
        console.error("Can't geolocate");
        return;
    }

    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude, position.coords.longitude);
        var { latitude, longitude } = position.coords;

        var url = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&size=500x500`

        document.querySelector("img").setAttribute("src", url);
    });
}

if ('speechSynthesis' in window) {
    // Synthesis support. Make your web apps talk!
}

if ('SpeechRecognition' in window) {
    // Speech recognition support. Talk to your apps!
}

function speakOut(message) {
    var msg = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(msg);
}