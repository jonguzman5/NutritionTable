$(document).ready(function(){
  console.log('load complete');
  var $body = $('body');

var clickHandler = function(){
  $('#click-me').click(function(bla){
    getResults(bla);
  });
}

  // getResults function goes here
 var getResults = function(){
    $('.item').remove();
    var query = $('#itunes-search').val();
    return $.ajax({
      url: 'https://itunes.apple.com/search',
      method: 'get',
      dataType: 'jsonp',
      data : { term: query, media: 'music', entity: 'album', limit: 25}
    }).done(function(data){
        result = data.results;
        $results = $('<ul>');
        var $item, $thumbnail, $description, $artist, $album, $price;
        result.forEach(function(){
            var $item = ('<li>').addClass('item')
            var $thumbnail = ('<img>').addClass('albumCover')
            var $description = ('<div>')
            var $artist = ('<p>').addClass('artist')
            var $album = ('<p>').addClass('album')
            var $price = ('<p>').addClass('price')
            $thumbnail.attr('src', '')
            $artist.text()
            $album.text()
            $price.text()
            $description.append($artist);
            $description.append($album);
            $description.append($price);
            $item.append($thumbnail);
            $item.append($description);
            $results.append($item);
        })
            $body.append($results);
    });
  };
  getResults();

  // Event Handlers go here

});
