import { UserRepositoryMongoDb } from "../database/repositories/userRepository.js";
import { BcryptHelper } from "../auth/bcrypt.js";
import { JwtHelper } from "../auth/jwt.js";
import { FindUserByEmailUseCase } from "../services/usecases/user/findUserByEmail.js";
import { AuthController } from "../controllers/authController.js";
import { AuthRoutes } from "../routes/authRoutes.js";

export function makeAuthFactory(router) {
  const userRepositoryDb = new UserRepositoryMongoDb();
  const bcryptHelper = new BcryptHelper();
  const jwtHelper = new JwtHelper();

  const findUserByEmail = new FindUserByEmailUseCase(userRepositoryDb);
  const authController = new AuthController(
    findUserByEmail,
    bcryptHelper,
    jwtHelper
  );

  const authRoutes = new AuthRoutes(authController, router);

  return authRoutes;
}
