import qs from "qs";
import { PathLike } from "fs";

export default {
  baseURL: "",
  returnRejectedPromiseOnError: true,
  timeout: 30000,
  headers: {
    common: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  paramsSerializer: (params: PathLike) =>
    qs.stringify(params, { indices: false }),
};
