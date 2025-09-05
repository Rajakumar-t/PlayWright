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
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    function Browser(browserName, browserVersion) {
        this.browserName = browserName;
        this.browserVersion = browserVersion;
    }
    Browser.prototype.openURL = function (url) {
        console.log("opening url ".concat(url, " and browser name ").concat(this.browserName, " and version ").concat(this.browserVersion));
    };
    Browser.prototype.closeBrowser = function () {
        console.log("browser ".concat(this.browserName, " and version ").concat(this.browserVersion, " closed "));
    };
    Browser.prototype.navigateBack = function () {
        console.log("navigate basck to ".concat(this.browserName, " and version ").concat(this.browserVersion, "  "));
    };
    return Browser;
}());
exports.Browser = Browser;
var Chrome = /** @class */ (function (_super) {
    __extends(Chrome, _super);
    function Chrome(version) {
        return _super.call(this, "Chrome", version) || this;
    }
    Chrome.prototype.openIncognito = function () {
        console.log("".concat(this.browserName, " -> Opening Incognito window."));
    };
    Chrome.prototype.clearCache = function () {
        console.log("".concat(this.browserName, " -> Clearing Cache window."));
    };
    return Chrome;
}(Browser));
var Edge = /** @class */ (function (_super) {
    __extends(Edge, _super);
    function Edge(version) {
        return _super.call(this, "Edge", version) || this;
    }
    Edge.prototype.takeSnap = function () {
        console.log("".concat(this.browserName, " =========> Taking a SnapShot"));
    };
    Edge.prototype.clearCookies = function () {
        console.log("".concat(this.browserName, " -> Clearing Cookies window."));
    };
    return Edge;
}(Browser));
var Safari = /** @class */ (function (_super) {
    __extends(Safari, _super);
    function Safari(version) {
        return _super.call(this, "Safari", version) || this;
    }
    Safari.prototype.readerMode = function () {
        console.log("".concat(this.browserName, " ====> Enabling Reader Mode."));
    };
    Safari.prototype.fullScreenMode = function () {
        console.log("".concat(this.browserName, " ====> Entering full-screen mode."));
    };
    return Safari;
}(Browser));
var ch = new Chrome("12");
ch.openURL("wwww.bbc.co.uk");
ch.openIncognito();
ch.clearCache();
ch.closeBrowser();
var ed = new Edge("14");
ed.openURL("www.google.co.uk");
ed.takeSnap();
ed.clearCookies();
ed.closeBrowser();
var sf = new Safari("234");
sf.openURL("www.bbc.co.uk/iplayer");
sf.readerMode();
sf.fullScreenMode();
sf.closeBrowser();
