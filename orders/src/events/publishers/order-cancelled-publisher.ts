import { Publisher, OrderCancelledEvent, Subjects } from "@shpassport/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
