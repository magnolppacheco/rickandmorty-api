import { userDb } from "../mongo/schemas/user.js";

export class UserRepositoryMongoDb {
  async create(user) {
    return await userDb.create(user);
  }

  async findAll() {
    return await userDb.find();
  }

  async findById(id) {
    return await userDb.findOne({ id: id });
  }

  async updateUser(user) {
    return await userDb.findOneAndUpdate({ id: user.id }, user, { new: true });
  }

  async deleteUser(id) {
    return await userDb.findOneAndDelete({ id: id });
  }
}
