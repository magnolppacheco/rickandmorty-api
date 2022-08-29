import { UserRepositoryMongoDb } from "../database/repositories/userRepository.js";
import { CreateUserUseCase } from "../services/usecases/user/createUser.js";
import { FindAllUsersUseCase } from "../services/usecases/user/findAllUsers.js";
import { FindUserByIdUseCase } from "../services/usecases/user/findUserByID.js";
import { UpdateUserUseCase } from "../services/usecases/user/updateUser.js";
import { DeleteUserUseCase } from "../services/usecases/user/deleteUser.js";
import { Services } from "../services/service.js";
import { UserRoutes } from "../routes/userRoutes.js";
import { Controller } from "../controllers/controller.js";

export function makeUserFactory(router) {
  const userRepository = new UserRepositoryMongoDb();

  const createUserUseCase = new CreateUserUseCase(userRepository);
  const findAllUsersUseCase = new FindAllUsersUseCase(userRepository);
  const findUserByIdUseCase = new FindUserByIdUseCase(userRepository);
  const updateUserUseCase = new UpdateUserUseCase(
    userRepository,
    findUserByIdUseCase
  );
  const deleteUserUseCase = new DeleteUserUseCase(userRepository);

  const userService = new Services(
    createUserUseCase,
    findAllUsersUseCase,
    findUserByIdUseCase,
    updateUserUseCase,
    deleteUserUseCase
  );
  const userController = new Controller(userService);

  const userRoutes = new UserRoutes(userController, router);

  return userRoutes;
}
