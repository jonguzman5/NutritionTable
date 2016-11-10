$(function(){
  console.log('script loaded.')

  var makeCall = function(){
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json'
    }).success(function(data) {
        // console.log(data.results[0]);
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

    $('#name').hover(function(){
      $('#smalltext').text("My name is")
      $('#bigtext').text(name)
    })

    $('#email').hover(function(){
      $('#smalltext').text("My email is")
      $('#bigtext').text(email)
    })

    $('#birthdate').hover(function(){
      $('#smalltext').text("My birthday is")
      $('#bigtext').text(dob)
    })

    $('#address').hover(function(){
      $('#smalltext').text("My address is")
      $('#bigtext').text(address)
    })

    $('#phone').hover(function(){
      $('#smalltext').text("My phone number is")
      $('#bigtext').text(phone)
    })

    $('#password').hover(function(){
      $('#smalltext').text("My password is")
      $('#bigtext').text(pw)
    })
  }

  $('button').click(function(){
    makeCall()
  })

})