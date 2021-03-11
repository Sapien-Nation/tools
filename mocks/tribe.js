"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTribes = exports.mockTribe = void 0;
// ../fixtures
var tribe_1_json_1 = __importDefault(require("../fixtures/tribe_1.json"));
var tribe_2_json_1 = __importDefault(require("../fixtures/tribe_2.json"));
var tribe_3_json_1 = __importDefault(require("../fixtures/tribe_3.json"));
var tribe_4_json_1 = __importDefault(require("../fixtures/tribe_4.json"));
var channel_1_json_1 = __importDefault(require("../fixtures/channel_1.json"));
var channel_2_json_1 = __importDefault(require("../fixtures/channel_2.json"));
var channel_3_json_1 = __importDefault(require("../fixtures/channel_3.json"));
var channel_4_json_1 = __importDefault(require("../fixtures/channel_4.json"));
var permissions_tribe_1_json_1 = __importDefault(require("../fixtures/permissions_tribe_1.json"));
var mockTribe = function (_a) {
    if (_a === void 0) { _a = {}; }
    var rest = __rest(_a, []);
    return (__assign(__assign(__assign({}, tribe_1_json_1.default), { channels: [channel_1_json_1.default, channel_2_json_1.default] }), rest));
};
exports.mockTribe = mockTribe;
var mockTribes = function () {
    return [
        __assign(__assign({}, tribe_1_json_1.default), { channels: [channel_2_json_1.default], permissions: permissions_tribe_1_json_1.default }),
        __assign(__assign({}, tribe_2_json_1.default), { channels: [channel_1_json_1.default, channel_3_json_1.default] }),
        __assign(__assign({}, tribe_3_json_1.default), { channels: [channel_2_json_1.default, channel_4_json_1.default] }),
        tribe_4_json_1.default,
    ];
};
exports.mockTribes = mockTribes;
//# sourceMappingURL=tribe.js.map