import { Ticket } from '../ticket';

it('implements occ', async (done) => {
  const ticket = Ticket.build({
    title: 'msing',
    price: 12,
    userId: '123',
  });
  await ticket.save();

  const firstInstance = await Ticket.findById(ticket.id);
  const secondInstance = await Ticket.findById(ticket.id);

  firstInstance!.set({ price: 10 });
  secondInstance!.set({ price: 15 });

  await firstInstance!.save();

  try {
    await secondInstance!.save();
  } catch (_) {
    return done();
  }

  throw new Error('should not reach this point');
});

it('increments the version number on multiple save', async () => {
  const ticket = Ticket.build({
    title: 'mosing',
    price: 20,
    userId: '123',
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);
  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});
