import { Member } from "./member";
import { Transaction } from "./transaction";

export type Group = {
  id: string;
  name: string;
  members: Member[];
  transactions: Transaction[];
};
