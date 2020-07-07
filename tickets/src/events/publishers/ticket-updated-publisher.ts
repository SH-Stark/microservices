import { Publisher, Subjects, TicketUpdatedEvent } from "@shpassport/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
