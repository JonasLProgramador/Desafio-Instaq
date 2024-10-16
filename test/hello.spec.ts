import { expect } from 'chai';
import axios from 'axios';

describe('Tests some API Graphql ', () => {
  it('Should return a greeting message', async () => {
    const response = await axios.post('http://localhost:4000/graphql', {
      query: `
          query {
            hello
          }
        `,
    });
    expect(response.data.data.hello).to.equal('Hello, World!');
  });
});
