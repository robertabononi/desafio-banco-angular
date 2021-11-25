export interface AlterarPlano {
  cpf: string;
  plano: {
    custoMensal: string;
    tipoCartao: string;
    tipoConta: string;
  }
}
