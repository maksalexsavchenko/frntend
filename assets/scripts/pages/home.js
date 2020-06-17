/* eslint-disable */

let home = {
  init() {
    this.menu();
  },
  menu() {
    console.log('menu');
  }
}

$(document).ready(function () {
  home.init();
})

$(document).ready(function () {
  $('#login-btn').on('click', function () {
    $('#login-form').show()
    $('#blurrie-cube').css({'filter':'blur(5px)'})
    $('#blurrie-head').css({'filter':'blur(5px)'})
    $('#blurrie-text').css({'filter':'blur(5px)'})
  })
})

$(document).ready(function () {
  $('#close-form').on('click', function () {
    $('#login-form').hide()
    $('.form-login').show()
    $('.form-registration').hide()
    $('.form-forgot').hide()
    $('.form').animate({
      height: "28em",
    })
    $('#blurrie-cube').css({'filter':'blur(0px)'})
    $('#blurrie-head').css({'filter':'blur(0px)'})
    $('#blurrie-text').css({'filter':'blur(0px)'})
  })
})

$(document).ready(function () {
  $('#reg-btn').on('click', function () {
    $('.form').animate({
      height: "30em",
    })
    $('.form-login').hide()
  $('.form-registration').show()
  })

})


$(document).ready(function () {
  $('.to-login').on('click', function () {
    $('.form-registration').hide()
    $('.form-login').show()
    $('.form').animate({
      height: "28em",
    })
  })

})

$(document).ready(function () {
  $('.btn-remember-pas').on('click', function () {
    $('.form-registration').hide()
    $('.form-forgot').hide()
    $('.form-login').show()
    $('.form').animate({
      height: "28em",
    })
  })

})

$(document).ready(function () {
  $('.forgot').on('click', function () {
    $('.form-registration').hide()
    $('.form-login').hide()
    $('.form').animate({
      height: "25em",
    })
    $('.form-forgot').show()
  })

})

