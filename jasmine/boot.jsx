$.global.setTimeout = function (cb, timeToWait) {
    $.sleep(timeToWait);
    cb();
};

$.global.clearTimeout = function () {};

function extend(destination, source) {
    for (var property in source) destination[property] = source[property];
    return destination;
}

// *************************************************************************************

#include "jasmine-2.6.4.js"
#include "jsxreporter.jsx"

// *************************************************************************************

$.global.jasmine = jasmineRequire.core(jasmineRequire);
var env = jasmine.getEnv();
var jasmineInterface = jasmineRequire.interface(jasmine, env);
extend($.global, jasmineInterface);
clearConsole();
var JsxReporter = jasmineRequire.JsxReporter();
var reporter = new JsxReporter({
    onComplete: function () {
        // $.writeln('FINISHED!!!');
    }
});
// env.addReporter(jasmineInterface.jsApiReporter);
env.addReporter(reporter);


// *************************************************************************************

function runJasmine () {
    env.execute();
}

function clearConsole() {
    /*eslint-disable no-undef*/
    if (app.name === 'ExtendScript Toolkit') {
        app.clc();
    } else {
        var estk = BridgeTalk.getSpecifier('estoolkit');
        if (estk) {
            var bridgeTalk = new BridgeTalk;
            bridgeTalk.target = estk;
            bridgeTalk.body = 'app.clc()';
            bridgeTalk.send();
        }
    }
}
