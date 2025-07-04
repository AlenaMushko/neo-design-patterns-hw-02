import {ILogger, INotificationChannel} from "../core/interfaces";

export class SMSNotification implements INotificationChannel {
    constructor(private logger: ILogger) {}

    send(user: { phone: string }, message: string): void {
        this.logger.log(`Sending SMS to ${user.phone}`);
        console.log(`SMS sent to ${user.phone}: ${message}`);
    }
}
