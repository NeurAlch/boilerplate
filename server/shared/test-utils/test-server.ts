import { SuperAgentTest } from 'supertest';
import { Client } from 'pg';

export const _dbConnection = async (): Promise<Client> => {
  const dbClient = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number | undefined,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'test',
    ssl: false,
  });
  await dbClient.connect();
  return dbClient;
};

export const _postRequest = async <TResponse, TBody>(
  agent: SuperAgentTest,
  path: string,
  body: TBody,
  status: number,
): Promise<TResponse> => {
  const response = await agent
    .post(path)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(body as Record<string, any>)
    .expect(status);
  return response.body;
};

export const _getRequest = async <T>(agent: SuperAgentTest, path: string, status: number): Promise<T> => {
  const response = await agent
    .get(path)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .expect(status);
  return response.body;
};
export {} from './test.constants';
