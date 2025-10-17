import React from 'react'; import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen() { return ( <View style={styles.container}> <Text style={styles.logo}>🔥 MINTARA 🔥</Text> </View> ); }

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }, logo: { fontSize: 48, color: '#ff6600' } });