function cobaLoad() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let result = JSON.parse(this.responseText);
      console.log(result);
    }
  };
  xhttp.open(
    "GET",
    "https://indodax.com/tradingview/history?symbol=ETHIDR&resolution=15&from=1611145179&to=1611154179",
    true
  );
  xhttp.send();
}

function cobaLoad1() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let result = JSON.parse(this.responseText);
      console.log(result);
    }
  };
  xhttp.open(
    "GET",
    "https://indodax.com/tradingview/history?symbol=ADAIDR&resolution=15&from=1611145179&to=1611154179",
    true
  );
  xhttp.send();
}
// $(document).ready(function () {
//   $.get("http://www.gravatar.com/" + userMd5Hash + ".json", function (data) {
//     /* Operation to parse JSON (emitted). */
//     $("#" + userMd5Hash + "-accounts").append(/* ... */);
//   });
// });

// //callback
// $(document).ready(function () {
//   $.getJSON(
//     "http://www.gravatar.com/" + userMd5Hash + ".json?callback=?",
//     function (data) {
//       /* Operation to parse JSON (emitted). */
//       $("#" + userMd5Hash + "-accounts").append(/* ... */);
//     }
//   );
// });
