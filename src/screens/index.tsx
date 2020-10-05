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

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';

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
      <View style={styles.styleMatter}></View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  touch: {
    height: '50@vs',
    width: '350@s',
    borderColor: 'gray',
    backgroundColor: 'yellow',
  },
  styleMatter: {
    backgroundColor: 'blue',
    width: scale(300),
    height: verticalScale(50),
    padding: moderateScale(5),
    margin: '20@s',
  },
});
