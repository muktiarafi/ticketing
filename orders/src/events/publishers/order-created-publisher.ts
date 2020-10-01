import { Publisher, OrderCreatedEvent, Subjects } from '@amazp/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
