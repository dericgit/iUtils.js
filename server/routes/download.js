var express = require('express');
var router = express.Router();
var process = require('child_process');
var fs = require('fs');
var path = require('path');

/* 根据参数个性化生成Utils.js */
router.get('/', function (req, res, next) {

    var childProcess = process.exec('gulp',
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
            } else {
                console.log(stdout);
            }
        });

    childProcess.on("close", function () {

        var source = fs.createReadStream(path.join(__dirname, '../public/build/Utils.js'));
        res.writeHead(200, {
            'Content-Type': 'application/force-download',
            'Content-Disposition': 'attachment; filename=Utils.js',
            'refresh': '3;URL=/'
        });

        source.pipe(res);

        // 重置字符串
        fs.writeFileSync(path.join(__dirname, '../../config.js'), 'module.exports=[];');

    });


});

module.exports = router;

