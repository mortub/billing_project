import { Entities } from "../@types/enums/EntitiesEnum";

export class ApiAervice {
  private static url = "http://localhost:4000";
  private static entity: Entities = Entities.CUSTOMERS;
  private static body: Record<string, any> = {};
  private static entityId: number = 0;

  public static async create() {
    const url = `${ApiAervice.url}/${ApiAervice.entity}`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ApiAervice.body),
    };
    try {
      const result = await fetch(url, requestOptions);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  public static async update() {
    const url = `${ApiAervice.url}/${ApiAervice.entity}/${ApiAervice.entityId}`;
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ApiAervice.body),
    };
    try {
      const result = await fetch(url, requestOptions);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  public static async delete() {
    console.log("delete", this.entity, this.entityId, this.body);
  }

  public static async getAll(): Promise<any[] | undefined> {
    console.log(ApiAervice.entity, "ApiAervice.entity");
    const url = `${ApiAervice.url}/${ApiAervice.entity}`;
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    try {
      const result = await fetch(url, requestOptions);
      const entities = await result.json();
      console.log(entities, "from getAll");
      return entities;
    } catch (e) {
      console.log(e);
    }
  }

  public static setBody(body: Record<string, any>) {
    ApiAervice.body = body;
  }

  public static setEntity(entity: Entities) {
    ApiAervice.entity = entity;
  }

  public static setEntityId(entityId: number) {
    ApiAervice.entityId = entityId;
  }
}
