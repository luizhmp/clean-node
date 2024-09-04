import { Collection, MongoClient, MongoDBNamespace } from "mongodb";

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,
  db: null as MongoDBNamespace,
  async connect(uri: string): Promise<void> {
    this.uri = uri;
    this.client = await MongoClient.connect(uri);
    this.db = await this.client.db(globalThis.__MONGO_DB_NAME__);
  },

  async disconnect(): Promise<void> {
    await this.client.close();
    this.client = null;
  },

  async getCollection(name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect(this.uri);
    }

    return this.client.db().collection(name);
  },

  map(collection: any): any {
    return {
      id: collection._id.toString(),
      ...collection,
    };
  },
};
