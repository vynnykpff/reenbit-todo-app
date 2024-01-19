import { UserModelParams } from "@types";

export class UserDto {
  email;
  id;

  constructor(model: UserModelParams) {
    this.email = model.email;
    this.id = model._id;
  }
}
