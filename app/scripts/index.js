var $ = require('jquery');
var _ = require('underscore');
var handlebars = require('handlebars');

// Step 1 get the template and convert to a js function
var source = $('#photo-album').html();
var template = handlebars.compile(source);

// Step 2 Call the function with a context object
// Note: object properties should match the template placeholders
var context = {
  'title': 'Cat Album',
  'albumNumber': '11',
  'image': 'http://unsplash.it/200/200',
  'photos': [{'photoTitle': 'Fluffy'}, {'photoTitle': 'Brown'}, {'photoTitle': 'Black'}]
};
$('#album-container').append(template(context));

// Got an array?
var albums = [
  {
    'title': 'Cat Album',
    'albumNumber': '12',
    'image': 'http://unsplash.it/200/200',
    isFav: true,
    'photos': [{'photoTitle': 'Fluffy'}, {'photoTitle': 'Brown'}, {'photoTitle': 'Black'}]
  },{
    'title': 'Dog Album',
    'albumNumber': '234',
    'image': 'http://unsplash.it/201/201',
    isFav: false,
    'photos': [{'photoTitle': 'Fluffy'}, {'photoTitle': 'Brown'}, {'photoTitle': 'Black'}]
  }
];

_.each(albums, function(photoAlbum){
  $('#album-container').append(template(photoAlbum));
});
