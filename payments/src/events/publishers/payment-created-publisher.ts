import { Subjects, Publisher, PaymentCreatedEvent } from '@amazp/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
