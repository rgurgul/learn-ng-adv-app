import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {

  @HostBinding('class.active') active = false;

  @Input() set appActive(value: boolean) {
    this.active = value;
  }

}
