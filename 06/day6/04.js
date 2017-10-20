var fs = require('fs');
var gm = require('gm');
// crop(141,96,152,181)为裁剪,宽高,xy
gm("./danny.jpg").crop(141,96,152,181).write("./2.jpg",function(err){

});