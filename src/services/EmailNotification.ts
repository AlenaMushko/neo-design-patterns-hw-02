import {ILogger, INotificationChannel} from "../core/interfaces";

export class EmailNotification implements INotificationChannel {
    constructor(private  logger: ILogger ) {}

    send(user: { email: string }, message: string): void {
        this.logger.log(`Sending email to ${user.email}`);
        console.log(`Email sent to ${user.email}: ${message}`);
    }
}
