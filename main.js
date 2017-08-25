$(function(){
  var quote = {
    hu: "Nem az a szabadság, hogy azt teheted, amit akarsz, hanem hogy nem kell megtenned, amit nem akarsz.",
    en: "The freedom of Mankind does not lie in the fact that we can do what we want, but that we do not have to do that which we do not want."
  }
  
  $(".langChanger li").on('click', function(evt){
    var id = evt.target.text.toLowerCase();
    $("#quote").text(quote[id]);
  })
});