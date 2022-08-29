import { CharacterRepositoryMongoDb } from "./src/database/repository/characterRepository.js";
import { UserRepositoryMongoDb } from "./src/database/repository/userRepository.js";
import { MongoDbConnection } from "./src/database/mongo/connection/connect.js";
import { CreateUserUseCase } from "./src/services/usecases/user/createUser.js";
import { FindAllUsersUseCase } from "./src/services/usecases/user/findAllUsers.js";
import { FindUserByIdUseCase } from "./src/services/usecases/user/findUserByID.js";
import { UpdateUserUseCase } from "./src/services/usecases/user/updateUser.js";
import { DeleteUserUseCase } from "./src/services/usecases/user/deleteUser.js";
import { Services } from "./src/services/service.js";
import { Controller } from "./src/controllers/controller.js";

const ConnectDb = new MongoDbConnection();
await ConnectDb.ConnectDb();

const userRepository = new UserRepositoryMongoDb();
const characterRepository = new CharacterRepositoryMongoDb();

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

const response = await userController.create({
  body: {
    name: "Magno Pacheco",
    email: "um.email.da.hora@gmail.com",
    password: "uma.senha.da.hora",
    image: "http://fotobolada.com.br",
  },
});
console.log(response);
