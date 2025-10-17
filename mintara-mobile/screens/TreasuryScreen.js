import React from 'react'; import { View, Text, StyleSheet } from 'react-native';

export default function TreasuryScreen() { return ( <View style={styles.container}> <Text style={styles.title}>Living Treasury</Text> <Text style={styles.label}>War Chest: 0</Text><Textstyle=styles.label>MTRAPrice:0.00</Text> <Text style={styles.label}>Backing Ratio: 0%</Text> </View> ); }

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }, title: { fontSize: 24, color: '#fff', marginBottom: 20 }, label: { fontSize: 16, color: '#aaa', marginTop: 10 } });