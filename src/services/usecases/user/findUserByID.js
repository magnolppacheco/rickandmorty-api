import { UserRepositoryMongoDb } from "../../../database/repositories/userRepository.js";
export class FindUserByIdUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }

  async execute(userId) {
    if (!userId) {
      throw new Error("User ID sended is not a valid!");
    }
    // const userFinded = await this.repository.findById(userId);
    const repository = new UserRepositoryMongoDb();
    const userFinded = await repository.findById(userId);
    if (!userFinded) {
      throw new Error("User ID not found!");
    }
    return userFinded;
  }
}
