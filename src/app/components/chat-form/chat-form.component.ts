import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Messaggio from 'src/app/classes/Messaggio';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {

  chatForm: FormGroup;
  username: string | null = '';

  constructor(
    private readonly builder: FormBuilder,
    private readonly chatService: ChatService,
    private readonly authService: AuthService
  ) {

    this.username = this.authService.getLoggedIn();

    this.chatForm = builder.group({
      messaggio: ['', Validators.required]
    })
  }

  onSubmit(): void {
    console.log(this.chatForm.value)
    const newMessage = new Messaggio(this.chatForm.value.messaggio, this.username!)
    this.chatService.createMessaggio(newMessage).subscribe(res => console.log(res))
  }

  ngOnInit(): void {
  }

}
