const typeDef = `
  type Query {
    hello: String
  }

  type Mutation {
    register(phone: String!, password: String!, firstName: String, lastName: String, imageId: String, gender: String, dob: DateTime, email: String, contactAddress: JSON, permanentAddress: JSON, nationalId: String): RegisterOutput
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
