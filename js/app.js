// DOMContentLoaded is fired once the document has been loaded and parsed,
// but without waiting for other external resources to load (css/images/etc)
// That makes the app more responsive and perceived as faster.
// https://developer.mozilla.org/Web/Reference/Events/DOMContentLoaded
/* window.addEventListener('DOMContentLoaded', function() {

  // We'll ask the browser to use strict code to help us catch errors earlier.
  // https://developer.mozilla.org/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
  'use strict';

  var translate = navigator.mozL10n.get;

  // We want to wait until the localisations library has loaded all the strings.
  // So we'll tell it to let us know once it's ready.
  navigator.mozL10n.once(start);

  // ---

  function start() {

    var message = document.getElementById("adhan").innerHTML('message');

    // We're using textContent because inserting content from external sources into your page using innerHTML can be dangerous.
    // https://developer.mozilla.org/Web/API/Element.innerHTML#Security_considerations
    message.textContent = translate('message');

  }

}); */

function prayerName(prayer) {
	if (prayer == adhan.Prayer.Fajr) {
		return "Fajr";
	} else if (prayer == adhan.Prayer.Sunrise) {
		return "Sunrise";
	} else if (prayer == adhan.Prayer.Dhuhr) {
		return "Dhuhr";
	} else if (prayer == adhan.Prayer.Asr) {
		return "Asr";
	} else if (prayer == adhan.Prayer.Maghrib) {
		return "Maghrib";
	} else if (prayer == adhan.Prayer.Isha) {
		return "Isha";
	} else if (prayer == adhan.Prayer.None) {
		return "None";
	}
}

var date = new Date();
var coordinates = new adhan.Coordinates(24.90868, 91.850067);
var params = adhan.CalculationMethod.Karachi();
params.madhab = adhan.Madhab.Shafi;
var prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
var formattedTime = adhan.Date.formattedTime;

document.getElementById("time").innerHTML = 'Prayer times for ' + date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + '\n';
document.getElementById("fajr").innerHTML = 'Fajr: ' + formattedTime(prayerTimes.fajr, +6) + '\n';
document.getElementById("sunrise").innerHTML = 'Sunrise: ' + formattedTime(prayerTimes.sunrise, +6) + '\n';
document.getElementById("duhur").innerHTML = 'Dhuhr: ' + formattedTime(prayerTimes.dhuhr, +6) + '\n';
document.getElementById("asr").innerHTML = 'Asr: ' + formattedTime(prayerTimes.asr, +6) + '\n';
document.getElementById("maghrib").innerHTML = 'Maghrib: ' + formattedTime(prayerTimes.maghrib, +6) + '\n';
document.getElementById("isha").innerHTML = 'Isha: ' + formattedTime(prayerTimes.isha, +6) + '\n';

document.getElementById("current").innerHTML = '\nCurrent Prayer: ' + prayerName(prayerTimes.currentPrayer()) + '\n';
