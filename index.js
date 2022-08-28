import { UserRepositoryMongoDb } from "./src/database/repository/userRepository.js";
import { CreateUserUseCase } from "./src/services/usecases/createUser.js";

const repository = new UserRepositoryMongoDb();
const createUserUseCase = new CreateUserUseCase(repository);

const newUser = await createUserUseCase.execute({
  name: "magno",
  email: "magno@gmail.com",
  password: "password",
  image: "http://image.com",
});

console.log(newUser);
