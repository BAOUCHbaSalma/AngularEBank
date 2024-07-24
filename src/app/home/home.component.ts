import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('loginSection', { static: false })
  loginSection!: ElementRef;
  check: boolean = false;

  onOpen() {
    if (this.check) {
      this.loginSection.nativeElement.style.display = "none";
    } else {
      this.loginSection.nativeElement.style.display = "flex";
    }
    this.check = !this.check;
  }
  onClose() {
    if (this.check != true) {
      this.loginSection.nativeElement.style.display = "flex";
    } else {
      this.loginSection.nativeElement.style.display = "none";
    }
    this.check = !this.check;
  }
  check1: boolean = false;

  onOpenOrCloseSignup(check1: boolean) {
    this.check1 = check1;
  }
}
