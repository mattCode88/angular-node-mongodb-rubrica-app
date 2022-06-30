export default class Contatto {
  constructor(
    public nome: string,
    public cognome: string,
    public telefono: number,
    public riferimentoUser: string,
    public indirizzo?: string,
    public email?: string,
    public dataDiNascita?: Date,
    public _id?: string
  ) { }
}
