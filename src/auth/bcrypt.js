// import * as bcrypt from "bcrypt";

// export class BcryptHelper {
//   async hashGenerator(password) {
//     const hashedPassword = bcrypt.hash(password, 10, (err, hash) => {
//       if (err) {
//         console.log(err);
//         throw new Error("Error in Hash");
//       }
//       return hash;
//     });

//     return hashedPassword;
//   }

//   async comparePassword(password, hash) {}
// }
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
