import React from "react";
import * as SQLite from "expo-sqlite";

import constants from "../config/constants";

const db = SQLite.openDatabase(constants.DATABASE_NAME);

const setupIncome = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists incomes (id integer primary key autoincrement, amount integer not null, date text not null, account_id integer not null, created_at text not null, FOREIGN KEY(account_id) REFERENCES accounts(id));"
    );
  });
};

const getIncomes = (onGetIncomes) => {
  setupIncome();
  db.transaction((tx) => {
    tx.executeSql("select * from incomes", [], (_, { rows: { _array } }) => {
      console.log(JSON.stringify(_array));
      // setAccounts(_array);
      onGetIncomes(_array);
    });
  });
};

const addIncome = (income, onIncomeAdded) => {
  console.log("i am about to save the income", income);
  setupIncome();
  db.transaction(
    (tx) => {
      tx.executeSql(
        "insert into incomes (amount, date, account_id, created_at) values (?, ?, ?, ?)",
        [parseInt(income.amount), income.date, income.account_id, income.created_at]
      );
      tx.executeSql("select * from incomes", [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    },
    (error) => {
      console.log("The error is: ", error);
    },
    (success) => {
      console.log("Income has been added successfully");
      onIncomeAdded(true);
    }
  );
};

export default { setupIncome, getIncomes, addIncome };
