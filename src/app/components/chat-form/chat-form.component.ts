import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Messaggio from 'src/app/classes/Messaggio';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { DirectService } from 'src/app/services/direct.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {

  chatForm: FormGroup;
  username: string | null = '';
  destinatarioId: string | null = '';
  destinatarioNome: string | null = '';
  @Input() isSingleDirect: boolean = false;
  @Output() lastMessage = new EventEmitter<Messaggio>();

  constructor(
    private readonly builder: FormBuilder,
    private readonly chatService: ChatService,
    private readonly authService: AuthService,
    private readonly directService: DirectService,
    private readonly route: ActivatedRoute
  ) {

    this.username = this.authService.getLoggedIn();

    this.chatForm = builder.group({
      messaggio: ['', Validators.required]
    })
  }

  onSubmit(): void {
    //chat genereale
    if (this.chatForm.valid && !this.isSingleDirect) {
      const newMessage = new Messaggio(this.chatForm.value.messaggio, this.username!)
      this.chatService.createMessaggio(newMessage).subscribe(res => {
        this.lastMessage.emit(res);
        this.chatForm.controls['messaggio'].setValue('');
      })
    }
    //chat singola
    if (this.chatForm.valid && this.isSingleDirect) {
      // console.log('ciao')
      const newMessage = new Messaggio(this.chatForm.value.messaggio, this.username!, this.destinatarioNome!, this.destinatarioId!)
      this.directService.createDirect(newMessage).subscribe(res => {
        this.lastMessage.emit(res);
        this.chatForm.controls['messaggio'].setValue('');
        // console.log(res)
      })
    }
  }

  ngOnInit(): void {

    if (this.isSingleDirect) {
      this.route.params.subscribe(params => {
        this.destinatarioId = params['id'];
        this.directService.getNomeDestinatario(this.destinatarioId!).subscribe(res => {
          console.log(res._id)
          this.destinatarioNome = res.nome;
        })
      })
    }
  }

}
