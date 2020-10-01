import { Publisher, Subjects, TicketCreatedEvent } from '@amazp/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
