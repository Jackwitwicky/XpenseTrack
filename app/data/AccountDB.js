import React, {useEffect, useState} from "react";
import * as SQLite from "expo-sqlite";

import constants from "../config/constants";

const db = SQLite.openDatabase(constants.DATABASE_NAME);

const setupAccount = () => {
  db.transaction(tx => {
    tx.executeSql(
      'create table if not exists accounts (id integer primary key autoincrement, type char(50) not null, name char(100) not null, description text not null, created_at text not null);'
    );
  });
}

const getAccounts = (onGetAccounts) => {
  setupAccount();
  let myAccounts = [];
  db.transaction(tx => {
    tx.executeSql('select * from accounts', [], (_, { rows: {_array} }) => {
      console.log(JSON.stringify(_array));
      // setAccounts(_array);
      onGetAccounts(_array);
    }
      );
  });
}

var inc = 0;

const getAccountBalance = async (onGetAccountBalance) => {
  var computedIncome = 0;
  var income = await getAccountIncome((incomeSum) => {computedIncome = incomeSum});
  console.log("The value is: ", computedIncome);
  console.log("The income is: ", income);
}

const getAccountIncome = async (onGetAccountIncome) => {
  var income = 0;
  db.transaction(tx => {
    var i = 0;
    tx.executeSql('select SUM(amount) from incomes', [], (_, { rows: { _array } }) => {
      console.log(JSON.stringify(_array));
      // setAccounts(_array);
      onGetAccountIncome(Object.values(_array[0])[0]);
      income = Object.values(_array[0])[0];
      i = Object.values(_array[0])[0];
    }
    );
    console.log("The val of i is: ", i);
  });

  return income;
}

const addAccount = (account, onAccountAdded) => {
  setupAccount();
  db.transaction(
    tx => {
      tx.executeSql('insert into accounts (type, name, description, created_at) values (?, ?, ?, ?)', [account.type, account.name, account.description, account.created_at]);
      tx.executeSql('select * from accounts', [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    },
    null,
    success => {
      console.log("Account has been added successfully")
      onAccountAdded(true)
    }
  );
}

export default {setupAccount, getAccounts, addAccount, getAccountBalance};