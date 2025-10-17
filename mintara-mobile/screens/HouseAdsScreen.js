import React from 'react'; import { View, Text, StyleSheet } from 'react-native';

export default function HouseAdsScreen() { return ( <View style={styles.container}> <Text style={styles.title}>House Ads Playing...</Text> <Text style={styles.subtitle}>2 ads (60 seconds total)</Text> </View> ); }

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }, title: { fontSize: 24, color: '#fff', marginBottom: 10 }, subtitle: { fontSize: 14, color: '#aaa' } });