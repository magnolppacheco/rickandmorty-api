export class Services {
  constructor(
    createUseCase,
    findAllUseCase,
    findByIdUseCase,
    updateUseCase,
    deleteByIdUseCase
  ) {
    this.createUseCase = createUseCase;
    this.findAllUseCase = findAllUseCase;
    this.findByIdUseCase = findByIdUseCase;
    this.updateUseCase = updateUseCase;
    this.deleteByIdUseCase = deleteByIdUseCase;
  }

  async create(data) {
    return await this.createUseCase.execute(data);
  }

  async findAll() {
    return await this.findAllUseCase.execute();
  }

  async findById(id) {
    return await this.findByIdUseCase.execute(id);
  }

  async update(data, id) {
    return await this.updateUseCase.execute(data, id);
  }

  async delete(id) {
    return await this.deleteByIdUseCase.execute(id);
  }
}
