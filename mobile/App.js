import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Router from './src/routes';

export default function App() {
  return (
    <Router/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E02041',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
