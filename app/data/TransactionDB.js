import React, {useEffect, useState} from "react";
import * as SQLite from "expo-sqlite";

import constants from "../config/constants";

const db = SQLite.openDatabase(constants.DATABASE_NAME);

const setupTransaction = () => {
  db.transaction(tx => {
    tx.executeSql(
      'create table if not exists transactions (id integer primary key autoincrement, amount integer not null, description text not null, date text not null, category char(50) not null, account_id integer not null, created_at text not null);'
    );
  });
}

const getTransactions = (onGetTransactions) => {
  setupTransaction();
  db.transaction(tx => {
    tx.executeSql('select * from transactions', [], (_, { rows: {_array} }) => {
      console.log(JSON.stringify(_array));
      onGetTransactions(_array);
    }
      );
  });
}

const addTransaction = (transaction, onTransactionAdded) => {
  setupTransaction();
  db.transaction(
    tx => {
      tx.executeSql('insert into transactions (amount, description, date, category, account_id, created_at) values (?, ?, ?, ?, ?, ?)',
       [transaction.amount, transaction.description, transaction.date, transaction.category, transaction.account_id, transaction.created_at]);
      tx.executeSql('select * from transactions', [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    },
    error => {
      console.log("The add transaction error is: ", error);
    },
    success => {
      console.log("Transaction has been added successfully")
      onTransactionAdded(true)
    }
  );
}

export default {setupTransaction, addTransaction, getTransactions};