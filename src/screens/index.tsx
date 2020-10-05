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
  navigation: StackNavigationProp<RootStackParamList, 'index'>;
  route: RouteProp<RootStackParamList, 'index'>;
};

export const index: React.FC<Props> = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>index　screen</Text>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate('Show')}
      >
        <Text>Touch</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  touch: {
    height: 75,
    width: '100%',
    borderColor: 'gray',
    backgroundColor: 'yellow',
  },
});
