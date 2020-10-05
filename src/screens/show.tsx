import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
// typeのインポート
import { RootStackParamList } from '../types/navigation';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RouteProp } from '@react-navigation/native';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'show'>;
  route: RouteProp<RootStackParamList, 'show'>;
};

export const show: React.FC<Props> = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>show　screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
