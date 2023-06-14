import Fastify from 'fastify'
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
dotenv.config();
const prisma = new PrismaClient();

const fastify = Fastify()

fastify.get('/', async (request, reply) => {
  return await prisma.news.findMany({}); 
});
fastify.get('/:taskId', async (request, reply) => {
  const {taskId} = request.params;
  const data = await prisma.news.findFirst({
    where: {
      id: taskId
    }
  }); 
  if (!data) return reply.code(404).send();
  return data;
});
fastify.post('/', async (request, reply) => {
  const {title, content, publisher} = request.body;
  if (!title) return reply.code(400).send();
  const data = await prisma.news.create({
    data: {
      title:title,
      content:content??"",
      publisher:publisher??false
    }
  }); 
  if (!data) return reply.code(500).send();
  return data;
});
fastify.put('/:taskId', async (request, reply) => {
  const {taskId} = request.params;
  const {title, content, publisher} = request.body;
  if (!title) return reply.code(400).send();
  const data = await prisma.news.findFirst({
    where: {
      id: taskId
    }
  }); 
  if (!data) return reply.code(404).send();
  const update = await prisma.news.update({
    where: {
      id: taskId
    },
    data: {
      title:title,
      content:content??"",
      publisher:publisher
    }
  });

  if (!update) return reply.code(500).send();

  return update;
});
fastify.delete('/:taskId', async (request, reply) => {
  const {taskId} = request.params;
  const data = await prisma.news.findFirst({
    where: {
      id: taskId
    }
  }); 
  if (!data) return reply.code(404).send();

  const deleteRow = await prisma.news.delete({
    where: {
      id: taskId
    } 
  });

  if (!deleteRow) return reply.code(500).send();

  return data;
});


// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})