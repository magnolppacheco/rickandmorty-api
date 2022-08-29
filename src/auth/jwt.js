import jwt from "jsonwebtoken";

export class JwtHelper {
  tokenGenerator(data) {
    const token = jwt.sign({ data }, process.env.SECRET_PASSWORD, {
      expiresIn: "24h",
    });
    return token;
  }

  verifyToken(token) {
    const data = jwt.verify(token, process.env.SECRET_PASSWORD);
    return data;
  }
}
