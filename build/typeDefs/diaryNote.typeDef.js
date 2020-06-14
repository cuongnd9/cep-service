"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../components/constants");

var typeDef = "\n  extend type Query {\n    diaryNotes(offset: Int, limit: Int): [DiaryNote]\n  }\n  extend type Mutation {\n    createDiaryNote(title: String!, notes: String, policy: Policy!): DiaryNote\n  }\n\n  type DiaryNote {\n    id: String\n    title: String\n    notes: String\n    activityId: String\n    imageId: String\n    refId: String\n    status: String\n    policy: Policy\n    createdBy: String\n    updatedBy: String\n  }\n\n  enum Policy {\n    ".concat(_constants.POLICY["public"], "\n    ").concat(_constants.POLICY["private"], "\n  }\n");
var _default = typeDef;
exports["default"] = _default;