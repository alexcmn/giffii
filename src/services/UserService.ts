import { BaseService, IResponse } from "./BaseService";
import { User } from "../stores/models";

export default class UserService extends BaseService {
  public async fetchAll(): Promise<User[]> {
    try {
      const resp = await this.http.get("/api/users");
      return this.decodeArray<User>(resp, User);
    } catch (error) {
      throw error;
    }
  }

  public async byId(id: number): Promise<User> {
    try {
      const resp = await this.http.get(`/api/users/${id}`);
      return this.decodeObject<User>(resp, User);
    } catch (error) {
      throw error;
    }
  }

  public async removeById(id: number): Promise<IResponse> {
    try {
      const resp = await this.http.delete(`/api/users/${id}`);
      const data: IResponse = resp.data;
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async updateById(id: number, customer: User): Promise<Boolean> {
    const customerPayload = this.encodeObject(customer, User);
    try {
      const resp = await this.http.put(`/api/users/${id}`, customerPayload);
      const data: IResponse = resp.data;
      return data.success;
    } catch (error) {
      throw error;
    }
  }

  public async create(customer: User): Promise<User> {
    const customerPayload = this.encodeObject(customer, User);
    try {
      const resp = await this.http.post(`/api/v1/users/`, customerPayload);
      return this.decodeObject<User>(resp, User);
    } catch (error) {
      throw error;
    }
  }
}
