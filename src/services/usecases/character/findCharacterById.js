export class FindCharacterByIdUseCase {
  constructor(characterRepository) {
    this.repository = characterRepository;
  }

  async execute(characterId) {
    const character = await this.repository.findById(characterId);
    if (!character) {
      throw new Error("Not found character: " + characterId);
    }
    return character;
  }
}
