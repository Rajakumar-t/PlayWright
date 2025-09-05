"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlConnection = void 0;
var MySqlConnection = /** @class */ (function () {
    function MySqlConnection() {
    }
    MySqlConnection.prototype.connectionmethod = function (method) {
        console.log("the connection method ".concat(method));
    };
    return MySqlConnection;
}());
exports.MySqlConnection = MySqlConnection;
var PlaywrightConnection = /** @class */ (function (_super) {
    __extends(PlaywrightConnection, _super);
    function PlaywrightConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlaywrightConnection.prototype.connect = function () {
        this.connectionmethod('connected');
        // console.log(`its connected`);
    };
    PlaywrightConnection.prototype.disconnect = function () {
        this.connectionmethod('disconnect');
        // console.log(`its disconnect`);
    };
    PlaywrightConnection.prototype.executeQuery = function () {
        console.log("method executeQuery executed");
    };
    PlaywrightConnection.prototype.executeUpdate = function () {
        this.connectionmethod('executeUpdate');
        // console.log(`its executeUpdate`);
    };
    return PlaywrightConnection;
}(MySqlConnection));
var pc = new PlaywrightConnection;
pc.connect();
pc.disconnect();
pc.executeUpdate();
pc.executeQuery();
