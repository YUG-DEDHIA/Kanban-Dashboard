import { faker } from '@faker-js/faker';

export const generateTickets = (count = 1000) => {
  return Array.from({ length: count }, (_, index) => ({
    id: faker.string.uuid(),  // Updated to use faker.string.uuid()
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    status: faker.helpers.arrayElement(['To Do', 'In Progress', 'Blocked', 'Done']),
  }));
};
