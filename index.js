import { UserRepositoryMongoDb } from "./src/database/repository/userRepository.js";
import { CreateUserUseCase } from "./src/services/usecases/user/createUser.js";
import { MongoDbConnection } from "./src/database/mongo/connection/connect.js";
import { FindUserByIdUseCase } from "./src/services/usecases/user/findUserByID.js";
import { UpdateUserUseCase } from "./src/services/usecases/user/updateUser.js";

const database = new MongoDbConnection();

await database.ConnectDb().catch((err) => {
  console.log(err);
});

const repository = new UserRepositoryMongoDb();
// const createUserUseCase = new CreateUserUseCase(repository);

// const newUser = await createUserUseCase.execute({
//   name: "magno",
//   email: "magno@gmail.com",
//   password: "password",
//   image: "http://image.com",
// });

// console.log(newUser);

const findByIdUseCase = new FindUserByIdUseCase(repository);
const updateUserUseCase = new UpdateUserUseCase(repository, findByIdUseCase);

const userUpdated = await updateUserUseCase.execute(
  {
    name: "Magno Pacheco",
  },
  "ab9a2477-d3dc-4723-b588-fc72c59e08dc"
);
console.log(userUpdated);
