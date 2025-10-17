import React from 'react'; import { View, Text, StyleSheet } from 'react-native';

export default function PermafrostScreen() { return ( <View style={styles.container}> <Text style={styles.title}>Permafrost</Text> <Text style={styles.label}>Convert MTRA → PF</Text> <Text style={styles.label}>Claim PF Sweat</Text> </View> ); }

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }, title: { fontSize: 24, color: '#fff', marginBottom: 20 }, label: { fontSize: 14, color: '#aaa', marginTop: 10 } });