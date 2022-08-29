import * as bcrypt from "bcrypt";

export class BcryptHelper {
  hashGenerator(password) {
    const hash = bcrypt.hashSync(password, 5, (err, hash) => {
      if (err) {
        throw new Error("Error in hash:", err);
      }

      return hash;
    });

    return hash;
  }

  comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}
