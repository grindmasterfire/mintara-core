import React from 'react'; import { View, Text, StyleSheet } from 'react-native';

export default function GameRoomScreen() { return ( <View style={styles.container}> <Text style={styles.title}>Game Room</Text> <Text>12 games coming soon</Text> <Text style={styles.note}>Mining Ads play during gameplay</Text> </View> ); }

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }, title: { fontSize: 24, color: '#fff', marginBottom: 20 }, note: { fontSize: 12, color: '#aaa', marginTop: 10 } });