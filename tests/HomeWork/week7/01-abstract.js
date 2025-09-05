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
exports.canarabank = void 0;
var canarabank = /** @class */ (function () {
    function canarabank() {
    }
    canarabank.prototype.recordPaymentDetails = function (method) {
        console.log("Canara bank payment ".concat(method));
    };
    return canarabank;
}());
exports.canarabank = canarabank;
var Amazon = /** @class */ (function (_super) {
    __extends(Amazon, _super);
    function Amazon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Amazon.prototype.cashOnDelivery = function () {
        this.recordPaymentDetails('cash');
        console.log('cash paymnent');
    };
    Amazon.prototype.upiPayments = function () {
        this.recordPaymentDetails('UPI');
        console.log('upi payment');
    };
    Amazon.prototype.cardPayments = function () {
        this.recordPaymentDetails('card');
        console.log('card paymet');
    };
    Amazon.prototype.internetBanking = function () {
        this.recordPaymentDetails('internet');
        console.log('internet transfer');
    };
    return Amazon;
}(canarabank));
var az = new Amazon;
az.cardPayments();
az.cashOnDelivery();
az.internetBanking();
az.upiPayments();
