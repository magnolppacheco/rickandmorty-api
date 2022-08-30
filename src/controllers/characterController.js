import { Controller } from "./controller.js";

export class CharacterController extends Controller {
  constructor(service, findCharacterByName) {
    super(service);
    this.findCharacterByName = findCharacterByName;
  }

  async findByName(req, res) {
    const name = req.query.name;
    const response = await this.findCharacterByName.execute(name);
    console.log("controller", response);
    res.status(200).send(response);
  }
}
