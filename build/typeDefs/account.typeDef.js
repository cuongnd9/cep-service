"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var typeDef = "\n  type Query {\n    login(phone: String!, password: String!): LoginOutput\n  }\n\n  type Mutation {\n    register(phone: String!, password: String!, firstName: String, lastName: String, imageId: String, gender: String, dob: DateTime, email: String, contactAddress: JSON, permanentAddress: JSON, nationalId: String): RegisterOutput\n  }\n\n  type LoginOutput {\n    token: String\n    phone: String\n  }\n\n  type RegisterOutput {\n    phone: String\n    firstName: String\n    lastName: String\n    imageId: String\n    gender: String\n    dob: DateTime\n    email: String\n    contactAddress: JSON\n    permanentAddress: JSON\n    nationalId: String\n  }\n";
var _default = typeDef;
exports["default"] = _default;