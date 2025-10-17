import React from 'react'; import { View, Text, StyleSheet } from 'react-native';

export default function PFSwapScreen() { return ( <View style={styles.container}> <Text style={styles.title}>PF Swap</Text> <Text>Trade PF for crypto/NFTs</Text> <Text style={styles.note}>Zero fees, escrow protected</Text> </View> ); }

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }, title: { fontSize: 24, color: '#fff', marginBottom: 20 }, note: { fontSize: 12, color: '#aaa', marginTop: 10 } });