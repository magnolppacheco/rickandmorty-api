import { CharacterEntity } from "../../../entities/character.js";

export class CreateCharacterUseCase {
  constructor(characterRepository) {
    this.repository = characterRepository;
  }

  async execute(character) {
    const newCharacter = new CharacterEntity(character, character.userId);
    newCharacter.validate();
    return await this.repository.create(newCharacter.getCharacter());
  }
}
