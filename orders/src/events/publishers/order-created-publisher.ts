import { Publisher, OrderCreatedEvent, Subjects } from "@shpassport/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
