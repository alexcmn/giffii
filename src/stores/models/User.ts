import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("User")
class User {
  @JsonProperty("id", Number)
  ID: number = 0;

  @JsonProperty("first_name", String)
  FirstName: string = "";

  @JsonProperty("last_name", String)
  LastName: string = "";
}

export default User;
