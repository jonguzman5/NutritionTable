// $(function(){
//   console.log('alive.')

//   $('#edituser').on('submit',function(e){
//     e.preventDefault()

//     id = $(this).attr('data-id')
//     name = $(this).children('#name').val()
//     email = $(this).children('#email').val()
//     password = $(this).children('#password').val()

//     user = {id:id,name:name,email:email,password:password}
//     // debugger
//     console.log('clicked.')

//     $.ajax({
//       "url": "http://localhost:3000/users/"+id,
//       "method": "PUT",
//       "data": user,
//       "success": function(data){
//         console.log('ajax call was good.')
//         debugger
//       }
//     })

//   })


//   $('#createuser').on('submit',function(e){
//     e.preventDefault()

//     name = $(this).children('#name').val()
//     email = $(this).children('#email').val()
//     password = $(this).children('#password').val()

//     user = {name:name,email:email,password:password}
//     // debugger
//     $.ajax({
//       "url": "http://localhost:3000/users",
//       "method": "POST",
//       "data": user,
//       "success": function(data){
//         console.log('ajax call was good.')
//         window.location.replace("http://localhost:3000/users")
//       }
//     })
//   })

//   $('.deleteuser').on('click',function(e){
//     id = $(this).attr('data-id')
//     div = $(this).parent()// debugger
//     $.ajax({
//       "url": "http://localhost:3000/users/"+id,
//       "method": "DELETE",
//       "success": function(data){
//         console.log('ajax call was good.')
//         $(div).remove();
//       }
//     })
//   })


// })