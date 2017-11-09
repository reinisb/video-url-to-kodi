$(document).ready(function (){ // document ready event so that all document would be loaded before the script is run.

  var url = $('#url'); // es nodefinēju jQuery variable, kas ir tas pats html elements ar id "url".

  $('#submitform').submit(function(event) { // takes html element with id "send" and adds "click" method, which then executes script when user clicks on that specific html element.
    event.preventDefault(); //šis nodrošina to, ka html forma netiek submitota klasiskajā izpratnē.
    var payload_raw = '{"jsonrpc":"2.0","id":"1","method":"Player.Open","params":{"item":{"file":"value_placeholder"}}}'; // es izveidoju javascript variable payload, kurš satur JSON objektu ar vairākiem properties.
    var payload = payload_raw.replace('value_placeholder',url.val()) //nolasu formas attribute vērtību un ar to aizstāju placeholderi stringā
    $.get("http://osmc.local:80/jsonrpc","request=" + encodeURIComponent(payload),null,"jsonp"); //Ar GET request kodijam nogādāju info par to, ko vajag darīt. jsonp datatype vajag, jo citādāk būt problēmas ar same origin policy.

  });

});


///this is a test aasfss
