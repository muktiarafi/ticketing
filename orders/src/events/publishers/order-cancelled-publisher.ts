import { Publisher, OrderCancelledEvent, Subjects } from '@amazp/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
