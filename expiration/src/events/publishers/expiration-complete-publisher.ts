import { Publisher, ExpirationCompleteEvent, Subjects } from "@shpassport/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
