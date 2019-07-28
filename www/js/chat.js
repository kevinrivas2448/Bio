var firebaseConfig = {
    apiKey: "AIzaSyBJ95U4adXLdQMjpr1U30AAQkD_XjOiJwI",
    authDomain: "rsapp-eef93.firebaseapp.com",
    databaseURL: "https://rsapp-eef93.firebaseio.com",
    projectId: "rsapp-eef93",
    storageBucket: "rsapp-eef93.appspot.com",
    messagingSenderId: "702090470634",
    appId: "1:702090470634:web:6ab6ccf41d328846"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var txtNombre = document.getElementById('nombre');
  var txtMensaje = document.getElementById('mensaje');
  var btnEnviar = document.getElementById('btnEnviar');

  btnEnviar.AddEventListener("click", function() {
    var nombrea = txtNombre.value;
    alert(nombrea);
});