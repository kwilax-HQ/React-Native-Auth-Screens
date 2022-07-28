import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const themeColor = '#4267B2';

interface IScreenLayout {
  screenHeader?: string;
  children?: React.ReactNode;
}

const ScreenLayout = ({screenHeader, children}: IScreenLayout) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={themeColor} barStyle="light-content" />
      <View style={styles.screenExtra}>
        <Text style={styles.screenExtraText1}>{screenHeader}</Text>
      </View>
      <View style={styles.formArea}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: themeColor,
  },
  screenExtra: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 48,
  },
  screenExtraText1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  formArea: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 24,
    minHeight: 360,
  },
});
