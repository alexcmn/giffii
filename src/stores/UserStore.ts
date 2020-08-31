import { RootStore } from "./RootStore";
import { User } from "./models";
import { observable, runInAction } from "mobx";
import { UserService } from "../services";

class UserStore {
  private root: RootStore;
  private api: UserService;

  @observable public users: User[] = [];
  @observable public user: User = new User();

  constructor(root: RootStore) {
    this.root = root;
    this.api = this.root.services.users;
  }

  public async getAllUsers() {
    try {
      const users = await this.api.fetchAll();
      runInAction(() => {
        this.users = users;
      });
    } catch (err) {
      console.error(err);
    }
  }

  public async getUserById(id: number) {
    try {
      const user = await this.api.byId(id);
      runInAction(() => {
        this.user = user;
      });
    } catch (err) {
      // handle using ui
      console.error(err);
    }
  }
}

export default UserStore;
