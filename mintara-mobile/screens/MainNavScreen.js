import React from 'react'; import { View, Text, StyleSheet } from 'react-native';

export default function MainNavScreen() { return ( <View style={styles.container}> <Text style={styles.title}>Mintara Hub</Text> <Text style={styles.subtitle}>News & Updates</Text> <Text style={styles.nav}>Mining | Game Room | Treasury | Wallet</Text> <Text style={styles.nav}>Staking | Permafrost | PF Swap | Profile</Text> </View> ); }

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }, title: { fontSize: 28, color: '#fff', marginBottom: 10 }, subtitle: { fontSize: 14, color: '#aaa', marginBottom: 30 }, nav: { fontSize: 12, color: '#ff6600', marginTop: 5 } });