export default class Messaggio {
  constructor(
    public messaggio: string,
    public username: string,
    public destinatario?: string,
    public destinatarioId?: string,
    public oraDiInvio?: string,
    public dataDiInvio?: string,
    public id?: string,

  ) { }
}
