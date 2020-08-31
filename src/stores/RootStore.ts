import axios from "axios";
import API_CONFIG from "../services/config";
import { UserStore } from "../stores";
import { UserService } from "../services";

interface IServices {
  users: UserService;
}

interface IStores {
  users: UserStore;
}

class RootStore {
  services: IServices;
  stores: IStores;

  constructor() {
    // bootstraps http, services, stores
    const http = axios.create(API_CONFIG);
    http.interceptors.response.use(this._handleResponse, this._handleError);

    this.services = {
      users: new UserService(http),
    };
    this.stores = {
      users: new UserStore(this),
    };
  }

  private _handleResponse = (resp: any) => resp;

  private _handleError = (error: any) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    // handle expired token, log user out.
  };
}

const rootStore = new RootStore();
export { rootStore, RootStore };
