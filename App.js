import React from 'react';
import Lottie from 'lottie-react-native';
import { SafeAreaView } from 'react-native';
import poket from './assets/poket.json'

export default function Animation() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Lottie resizeMode="contain" autoSize source={poket} autoPlay loop />
    </SafeAreaView>
  );
}
