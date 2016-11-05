import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[wad-dropdown]'
})
export class DropdownDirective {

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
}
