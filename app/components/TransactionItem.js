import React from 'react';
import { Text, View, StyleSheet } from "react-native";

import ListItemIcon from "../components/ListItemIcon";
import colors from '../config/colors';

function TransactionItem({name, date, amount, type}) {
  return (
    <View style={styles.container}>
        <ListItemIcon />
        <View style={styles.detailsContainter}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.type}>{type == "expense" ? "-" : "+"}</Text>
          <Text style={styles.currency}></Text>
          <Text style={styles.amount}>{amount} ksh</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  detailsContainter: {
    flexDirection: "column",
    marginLeft: 30    
  },
  container: {
    flexDirection: "row",
    marginVertical: 16,
    marginHorizontal: 16
  },
  amount: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#1c2629",
  },
  currency: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1c2629",
  },
  amountContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  date: {
    marginTop: 6,
    color: colors.transactionDate,
    fontSize: 14
  },
  name: {
    color: colors.transactionName,
    fontWeight: "bold",
    fontSize: 16
  },
  type: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#1c2629",
    marginRight: 4
  },
  
})

export default TransactionItem;