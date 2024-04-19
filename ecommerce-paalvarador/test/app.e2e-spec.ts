import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Get /users/ Retorna un arreglo de usuarios con el status OK', async () => {
    const req = await request(app.getHttpServer())
      .get('/users')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlNTJjOTA3Zi04NGQxLTQ5OWMtOGIxNC0wZTE1N2FhY2UxYzIiLCJpZCI6ImU1MmM5MDdmLTg0ZDEtNDk5Yy04YjE0LTBlMTU3YWFjZTFjMiIsImVtYWlsIjoicGFhbHZhcmFkb3JAZ21haWwuY29tIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNzEzNTU1ODQ3LCJleHAiOjE3MTM1NTk0NDd9.FiifEJUEjnXXrqIMVjTlPbh1-f9zqu1bXdxbDtk0LxU',
      );
    console.log(req.body);

    expect(req.status).toBe(200);
    expect(req.body).toBeInstanceOf(Array);
  });

  it('Get /users/:id Debe retornar un usuario con un codigo de status OK', async () => {
    const req = await request(app.getHttpServer()).get(
      '/users/e52c907f-84d1-499c-8b14-0e157aace1c2',
    );

    console.log(req.body);

    expect(req.status).toBe(200);
    expect(req.body).toBeInstanceOf(Object);
  });
});
