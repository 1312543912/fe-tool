var fs = require('fs');
var setOnline = [
    {
        type:'get',
        name:'home',
        url:'/home',
    }
]

for (let i = 0; i < setOnline.length; i++) {
    (function() {
        var name = setOnline[i].name;

        setOnline[i].moc = function(req, res) {
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            fs.readFile(`./moc/${name}.json`, function (err, data) {
                if (err) throw err;

                res.json(JSON.parse(data));
            });
        };
    })(i);
}

exports.setOnline = setOnline;