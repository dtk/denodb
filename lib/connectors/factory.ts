/*
import { MongoDBConnector, MongoDBOptions } from "./mongodb-connector.ts";
import { MySQLConnector, MySQLOptions } from "./mysql-connector.ts";
import { PostgresConnector, PostgresOptions } from "./postgres-connector.ts"
*/
import { SQLite3Connector, SQLite3Options } from "./sqlite3-connector.ts";
import type { BuiltInDatabaseDialect } from "../database.ts";
import { Connector, ConnectorOptions } from "./connector.ts";

export function connectorFactory(
  dialect: BuiltInDatabaseDialect,
  connectionOptions: ConnectorOptions,
): Connector {
  switch (dialect) {
    case "sqlite3":
      return new SQLite3Connector(connectionOptions as SQLite3Options);
    case "mongo":
      throw new Error(`${dialect} not supported`)
      //return new MongoDBConnector(connectionOptions as MongoDBOptions);
    case "mysql":
      throw new Error(`${dialect} not supported`)
      //return new MySQLConnector(connectionOptions as MySQLOptions);
    case "postgres":
      throw new Error(`${dialect} not supported`)
      //return new PostgresConnector(connectionOptions as PostgresOptions);
    default:
      throw new Error(
        `No connector was found for the given dialect: ${dialect}.`,
      );
  }
}
