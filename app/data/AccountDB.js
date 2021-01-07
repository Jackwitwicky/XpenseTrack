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
  // const [accounts, setAccounts] = useState(null);
  let myAccounts = [];
  // var accounts = null;
  db.transaction(tx => {
    tx.executeSql('select * from accounts', [], (_, { rows: {_array} }) => {
      console.log(JSON.stringify(_array));
      // setAccounts(_array);
      onGetAccounts(_array);
    }
      );
  });

  // console.log("Value before returning", myAccounts);

  // return myAccounts;
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

export default {setupAccount, getAccounts, addAccount};