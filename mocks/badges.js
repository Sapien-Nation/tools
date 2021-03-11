"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockSubscriptionBadge = exports.mockTribeBadge = exports.mockSubscriptionBadges = exports.mockTribeBadges = void 0;
/* istanbul ignore file */
// fixtures
var badge_1_json_1 = __importDefault(require("../fixtures/badge_1.json"));
var badge_2_json_1 = __importDefault(require("../fixtures/badge_2.json"));
var badge_3_json_1 = __importDefault(require("../fixtures/badge_3.json"));
var badge_4_json_1 = __importDefault(require("../fixtures/badge_4.json"));
var badge_5_json_1 = __importDefault(require("../fixtures/badge_5.json"));
var badge_6_json_1 = __importDefault(require("../fixtures/badge_6.json"));
var badge_7_json_1 = __importDefault(require("../fixtures/badge_7.json"));
var badge_8_json_1 = __importDefault(require("../fixtures/badge_8.json"));
var mockTribeBadges = function () {
    return [badge_1_json_1.default, badge_2_json_1.default, badge_3_json_1.default, badge_4_json_1.default, badge_5_json_1.default, badge_6_json_1.default];
};
exports.mockTribeBadges = mockTribeBadges;
var mockSubscriptionBadges = function () {
    return [badge_7_json_1.default, badge_8_json_1.default];
};
exports.mockSubscriptionBadges = mockSubscriptionBadges;
var mockTribeBadge = function () { return badge_1_json_1.default; };
exports.mockTribeBadge = mockTribeBadge;
var mockSubscriptionBadge = function () { return badge_7_json_1.default; };
exports.mockSubscriptionBadge = mockSubscriptionBadge;
//# sourceMappingURL=badges.js.map