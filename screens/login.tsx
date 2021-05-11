import React, { useState } from 'react'
import { Text, SafeAreaView, ScrollView, TextInput, View, StyleSheet, TouchableOpacity, Linking, KeyboardAvoidingView, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

enum InputType {
    username = 'username',
    password = 'password',
}

export const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const renderTextInput = (inputType: InputType) => {
        const isUsername = inputType === InputType.username
        const placeholder = isUsername ? 'Username' : 'Password'
        return (
            <View style={styles.input}>
                <TextInput
                    style={styles.textInput}
                    placeholder={placeholder}
                    autoCapitalize='none'
                    secureTextEntry={!isUsername}
                    onChangeText={(text) => { isUsername ? setUsername(text) : setPassword(text) }}
                />
            </View>
        )
    }

    const buttonEnabled = username.length > 3 && password.length > 8

    return (
        <KeyboardAvoidingView style={styles.keyboardAwareContainer} behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <SafeAreaView>
                    {renderTextInput(InputType.username)}
                    {renderTextInput(InputType.password)}
                    <View style={styles.socialLoginContainer}>
                        <TouchableOpacity style={styles.socialLoginButton}>
                            <Ionicons
                                name="logo-apple"
                                size={24}
                                style={styles.sociaLoginIcon} />
                            <Text>Signup With Apple</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialLoginButton}>
                            <Ionicons
                                name="ios-logo-facebook"
                                size={24}
                                color='blue'
                                style={styles.sociaLoginIcon} />
                            <Text>Signup With Facebook</Text>
                        </TouchableOpacity>

                        <Text style={styles.disclaimer}>By creating an account, you are indicating that you agree to the <Text style={[styles.disclaimer, styles.disclaimerLink]} onPress={() => Linking.openURL('https://www.google.com')}>Terms of use</Text> and that you are over the age of 13.</Text>

                        <TouchableOpacity
                            disabled={!buttonEnabled}
                            style={[styles.submitButton, buttonEnabled && styles.enabledSubmitButton]}>
                            <Text style={styles.submitButtonText}>Next</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton}>
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    keyboardAwareContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        justifyContent: 'center', 
        margin: 30
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        flex: 1
    },
    scrollViewContent: {
        flex: 1,
        flexDirection: 'row',
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        marginBottom: 20,
        borderColor: '#e1e1e1',
        borderBottomWidth: 1
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
    },
    socialLoginContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    socialLoginButton: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'gray',
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        width: '70%'
    },
    sociaLoginIcon: {
        marginRight: 10
    },
    submitButton: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
        shadowColor: '#000000',
        backgroundColor: '#CCCCCC'
    },
    enabledSubmitButton: {
        backgroundColor: 'red'
    },
    shadowContainer: {
        flex: 1,
        alignItems: 'center',
        height: 50,
        backgroundColor: 'white'
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    },
    cancelButton: {
        marginBottom: 40
    },
    cancelButtonText: {
        fontSize: 14,
        color: 'gray',
        textDecorationLine: 'underline',
        marginTop: 20
    },
    disclaimer: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 22,
        marginTop: 50,
        textAlign: 'center'
    },
    disclaimerLink: {
        textDecorationLine: 'underline'
    }
})