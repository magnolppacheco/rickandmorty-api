import { CharacterRepositoryMongoDb } from "../database/repositories/characterRepository.js";
import { CreateCharacterUseCase } from "../services/usecases/character/createCharacter.js";
import { FindAllCharactersUseCase } from "../services/usecases/character/findAllCharacters.js";
import { FindCharacterByIdUseCase } from "../services/usecases/character/findCharacterById.js";
import { FindCharacterByNameUseCase } from "../services/usecases/character/findCharacterByName.js";
import { UpdateCharacterUseCase } from "../services/usecases/character/updateCharacter.js";
import { DeleteCharacterUseCase } from "../services/usecases/character/deleteCharacter.js";
import { Services } from "../services/service.js";
import { CharacterController } from "../controllers/characterController.js";
import { CharacterRoutes } from "../routes/characterRoutes.js";

export function makeCharacterFactory(router) {
  const characterRepository = new CharacterRepositoryMongoDb();

  const createCharacterUseCase = new CreateCharacterUseCase(
    characterRepository
  );
  const findAllCharactersUseCase = new FindAllCharactersUseCase(
    characterRepository
  );
  const findCharacterByIdUseCase = new FindCharacterByIdUseCase(
    characterRepository
  );
  const findCharacterByNameUseCase = new FindCharacterByNameUseCase(
    characterRepository
  );
  const updateCharacterUseCase = new UpdateCharacterUseCase(
    characterRepository,
    findCharacterByIdUseCase
  );
  const deleteCharacterUseCase = new DeleteCharacterUseCase(
    characterRepository
  );

  const characterService = new Services(
    createCharacterUseCase,
    findAllCharactersUseCase,
    findCharacterByIdUseCase,
    updateCharacterUseCase,
    deleteCharacterUseCase
  );

  const characterController = new CharacterController(
    characterService,
    findCharacterByNameUseCase
  );

  const characterRoutes = new CharacterRoutes(characterController, router);

  return characterRoutes;
}
