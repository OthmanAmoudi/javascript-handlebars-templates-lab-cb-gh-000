function init() {
  //put any page initialization/handlebars initialization here
  var target = document.getElementById('recipe-form-template').innerHTML;
  var template = handlebars.compile(target);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
