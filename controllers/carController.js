const controller = {};
const fs = require('fs');
const request = require('request');

controller.list1 = (req, res) => {
    request('https://www.carqueryapi.com/api/0.3/?cmd=getMakes&year=2018', {
            async: true
        }, (err, data) => {

            if (err) console.log(err);

            makes = JSON.parse(data.body)

            res.render("index", {
                data: makes.Makes
            });
        }

    )
};
controller.list2 = (req, res) => {
    request('https: //www.carqueryapi.com/api/0.3/?cmd=getModels&make=' + req.body.carMakes, {
            async: true
        }, (err, data2) => {

            if (err) console.log(err);

            models = JSON.parse(data2.body)

            res.send(models);
        }

    )
};
// controller.getinfo = (req, res) => {
//     fs.readFile("users.json", "utf8", (err, file) => {
//         if (err) console.log(err);
//         console.log(file);
//         data = JSON.parse(file).filter(x => {
//             return x.id == req.params.id;
//         });

//         res.send(data);
//     });
// };
module.exports = controller;