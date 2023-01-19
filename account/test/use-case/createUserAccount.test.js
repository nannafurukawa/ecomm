import request from 'supertest';

import { app } from '../../src/app.js';
import { client, getUsersCollection } from '../../src/repositories/accountRepository.js';

describe('User account creation', () => {
    it('Register a new user if the informations is correct', async () => {
        await request(app)
            .post('/accounts')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                name: 'Daniel',
                email: 'daniel@email.com',
                password: 'daniel123'
            })
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    id: expect.any(String),
                    name: 'Daniel',
                    email: 'daniel@email.com',
                    password: 'daniel123',
                    createdDate: new Date().toISOString().slice(0, 10)
                })
            });
    });
    afterEach(async () => {
        await client.connect();
        const usersCollection = await getUsersCollection(client);
        await usersCollection.deleteMany({});
        await client.close();
    });
});
