import { POLICY } from '../components/constants';

const typeDef = `
  extend type Query {
    diaryNotes(filter: Filter!, offset: Int, limit: Int): DiaryNotesOutput
  }
  extend type Mutation {
    createDiaryNote(title: String!, notes: String, policy: Policy!): DiaryNote
  }

  enum Policy {
    ${POLICY.public}
    ${POLICY.private}
  }
  enum Filter {
    ALL
    BY_ACCOUNT
    BY_RELATIVE
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
  type DiaryNotesOutput {
    count: Int
    rows: [DiaryNote]
  }
`;

export default typeDef;
