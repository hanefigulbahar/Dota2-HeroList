import { RESTDataSource } from "@apollo/datasource-rest";

class DotaHeroes extends RESTDataSource {
  baseURL = "https://api.opendota.com/api/";

  async getAllHeroes() {
    return this.get("heroStats");
  }
}

export default DotaHeroes;
