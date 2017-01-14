import {Directive, HostBinding, HostListener} from "@angular/core";
import {NotificationsService} from "../service/notification.service";
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {UnseenNotifications} from "../model/models";

@Directive({
  selector: '[wad-notifications]'
})

export class Notifications {
  private unseenNotifications: UnseenNotifications;
  private unseenNotificationsNumber: number;
  private isOpen: boolean = false;

  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  @HostListener('mouseenter') open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }

  constructor(private loginService: LoginService, private router: Router, private notificationsService: NotificationsService) {
  }

  ngOnInit() {
    this.notificationsService.getUnseenNotifications().subscribe((unseenNotifications: UnseenNotifications) => {
      this.unseenNotifications = unseenNotifications;
      //this.unseenNotificationsNumber = unseenNotifications;
      console.log(this.unseenNotifications);
    }, error => {
      console.log(error);
    })
    this.generateUnseenNotifications();
  }

  private logout() {
    this.loginService.logout();
    this.router.navigateByUrl("/");
  }

  private generateUnseenNotifications() {
  var notification = '<li class="notification">' +
  '<div class="media">' +
      '<div class="media-body">' +
      '<p class="notification-desc">I totally don\'t wanna do it. Rimmer can do it.</p>' +

      '<div class="notification-meta">' +
      '<small class="timestamp">27. 11. 2015, 15:00</small></div> </div> </div> </li>';
  }
}
