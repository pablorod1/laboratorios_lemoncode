export interface Movement {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: string;
  realTransaction: string;
  accountId: string;
}

export interface AccountDetails {
  name: string;
  iban: string;
}
