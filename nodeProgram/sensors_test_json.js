var sensorLib = require('node-dht-sensor');
    fs = require('fs');

var dht_sensor = {
    initialize: function () {
        return sensorLib.initialize(22, 4);
    },
    read: function () {
        var readout = sensorLib.read();
        console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' +
            'humidity: ' + readout.humidity.toFixed(2) + '%');
        var tstr = readout.temperature.toFixed(2) + "C"
        var hstr = readout.humidity.toFixed(2) + "%"

        var sObj = {"temperature":tstr , "humidity":hstr} ;

        var json = JSON.stringify(sObj);

        fs.appendFile('sensorlog.json',json, (err) => {
            if(err) throw err;
            console.log('appended');
            
        }
                     );
        setTimeout(function () {
            dht_sensor.read();
        }, 2000);
    }
};

if (dht_sensor.initialize()) {
    dht_sensor.read();
} else {
    console.warn('Failed to initialize sensor');
}
