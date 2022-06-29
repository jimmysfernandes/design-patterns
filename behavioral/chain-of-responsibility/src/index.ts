export class Notification {
  constructor(readonly type: string, readonly destination: string) {}
}

export interface NotificationHandler {
  handler(notification: Notification): string
}

export abstract class AbstractNotificationHandler implements NotificationHandler {

  constructor(readonly next: NotificationHandler | undefined) {}

  handler(notification: Notification): string  {
    if (this.next) {
      return this.next.handler(notification);
    }
    return '';
  }
}

export class SMSNotificationHandler extends AbstractNotificationHandler {
  constructor(readonly next: NotificationHandler | undefined) {
    super(next);
  }

  handler(notification: Notification): string {
    if ('sms' === notification.type) {
      return `sending sms to ${notification.destination}`;
    }
    return super.handler(notification);
  }
}

export class EmailNotificationHandler extends AbstractNotificationHandler {
  constructor(readonly next: NotificationHandler | undefined) {
    super(next);
  }

  handler(notification: Notification): string {
    if ('email' === notification.type) {
      return `sending email to ${notification.destination}`;
    }
    return super.handler(notification);
  }
}