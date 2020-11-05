import { MongoBase, ObjectId } from '@restlessness/dao-mongo';

export default class User extends MongoBase {
  ['constructor']: typeof User
  
  static get collectionName() {
    return 'users';
  }
};
