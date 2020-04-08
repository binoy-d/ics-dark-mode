window.onload = function(){
  console.log("hello!");
  var link = document.createElement( "link" );
  link.href = "https://www.binoy.co/files/dark_mode.css"
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName( "head" )[0].appendChild( link );
}