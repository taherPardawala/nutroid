var events = require('events');
var eventEmitter = new events.EventEmitter();

function clientObject(config) {

    let instance = {
        events: {}
    };

    var socket = require('socket.io-client')(config.url, {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: Infinity
    });
    socket.on('connect', function () {
        socket.emit('userid', {
            user: config.userId
        })
    });

    socket.on('reply', function (data) {
        if (data.type == 'text') {
            instance.trigger('text', "<TEST_TEXT>");
        } else if (data.type == 'carousel') {
            instance.trigger('carousel', "<TEST_CAROUSEL>");
        } else if (data.type == 'quickreply') {
            instance.trigger('quickreply', "<TEST_QUICKREPLY>");
        }
    });

    instance.defineClient = function () {
        let client = {};
        client.say = function (text, cb) {
            socket.emit('say', 'asdasd');
            if (cb) cb(null);
        }

        return client;
    }

    instance.on = function (event, cb) {
        var events = event.split(/\,/g);
        for (var e in events) {
            if (!instance.events[events[e]]) {
                instance.events[events[e]] = [];
            }
            instance.events[events[e]].push(cb);
        }
    }

    instance.trigger = function (event, data) {
        if (instance.events[event]) {
            for (var e = 0; e < instance.events[event].length; e++) {
                var res = instance.events[event][e].call(this, data);
                if (res === false) {
                    return;
                }
            }
        } else {}
    };

    return instance;
}

module.exports = clientObject;
