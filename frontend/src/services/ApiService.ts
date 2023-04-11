import { Entities } from "../@types/enums/EntitiesEnum";

export class ApiAervice {
  private static url = "http://localhost:4000/";
  private static entity: Entities = Entities.CUSTOMERS;
  private static body: Record<string, any> = {};
  private static entityId: number = 0;

  public static async create() {
    console.log("create", this.entity, this.body);
  }

  public static async update() {
    console.log("update", this.entity, this.entityId, this.body);
  }

  public static async delete() {
    console.log("delete", this.entity, this.entityId, this.body);
  }

  public static async getAll() {
    console.log("getAll", this.entity);
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
