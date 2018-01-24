import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../../core/backend/backend.service';
import { EventBusService } from '../../core/event-bus/event-bus.service';
import { ErrorHandlerService } from '../../core/error-handler/error-handler.service';

import { AuthService } from '../../services/auth/auth.service';
import { MessagesService } from '../../services/messages/messages.service';

@Component({
    selector: 'messages',
    styleUrls: ['./messages.component.css'],
    templateUrl: './messages.component.html'
})

export class MessagesComponent {

    public messages: Array<Object> = [];

    constructor(
        public router: Router,
        public authService: AuthService,
        public backendService: BackendService,
        public eventBusService: EventBusService,
        public messagesService: MessagesService,
        public errorHandlerService: ErrorHandlerService
    ) {
        this.messages = messagesService.getMessages();
        this.eventBusService.messagesUpdate.subscribe(messages => this.updateMessages(messages));
    };
    
    public updateMessages(eventData) {
      this.messages = eventData.messages;
    }
    
    public delete(message) {
        let loginData = this.authService.getLoginData();
        this.backendService.deleteMessage({
            message: message,
            username: loginData['username'],
            password: loginData['password']
        }).subscribe(
            data => this.messagesService.removeMessage(data.json()),
            err => this.errorHandlerService.handleRequestError(err)
        );
    }
}
