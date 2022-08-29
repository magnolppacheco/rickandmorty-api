export class UserRoutes {
  constructor(controller, router) {
    this.userController = controller;
    this.router = router;
  }

  route() {
    router.get("/", this.userController.find);
    router.get("/:id", this.userController.findById);
    router.post("/create", this.userController.create);
    router.patch("/update/:id", this.userController.update);
    router.delete("/delete/:id", this.userController.delete);
  }
}
