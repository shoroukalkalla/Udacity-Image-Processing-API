import supertest from 'supertest';
import app from '../main';

const request = supertest(app);

describe('Image Endpoint', () => {
   describe('get instruction', () => {
      it('guides user to get route successfully', async () => {
         const res = await request.get('/');
         expect(res.status).toBe(200);
      });
   });
   describe('Image does not exist', () => {
      it('get /images', async () => {
         const res = await request.get('/images');
         expect(res.status).toBe(404);
      });
      it('get /images?filename=test', async () => {
         const res = await request.get('/images?filename=test');
         expect(res.status).toBe(404);
      });
   });
   describe('get chosen image', () => {
      it('get /images?filename=santamonica', async () => {
         const res = await request.get('/images?filename=santamonica');
         expect(res.status).toBe(200);
      });
   });
   describe('get resized image', () => {
      it('get /images?filename=santamonica&width=200&height=200', async () => {
         const res = await request.get(
            '/images?filename=santamonica&width=200&height=200'
         );
         expect(res.status).toBe(200);
      });
   });
   describe('check if queries are string', () => {
      it('get /images?filename=santamonica&width=aaa&height=bbb', async () => {
         const res = await request.get(
            '/images?filename=santamonica&width=aaa&height=bbb'
         );
         expect(res.status).toBe(400);
      });
   });
});
