import { UserEntity } from "../../entities/user";

export class UpdateUserUseCase{
    constructor(userRepository, findUserById){
        this.repository = userRepository;
        this.findUserById = findUserById;
    };

    async execute(userUpdated, userId){
        const userToUpdate = await this.findUserById(userId);
        if (!userToUpdate) {
            throw new Error("Not found a user with UserID:" + userId);
        };

        const userModified = {...userToUpdate, userUpdated};
        const userValidated = new UserEntity(userModified);
        userValidated.validate();
        return await this.repository.updateUser(userValidated.getUser());
    };
};
