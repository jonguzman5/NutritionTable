$( document ).ready(function() {
  var getRequest = function(param){
    return $.ajax({
      url: 'http://localhost:8080/api/npmPackages',
      method: "get"
    }).success(function(data){
        console.log(data);
        $('body').append('<h1>' + data.title + '</h1>')
        $('body').append('<h3>'+ data.text + '</h3>')

        for(var i in data.packages){
        var div =$('<div>')
        var h5 =$('<h5>' + data.packages[i].name + '</h5>')
        var p = $('<p>' + data.packages[i].category + '</p>')
        var img = $('<img src =' + data.packages[i].img + ' />')
        $('body').append(div)
        $('div').append(h5)
        $('div').append(p)
        $('div').append(img)
      }
    })
  };
  getRequest();
});
