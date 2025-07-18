// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLinkActive, RouterLink } from "@angular/router";

import { Icon } from "../icon";
import { BitIconComponent } from "../icon/icon.component";
import { BitwardenShield } from "../icon/logos";

import { SideNavService } from "./side-nav.service";

@Component({
  selector: "bit-nav-logo",
  templateUrl: "./nav-logo.component.html",
  imports: [CommonModule, RouterLinkActive, RouterLink, BitIconComponent],
})
export class NavLogoComponent {
  /** Icon that is displayed when the side nav is closed */
  @Input() closedIcon = BitwardenShield;

  /** Icon that is displayed when the side nav is open */
  @Input({ required: true }) openIcon: Icon;

  /**
   * Route to be passed to internal `routerLink`
   */
  @Input({ required: true }) route: string | any[];

  /** Passed to `attr.aria-label` and `attr.title` */
  @Input({ required: true }) label: string;

  constructor(protected sideNavService: SideNavService) {}
}
