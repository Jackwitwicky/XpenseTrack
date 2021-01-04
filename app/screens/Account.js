import * as React from 'react';
import { FlatList, View, StyleSheet, Dimensions, PlatformColor, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import AppButton from "../components/AppButton";
import AppTextHeader from '../components/AppTextHeader';
import colors from '../config/colors';
import Screen from '../components/Screen';
import TransactionItem from "../components/TransactionItem";

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
    type: "expense",
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

const INCOME_DATA = [
  {
    id: 1,
    name: "Salary",
    date: "09/12/2020",
    type: "income",
    amount: 2600,
    category: { name: "bank-outline", color: colors.finance }
  },
  {
    id: 2,
    name: "Savings Interest",
    date: "09/12/2020",
    type: "income",
    amount: 450,
    category: { name: "bank-outline", color: colors.finance }
  },
  {
    id: 3,
    name: "App Side Project",
    date: "02/12/2020",
    type: "income",
    amount: 50400,
    category: { name: "bank-outline", color: colors.finance }
  }
]

const ExpenseRoute = () => (
  <View style={[styles.scene]}>
    <FlatList
        data={DATA}
        keyExtractor={(account) => account.id.toString()}
        renderItem={({ item }) => <TransactionItem name={item.name} amount={item.amount} type={item.type} date={item.date} category={item.category} />} />
  </View>
);

const IncomeRoute = () => (
  <View style={[styles.scene]}>
    <FlatList
        data={INCOME_DATA}
        keyExtractor={(account) => account.id.toString()}
        renderItem={({ item }) => <TransactionItem name={item.name} amount={item.amount} type={item.type} date={item.date} category={item.category} />} />
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function Account({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Expenses' },
    { key: 'second', title: 'Income' },
  ]);

  const renderScene = SceneMap({
    first: ExpenseRoute,
    second: IncomeRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: colors.primary }}
    />
  );

  const onTopUp = (navigation) => {
    console.log("I should top up");
    navigation.navigate("TopUpAccount");
  }

  return (
    <Screen>
      <View style={styles.top}>
        <Text style={styles.accountBalanceHeader}>Current Balance</Text>
        <AppTextHeader  style={styles.accountBalance}>Ksh 630, 000</AppTextHeader>
        <AppButton title="Top Up" color="secondary" onPress={() => onTopUp(navigation)}></AppButton>
      </View>

      <View style={styles.bottom}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bottom: {
    flex: 2
  },
  scene: {
    flex: 1,
  },
  top: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  accountBalance: {
    color: colors.textLight,
    marginVertical: 10
  },
  accountBalanceHeader: {
    color: colors.textLight
  }
});