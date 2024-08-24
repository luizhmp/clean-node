import { Collection, MongoClient, MongoDBNamespace } from "mongodb";

export const MongoHelper = {
  client: null as MongoClient,
  db: null as MongoDBNamespace,
  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri);
    this.db = await this.client.db(globalThis.__MONGO_DB_NAME__);
  },

  async disconnect(): Promise<void> {
    await this.client.close();
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name);
  },

  map(collection: any): any {
    return {
      id: collection._id.toString(),
      ...collection,
    };
  },
};
