export class User {
  id: string;
  username: string;
  password: string;
  role: Object;

  constructor(obj: Object = {}) {
    Object.assign(this, obj);
  }
}
