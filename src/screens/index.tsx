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

import { Button, Appbar } from 'react-native-paper';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'index'>;
  route: RouteProp<RootStackParamList, 'index'>;
};

export const index: React.FC<Props> = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate('Show')}
      >
        <Text>Touch</Text>
      </TouchableOpacity>
      <View style={styles.styleMatter}></View>
      <Button
        style={styles.button}
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('Show')}
      >
        button
      </Button>
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
    margin: '25@s',
  },
  button: {
    width: '200@s',
    height: '50@s',
    backgroundColor: 'red',
    marginLeft: '75@s',
  },
});
