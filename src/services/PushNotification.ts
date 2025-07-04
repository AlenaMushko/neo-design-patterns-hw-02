import {ILogger, INotificationChannel} from "../core/interfaces";

export class PushNotification implements INotificationChannel {
    constructor(private  logger: ILogger ) {}

    send(user: { deviceToken: string }, message: string): void {
        this.logger.log(`Sending PUSH to ${user.deviceToken}`);
        console.log(`Push sent to ${user.deviceToken}: ${message}`);
    }
}
