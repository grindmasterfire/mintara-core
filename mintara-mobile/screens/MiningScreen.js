import React from 'react'; import { View, Text, StyleSheet } from 'react-native';

export default function MiningScreen() { return ( <View style={styles.container}> <Text style={styles.title}>Mining</Text> <Text>Game selection coming soon</Text> </View> ); }

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }, title: { fontSize: 24, color: '#fff', marginBottom: 20 } });