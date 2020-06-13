const typeDef = `
  type Query {
    login(phone: String!, password: String!): LoginOutput
  }

  type Mutation {
    register(phone: String!, password: String!, firstName: String, lastName: String, imageId: String, gender: String, dob: DateTime, email: String, contactAddress: JSON, permanentAddress: JSON, nationalId: String): RegisterOutput
  }

  type LoginOutput {
    token: String
    phone: String
  }

  type RegisterOutput {
    phone: String
    firstName: String
    lastName: String
    imageId: String
    gender: String
    dob: DateTime
    email: String
    contactAddress: JSON
    permanentAddress: JSON
    nationalId: String
  }
`;

export default typeDef;
