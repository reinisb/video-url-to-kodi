$(document).ready(function (){ // document ready event so that all document would be loaded before the script is run.

  var url = $('#url'); // es nodefinēju jQuery variable, kas ir tas pats html elements ar id "url".

  $('#send').click(function() { // takes html element with id "send" and adds "click" method, which then executes script when user clicks on that specific html element.

    var payload_raw = '{"jsonrpc":"2.0","id":"1","method":"Player.Open","params":{"item":{"file":"value_placeholder"}}}'; // es izveidoju javascript variable payload, kurš satur JSON objektu ar vairākiem properties.
    var payload = payload_raw.replace('value_placeholder',url.val()) //nolasu formas attribute vērtību un ar to aizstāju placeholderi stringā

    $.get("http://osmc.local:80/jsonrpc","request=" + encodeURIComponent(payload),null,"jsonp");

  });

//    $.ajax({ // palaižu ajax requestu...būtībā var laist arī jquery.get(), kas manā gadījumā būtu tas pats https://stackoverflow.com/questions/3870086/difference-between-ajax-and-get-and-load
//      method: 'GET', // KODI var nosūtīt lietu gan ar POST (intuitīvi), gan ar GET (ne intuitīvi) - es sūtu ar GET, jo ar POST iekš jquery ir čakars.
//      contentType:'application/json; charset=utf-8', //šis laikam nav obligāti
//      url: 'http://osmc.local:80/jsonrpc', //mana kodi URL
//      data: 'request=' + encodeURIComponent(payload), //to payload vajag vienkārši kā stringu, jo tā prasa JSON-RPC API http://kodi.wiki/?title=JSON-RPC_API#GET Tāpat arī to encodeURIComponent vajag tāpēc, jo bez tā garu stream URL visā garumā neaizsūtīs uz kodi (atkarīgs no browsera).
//      dataType: 'jsonp', //vajag šo jsonP, lai varētu veikt cross-domain request un nebūtu problēmas ar same origin policy...no localhost uz raspberiju osmc.local
//    });

});
