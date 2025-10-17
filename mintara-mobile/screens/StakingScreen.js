import React from 'react'; import { View, Text, StyleSheet } from 'react-native';

export default function StakingScreen() { return ( <View style={styles.container}> <Text style={styles.title}>Staking</Text> <Text>Lock MTRA, earn APY</Text> </View> ); }

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }, title: { fontSize: 24, color: '#fff', marginBottom: 20 } });