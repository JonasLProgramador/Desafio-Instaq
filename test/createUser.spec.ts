import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { expect } from 'chai';

describe('The test has to create a user in the test database', () => {
  const prisma = new PrismaClient();

  afterEach(async () => {
    await prisma.user.deleteMany();
  });

  it('should return a user with the correct properties and values', async () => {
    const operation = {
      query: `
        mutation CreateUser($data: UserInput!) {
          createUser(data: $data) {
            id
            name
            email
            birthDate
          }
        }
      `,
      variables: {
        data: {
          name: 'carinha234',
          email: 'jaycepainz@gmail.com',
          password: 'seilaman23',
          birthDate: '2003-10-03',
        },
      },
    };

    const responseOperation = await axios.post(
      'http://localhost:4000/graphql',
      operation,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const createdUser = responseOperation.data.data.createUser;

    expect(createdUser).to.exist;

    expect(createdUser).to.have.property('id');
    expect(createdUser).to.have.property('name', 'carinha234');
    expect(createdUser).to.have.property('email', 'jaycepainz@gmail.com');

    const expectedDate = new Date('2003-10-03').toISOString().split('T')[0];
    const receivedDate = new Date(createdUser.birthDate).toISOString().split('T')[0];

    expect(receivedDate).to.equal(expectedDate);

    expect(createdUser.id).to.be.a('number');
  });
});
