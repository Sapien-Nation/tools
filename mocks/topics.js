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
exports.mockTopics = exports.mockTopic = void 0;
// fixtures
var topic_1_json_1 = __importDefault(require("../fixtures/topic_1.json"));
var topic_2_json_1 = __importDefault(require("../fixtures/topic_2.json"));
var topic_3_json_1 = __importDefault(require("../fixtures/topic_3.json"));
var topic_4_json_1 = __importDefault(require("../fixtures/topic_4.json"));
var topic_5_json_1 = __importDefault(require("../fixtures/topic_5.json"));
var mockTopic = function (_a) {
    if (_a === void 0) { _a = {}; }
    var rest = __rest(_a, []);
    return (__assign(__assign({}, topic_1_json_1.default), rest));
};
exports.mockTopic = mockTopic;
var mockTopics = function () {
    return [topic_1_json_1.default, topic_2_json_1.default, topic_3_json_1.default, topic_4_json_1.default, topic_5_json_1.default];
};
exports.mockTopics = mockTopics;
//# sourceMappingURL=topics.js.map