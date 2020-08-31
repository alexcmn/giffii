import { AxiosInstance, AxiosResponse } from "axios";
import { JsonConvert } from "json2typescript";

declare module "axios" {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export interface IResponse {
  data: any;
  success: boolean;
  warning: boolean;
  message: string;
}

export abstract class BaseService {
  protected readonly http: AxiosInstance;
  protected jsonConvert: JsonConvert = new JsonConvert();
  public constructor(http: AxiosInstance) {
    this.http = http;
  }

  protected decodeObject<T>(r: AxiosResponse, o: { new (): T }): T {
    if (r === undefined) {
      return new o();
    }
    const data: IResponse = r.data;
    if (data && data.success && data.data) {
      return this.jsonConvert.deserializeObject(data.data, o);
    }
    return new o();
  }

  protected decodeArray<T>(r: AxiosResponse, o: { new (): T }): T[] {
    if (r === undefined) {
      return [];
    }
    const data: IResponse = r.data;
    if (data && data.success && data.data && data.data.length > 0) {
      return this.jsonConvert.deserializeArray(data.data, o);
    }
    return [];
  }

  protected encodeObject<T>(data: any, o: { new (): T }): any {
    return this.jsonConvert.serializeObject<T>(data, o);
  }

  protected encodeArray<T>(data: any, o: { new (): T }): any {
    return this.jsonConvert.serializeArray<T>(data, o);
  }
}
