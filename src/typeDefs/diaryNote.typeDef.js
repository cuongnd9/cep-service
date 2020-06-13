import { POLICY } from '../components/constants';

const typeDef = `
  extend type Query {
    diaryNotes(offset: Int, limit: Int): [DiaryNote]
  }
  extend type Mutation {
    createDiaryNote(title: String!, notes: String, policy: Policy!): DiaryNote
  }

  type DiaryNote {
    id: String
    title: String
    notes: String
    activityId: String
    imageId: String
    refId: String
    status: String
    policy: Policy
    createdBy: String
    updatedBy: String
  }

  enum Policy {
    ${POLICY.public}
    ${POLICY.private}
  }
`;

export default typeDef;
