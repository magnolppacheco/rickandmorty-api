import { randomUUID } from "crypto";

export class UserEntity {
  constructor(user) {
    this.id = user.id ?? randomUUID();
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.image = user.image;
  }

  validate() {
    if (!this.name || !this.email || !this.password || !this.image) {
      throw new Error("Invalid user");
    }
  }

  getUser() {
    const user = {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      image: this.image,
    };

    return user;
  }
}
