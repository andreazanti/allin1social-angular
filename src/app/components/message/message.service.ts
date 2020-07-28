import { Injectable, ElementRef } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from './message.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private modalService: NgbModal) {}

  open(message: string) {
    const modalRef = this.modalService.open(MessageComponent, {
      centered: true,
    });
    modalRef.componentInstance.message = message;
  }
}
