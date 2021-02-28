import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { IconButton } from 'react-native-paper'
import { block } from 'react-native-reanimated'
import { LinearGradient } from 'expo-linear-gradient';

const AccountScreen = ({navigation}) => {
    return (
        <View style={styles.principal}>
            <StatusBar style='dark' />
            <View style={styles.circuloNE} />

            <View style={styles.circuloS} />
            <View style={styles.circuloSE} />

            <View style={styles.prueba3}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#7A83D6', '#fff', '#fff']}
                    style={styles.button1}>
                    <Text style={styles.text}></Text>
                </LinearGradient>
            </View>
            <View style={styles.prueba4}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#fff', '#fff', '#FF99CC']}
                    style={styles.button2}>
                    <Text style={styles.text}></Text>
                </LinearGradient>
            </View>

            <View style={styles.prueba}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#7A83D6', '#fff', '#fff']}
                    style={styles.button1}>
                    <Text style={styles.text}></Text>
                </LinearGradient>
            </View>
            <View style={styles.prueba2}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#fff', '#fff', '#FF99CC']}
                    style={styles.button2}>
                    <Text style={styles.text}></Text>
                </LinearGradient>
            </View>
            <View style={styles.prueba5}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#7A83D6', '#fff', '#fff']}
                    style={styles.button1}>
                    <Text style={styles.text}></Text>
                </LinearGradient>
            </View>
            <View style={styles.prueba6}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#fff', '#fff', '#FF99CC']}
                    style={styles.button2}>
                    <Text style={styles.text}></Text>
                </LinearGradient>
            </View>
            <View style={styles.accountView} >
                <IconButton size={70} style={styles.account} icon="wallet" onPress={() => navigation.navigate=('LoginScreen')} />
                <Text style={styles.accountTxt}>
                    Mi cuenta
            </Text>
            </View>
            <View style={styles.cardView}>
                <IconButton size={70} style={styles.card} icon="credit-card" />
                <Text style={styles.cardTxt}>
                    Mi tarjeta virtual
                </Text>
            </View>
            <View style={styles.contactView}>
                <IconButton size={70} style={styles.contact} icon="contacts" />
                <Text style={styles.contactTxt}>
                    Mis contactos
                </Text>
            </View>
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({

    circuloNE: {
        position: "absolute",
        top: -350,
        right: -50,
        borderRadius: 400,
        backgroundColor: '#E52B2B',
        opacity: 0.4,
        width: 400,
        height: 400,
    },
    circuloS: {
        position: "absolute",
        borderRadius: 200,
        backgroundColor: '#E52B2B',
        opacity: 0.4,
        width: 250,
        height: 250,
        top: 680,
        left: 70,
    },
    circuloSE: {
        position: "absolute",
        top: 600,
        right: -80,
        borderRadius: 100,
        backgroundColor: '#3551F2',
        opacity: 0.4,
        width: 200,
        height: 200,
    },
    accountView: {
        margin: 30,
        flex: 1,
        alignItems: "flex-start",
        margin: 50,
        top: 100,
        right: 30,
    },
    accountTxt: {
        top: -80,
        right: -100,
        fontSize: 30,
        fontWeight: "bold",
    },

    cardView: {
        margin: 30,
        alignItems: "flex-start",
        flex: 1,
        margin: 50,
        top: 150,
        right: 30,
    },
    cardTxt: {
        top: -80,
        right: -100,
        fontSize: 30,
        fontWeight: "bold",
    },

    contactView: {
        margin: 30,
        alignItems: "flex-start",
        flex: 1,
        margin: 50,
        top: 200,
        right: 30,
    },
    contactTxt: {
        top: -80,
        right: -100,
        fontSize: 30,
        fontWeight: "bold",
    },
    prueba: {
        position:"absolute",
        top: -370,
        height: 100,
        width: "100%",
        left: 5,
    },
    prueba2: {
        position:"absolute",
        top: -51,
        height: 100,
        width: "100%",
        left: 5,
    },
    prueba3: {
        position:"absolute",
        top: -220,
        height: 100,
        width: "100%",
        left: 5,
    },
    prueba4: {
        position:"absolute",
        top: 101,
        height: 100,
        width: "100%",
        left: 5,
    },
    prueba5: {
        position:"absolute",
        top: -70,
        height: 100,
        width: "100%",
        left: 5,
    },
    prueba6: {
        position:"absolute",
        top: 251,
        height: 100,
        width: "100%",
        left: 5,
    },
    button1: {
        position: "absolute",
        top: 520,
        flexDirection: 'row',
        borderWidth: 0,
        height: 80,
        width: "100%",
        borderRadius: 30,
        backgroundColor: 'lightblue'
    },
    button2: {
        position: "absolute",
        top: 240,
        flexDirection: 'row',
        borderWidth: 0,
        height: 80,
        width: "100%",
        borderRadius: 30,
        backgroundColor: 'lightblue'
    },
});