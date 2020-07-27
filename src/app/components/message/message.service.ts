import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  isOpen: boolean = false;
  open() {
    this.isOpen = true;
  }
}
