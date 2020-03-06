
//const fs = require('fs');
const SerialPort = require('serialport')
let test = {
    createCustomer: function (path) {
        test1(path);

    }
};

function test1(path){
/*    console.log(path)
    fs.writeFile("/tmp/test", "Hey there!", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

// Or
    fs.writeFileSync('/tmp/test-sync');*/
    const port = new SerialPort('/dev/tty-usbserial1', function (err) {
        if (err) {
            return console.log('Error: ', err.message)
        }
    });

    port.write('main screen turn on', function(err) {
        if (err) {
            return console.log('Error on write: ', err.message)
        }
        console.log('message written')
    });
}


module.exports = test;
