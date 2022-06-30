export default class Messaggio {
  constructor(
    public messaggio: string,
    public username: string,
    public oraDiInvio?: string,
    public id?: string
  ) { }
}
