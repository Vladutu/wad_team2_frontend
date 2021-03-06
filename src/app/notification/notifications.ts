import {Component, OnInit} from "@angular/core";
import {NotificationsService} from "../service/notification.service";
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {UnseenNotifications} from "../model/models";

@Component({
  selector: 'wad-notifications',
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.css']
})

export class Notifications implements OnInit {
  private unseenNotifications: UnseenNotifications[] = [];
  private unseenNumber: number;
  private handler: any;

  constructor(private loginService: LoginService, private router: Router, private notificationsService: NotificationsService) {
  }

  ngOnInit() {
    this.getUnseenNotifications();
    this.handler = setInterval(() => this.getUnseenNotifications(), 10000);
  }

  getUnseenNotifications() {
    if (!this.loginService.getAuthenticatedUser().username) {
      clearInterval(this.handler);
      return;
    }
    this.notificationsService.getUnseenNotifications().subscribe((unseenNotifications: UnseenNotifications[]) => {
      this.unseenNotifications = unseenNotifications;
      this.unseenNumber = this.unseenNotifications.length;
      for (let notification of this.unseenNotifications) {
        notification.date = notification.date.replace('T', ' ');
      }
    }, error => {
      console.log(error);
    })
  }

  onNotificationClick(notification: UnseenNotifications, event: any) {
    event.stopPropagation();
    this.notificationsService.setNotificationSeen(notification.id).subscribe((notification: any) => {
      },
      error => {
        console.log(error);
      });
    if (notification.seen == false) {
      this.unseenNumber--;
    }
    notification.seen = true;
  }
}
