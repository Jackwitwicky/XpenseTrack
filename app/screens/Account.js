import * as React from 'react';
import { View, StyleSheet, Dimensions, PlatformColor } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Screen from '../components/Screen';
import colors from '../config/colors';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function Account() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Expenses' },
    { key: 'second', title: 'Income' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: colors.primary }}
    />
  );

  return (
    <Screen>
      <View style={styles.top}>

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
    backgroundColor: colors.primary
  }
});