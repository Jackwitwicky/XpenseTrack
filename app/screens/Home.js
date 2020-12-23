import React from 'react';
import { FlatList, View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';
import HorizontalDivider from '../components/HorizontalDivider';
import Screen from '../components/Screen';
import TransactionItem from '../components/TransactionItem';

const DATA = [
  {
    id: 1,
    name: "Steak for lunch",
    date: "09/12/2020",
    type: "expense",
    amount: 2600,
    category: { name: "food", color: colors.food }
  },
  {
    id: 2,
    name: "Savings Interest",
    date: "09/12/2020",
    type: "income",
    amount: 450,
    category: { name: "finance", color: colors.finance }
  },
  {
    id: 3,
    name: "Shopping",
    date: "02/12/2020",
    type: "expense",
    amount: 5400,
    category: { name: "shopping", color: colors.shopping }
  }
]

function Home(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.top}>
        <Text style={styles.homeTitle}>Here's your current financial report of the month</Text>

        <View style={styles.card}>
          <Text style={styles.headerTitle}>Total Savings</Text>
          <View>
            <Text style={styles.header}>Ksh 24,050</Text>
          </View>
          <HorizontalDivider style={styles.stylishDivider}/>

          <View style={styles.expenditureContainer}>
            <View style={styles.expenseContainer}>
              <MaterialCommunityIcons name="wallet" color={colors.primary} size={30} />

              <View style={styles.expenseDetails}>
                <Text style={styles.headerTitle}>Expense</Text>
                <Text style={styles.expenseAmount}>Ksh 1,250</Text>
              </View>
            </View>

            <View style={styles.expenseContainer}>
              <MaterialCommunityIcons name="wallet-plus" color={colors.primary} size={30} />

              <View style={styles.expenseDetails}>
                <Text style={styles.headerTitle}>Income</Text>
                <Text style={styles.expenseAmount}>Ksh 1,356</Text>
              </View>
            </View>
          </View>

          <View style={styles.summaryContainer}>
              <Text style={styles.summaryEmoji}>😃</Text>
              <Text style={styles.summaryMessage}>Your budget is doing great!</Text>
            </View>
        </View>
      </View>

      <View style={styles.bottom}>

        <View style={styles.transactionHeading}>
          <Text style={styles.transactionTitle}>Recent Activity</Text>
          <Text style={styles.viewAllButton}>View All</Text>
        </View>

        <FlatList
        data={DATA}
        keyExtractor={(account) => account.id.toString()}
        renderItem={({ item }) => <TransactionItem name={item.name} amount={item.amount} type={item.type} date={item.date} category={item.category} />} />

      </View>


    </Screen>
  );
}

const styles = StyleSheet.create({
  bottom: {
    flex: 2,
    padding: 16
  },
  card: {
    alignSelf: "center",
    width: "90%",
    backgroundColor: colors.white,
    marginTop: 30,
    borderRadius: 15,
    padding: 16,
    elevation: 8
  },
  expenditureContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  expenseContainer: {
    flexDirection: "row"
  },
  expenseDetails: {
    marginLeft: 10
  },
  expenseTitle: {
    fontSize: 10,
    marginBottom: 3
  },
  expenseAmount: {
    fontWeight: "bold",
    fontSize: 18
  },
  headerTitle: {
    fontSize: 12,
    marginBottom: 3
  },
  homeTitle: {
    color: colors.textLight,
    fontSize: 16
  },
  listView: {
    flexDirection: "row",
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
  },
  stylishDivider: {
    marginVertical: 20,

  },
  summaryContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  summaryEmoji: {
    marginRight: 10
  },
  summaryMessage: {
    fontSize: 14
  },
  transactionHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginBottom: 10
  },
  transactionTitle: {
    fontSize: 16
  },
  top: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 16
  },
  viewAllButton: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16
  }
  
})

export default Home;