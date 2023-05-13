export type Transaction = {
  id: string;
  title: string;
  description?: string;
  date: number;
  amount: number;
  paidBy: Payment[];
  paidFor: Payment[];
};

export type Payment = {
  id: string;
  amount: number;
};

// dummy data

const transactions: any[] = [
  {
    id: "1",
    title: "Groceries",
    amount: 100,
    paidBy: "1",
    paidFor: ["1", "2", "3"],
    distribution: [40, 30, 30],
  },
  {
    id: "2",
    title: "Rent",
    amount: 30,
    paidBy: "2",
    paidFor: ["2", "4", "5"],
    distribution: [10, 5, 15],
  },
  {
    id: "3",
    title: "Dinner",
    amount: 200,
    paidBy: "3",
    paidFor: ["1", "2", "3"],
    distribution: [100, 70, 30],
  },
];

const group = {
  id: "1",
  name: "Group 1",
  members: [
    {
      id: "1",
      name: "Member 1",
    },
    {
      id: "2",
      name: "Member 2",
    },
    {
      id: "3",
      name: "Member 3",
    },
    {
      id: "4",
      name: "Member 4",
    },
  ],
  transactions: [
    {
      id: "1",
      title: "Groceries",
      amount: 100,
      paidBy: "1",
      paidFor: ["1", "2", "3"],
      distribution: [40, 30, 30],
    },
    {
      id: "2",
      title: "Rent",
      amount: 30,
      paidBy: "2",
      paidFor: ["2", "4", "3"],
      distribution: [10, 5, 15],
    },
    {
      id: "3",
      title: "Dinner",
      amount: 200,
      paidBy: "3",
      paidFor: ["1", "2", "3"],
      distribution: [100, 70, 30],
    },
  ],
};
