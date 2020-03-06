const fs = require('fs');

let test = {
    createCustomer: function (path) {
        test(path);

    }
};
function test(path){
    console.log(path)
    fs.writeFile("/tmp/test", "Hey there!", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

// Or
    fs.writeFileSync('/tmp/test-sync');
}
module.exports = test;
