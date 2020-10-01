import { Publisher, Subjects, TicketUpdatedEvent } from '@amazp/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
