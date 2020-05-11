// This is a JavaScript file
function teste(){
//ação
}
$(document).on("click", "#btn1", function(){
  navigator.notification.alert("Alerta tipo 1",teste,'Titulo','Sair');
});

$(document).on("click", "#btn2", function(){
  function onConfirm(buttonIndex){
    if(buttonIndex==1){
      navigator.notification.alert("Escolheu A");
    }
    else{
      navigator.notification.alert("Escolheu B");
    }
    
  }
  navigator.notification.confirm("Escolha  a ou b ",onConfirm,'Escolha',['A','B']);
});


$(document).on("click", "#btn3", function(){
  navigator.notification.beep(3);
});


$(document).on("click", "#btn4", function(){
  navigator.vibrate(3000);
});

function mostraMapa(Lat, Long){
  L.mapquest.key = 'Hln9AqhaAHmkWJ9qjDJ31G3GZUyhlGAi';

        var map = L.mapquest.map('map', {
          center: [Lat, Long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
        });

          L.marker([Lat, Long], {
          icon: L.mapquest.icons.marker(),
          draggable: false
        }).bindPopup().addTo(map);

        map.addControl(L.mapquest.control());
}



$(document).on("click", "#btn5", function(){
  var onSuccess = function(position) {
    mostraMapa(position.coords.latitude, position.coords.longitude)
       
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

