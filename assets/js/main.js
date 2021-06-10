$(document).ready(function(){
  menuMobile.init();
})


// menu mobile
var menuMobile = {
  init: function(){
    this.menuMobile();
  },
  menuMobile: function() {
    var menu = $(".menu-icon");
    var headerMenu = $(".header-menu");
    menu.click(function() {
      headerMenu.toggleClass("active");
    });
  }
}
