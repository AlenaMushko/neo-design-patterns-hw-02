import {INotificationChannel, INotificationService, IUser} from "../core/interfaces";

export class NotificationService implements INotificationService {
    private channels: INotificationChannel[] = [];

    addChannel(channel: INotificationChannel): void {
        this.channels.push(channel);
    }

    notify(user: IUser, message: string): void {
        this.channels.forEach(channel => {
            channel.send(user, message);
        });
    }
}
