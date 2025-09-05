"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var playwrightConnection = /** @class */ (function () {
    function playwrightConnection() {
    }
    playwrightConnection.prototype.connect1 = function () {
        console.log("connected");
    };
    playwrightConnection.prototype.disconnect = function () {
        console.log("disconnected");
    };
    playwrightConnection.prototype.executeUpdate = function () {
        console.log("execute upadted");
    };
    return playwrightConnection;
}());
var pl = new playwrightConnection;
pl.connect1();
pl.disconnect();
pl.executeUpdate();
