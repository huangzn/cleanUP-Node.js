var fs = require('fs');
var gm = require('gm');

gm('./danny.jpg')
    .resize(50, 50,"!")//重置图片的大小，！表示强制为50，50
    .write('./danny2.jpg', function (err) {
        if (err) {
            console.log(err);
        }
    });