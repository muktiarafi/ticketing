import { Subjects, Publisher, ExpirationCompleteEvent } from '@amazp/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
