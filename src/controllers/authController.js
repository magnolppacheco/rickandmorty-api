export class AuthController {
  constructor(findUserByEmailUseCase, bcryptHelper, jwtHelper) {
    this.findUserByEmailUseCase = findUserByEmailUseCase;
    this.bcryptHelper = bcryptHelper;
    this.jwtHelper = jwtHelper;
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const userHash = await this.findUserByEmailUseCase.execute(email);
      console.log(userHash.password);

      const passwordValid = this.bcryptHelper.comparePassword(
        password,
        userHash.password
      );
      if (!passwordValid) {
        throw new Error("Invalid password!");
      }

      const data = {
        email: userHash.email,
        image: userHash.image,
      };

      console.log(data);
      res.status(200).send(this.jwtHelper.tokenGenerator(data));
    } catch (err) {
      res.status(401).send(err.message);
    }
  }
}
