import { characterDb } from "../mongo/schemas/character.js";

export class CharacterRepositoryMongoDb {
  async create(character) {
    return await characterDb.create(character);
  }

  async findAll() {
    return await characterDb.find();
  }

  async findByName(characterName) {
    return await characterDb.findOne({ name: characterName });
  }

  async findById(characterId) {
    return await characterDb.findOne({ id: characterId });
  }

  async update(character) {
    return await characterDb.findOneAndUpdate({ id: character.id }, character, {
      new: true,
    });
  }

  async delete(id) {
    return await characterDb.findOneAndDelete({ id: id });
  }
}
