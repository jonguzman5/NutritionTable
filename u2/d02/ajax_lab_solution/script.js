$(function(){
  console.log('script loaded.')

  var makeCall = function(){
    $.ajax({
      url: 'https://randomuser.me/api/'
    }).success(function(data) {
      // console.log(data);
      getData(data.results[0])
    })
  }

  var getData = function(data){
    var first_name = data.name.first
    var last_name = data.name.last
    var name = first_name + " " + last_name
    var email = data.email
    var dob = data.dob
    var street = data.location.street
    var city = data.location.city
    var state = data.location.state
    var address = street + ", " + city + ", " + state
    var phone = data.phone
    var pw = data.login.password
    var img_url = data.picture.large

    manipulateDom(name,email,dob,address,phone,pw,img_url)
  }

  var manipulateDom = function(name,email,dob,address,phone,pw,img_url){
    $('#bigtext').text(name)
    $('#photo').css('background-image',('url('+img_url+')'))
    $('#name').attr('data-store',name)
    $('#email').attr('data-store',email)
    $('#birthdate').attr('data-store',dob)
    $('#address').attr('data-store',address)
    $('#phone').attr('data-store',phone)
    $('#password').attr('data-store',pw)


  }

  $('button').click(function(){
    makeCall()
  })


  var addEventListeners = function(){
    $('#name').hover(function(){
      $('#smalltext').text("My name is")
      $('#bigtext').text($(this).attr('data-store'))
    })

    $('#email').hover(function(){
      $('#smalltext').text("My email is")
      $('#bigtext').text($(this).attr('data-store'))
    })

    $('#birthdate').hover(function(){
      $('#smalltext').text("My birthday is")
      $('#bigtext').text($(this).attr('data-store'))
    })

    $('#address').hover(function(){
      $('#smalltext').text("My address is")
      $('#bigtext').text($(this).attr('data-store'))
    })

    $('#phone').hover(function(){
      $('#smalltext').text("My phone number is")
      $('#bigtext').text($(this).attr('data-store'))
    })

    $('#password').hover(function(){
      $('#smalltext').text("My password is")
      $('#bigtext').text($(this).attr('data-store'))
    })

  }()


  makeCall()

})