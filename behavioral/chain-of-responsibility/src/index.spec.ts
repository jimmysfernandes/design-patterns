import { EmailNotificationHandler, Notification, SMSNotificationHandler } from "."

describe('NotificationHandler', () => {
  it('should sending a sms notification', () => {
    const smsNotification = new SMSNotificationHandler(undefined);
    const emailNotification = new EmailNotificationHandler(smsNotification);
    const notificationSms = new Notification('sms', '123456789');
    expect(emailNotification.handler(notificationSms)).toBe(`sending sms to ${notificationSms.destination}`);
  })

  it('should sending a email notification', () => {
    const emailNotification = new EmailNotificationHandler(undefined);
    const smsNotification = new SMSNotificationHandler(emailNotification);
    const notificationSms = new Notification('email', 'jimmysfernandes@gmail.com');
    expect(smsNotification.handler(notificationSms)).toBe(`sending email to ${notificationSms.destination}`);
  })

  it('should return null when notification type is unknown', () => {
    const emailNotification = new EmailNotificationHandler(undefined);
    const smsNotification = new SMSNotificationHandler(emailNotification);
    const notificationSms = new Notification('other', 'jimmysfernandes@gmail.com');
    expect(smsNotification.handler(notificationSms)).toBe('');
  })
})