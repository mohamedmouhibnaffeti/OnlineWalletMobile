import * as React from 'react'
import { View , Text, TouchableHighlight } from 'react-native'
import { Button, PaperProvider, Portal,  Modal, TextInput } from 'react-native-paper'
import {LinearGradient} from 'expo-linear-gradient'
import * as Icons from 'react-native-heroicons/solid'

export default function VendorTransaction(){

    //Send money modal properties
    const [Sendvisible, setSendVisible] = React.useState(false);
    const showSendModal = () => setSendVisible(true);
    const hideSendModal = () => setSendVisible(false);
    const SendcontainerStyle = {backgroundColor: 'white', padding: 20};

    //withdraw money modal properties
    const [withdrawvisible, setwithdrawVisible] = React.useState(false);
    const showwithdrawModal = () => setwithdrawVisible(true);
    const hidewithdrawModal = () => setwithdrawVisible(false);
    const withdrawcontainerStyle = {backgroundColor: 'white', padding: 20};
    return(
        <PaperProvider>
            <Portal>
                <Modal visible={Sendvisible} onDismiss={hideSendModal} contentContainerStyle={SendcontainerStyle}>
                    <View className="w-96 items-center justify-center flex-row gap-3">
                        <Text className="text-xl font-bold text-purple-900 self-center">Send Money</Text>
                        <Icons.PaperAirplaneIcon size={32} color="purple" />
                    </View>
                    <TextInput mode="outlined" keyboardType='numeric' label="Phone Number" style={{marginTop: 15}} placeholder="Enter receiver's phone number" right={<TextInput.Affix text="/8" />} />
                    <TextInput mode="outlined" keyboardType='numeric' style={{marginTop: 15}} label="Amount" placeholder="Enter amount to send" />
                    <TextInput label="Password" secureTextEntry style={{marginTop: 15}} mode='outlined' right={<TextInput.Icon icon="eye" />} /> 
                    <Button mode="contained" style={{height: 52,width: 120 ,marginTop: 20, alignSelf: 'center', justifyContent: 'center'}} onPress={hideSendModal}>
                        Send
                    </Button>
                </Modal>
            </Portal>
            <Portal>
                <Modal visible={withdrawvisible} onDismiss={hidewithdrawModal} contentContainerStyle={withdrawcontainerStyle}>
                    <View className="w-96 items-center justify-center flex-row gap-3">
                        <Text className="text-xl font-bold text-purple-900 self-center">Withdraw Money</Text>
                        <Icons.BanknotesIcon size={32} color="purple" />
                    </View>
                    <TextInput mode="outlined" keyboardType='numeric' style={{marginTop: 15}} label="Amount" placeholder="Enter amount to send" />
                    <TextInput label="Password" secureTextEntry style={{marginTop: 15}} mode='outlined' right={<TextInput.Icon icon="eye" />} /> 
                    <Button mode="contained" style={{height: 52,width: 120 ,marginTop: 20, alignSelf: 'center', justifyContent: 'center'}} onPress={hidewithdrawModal}>
                        Withdraw
                    </Button>
                </Modal>
            </Portal>
            <View className="flex-1 justify-center items-center">
                <LinearGradient colors={['#ff7756', '#ffa18b' ,'#ffad98']} locations={[0.05,0.6,1]} className="w-96 h-48 bg-slate-200 rounded-xl items-center " start={{x: 0.0, y: 0.25}} >
                    <View className="items-center flex-row gap-3 mt-0">
                        <Text className="text-xl font-bold text-white">Send Money</Text>
                        <Icons.PaperAirplaneIcon size={32} color="white" />
                    </View>
                    <Text className="mt-1 font-normal text-sm text-white text-center">To send the money you must enter the receiver's phone number and the amount of money you want to send.</Text>
                    <Button mode="elevated" style={{height: 52,width: 120 ,marginTop: 20, justifyContent: 'center'}} onPress={showSendModal}>
                        Send
                    </Button>
                </LinearGradient>
                <LinearGradient colors={['#ff7756', '#ffa18b' ,'#ffad98']} locations={[0.05,0.6,1]} className="w-96 h-48 bg-slate-200 rounded-xl items-center mt-12 mb-12 " start={{x: 0.0, y: 0.25}} >
                    <View className="items-center flex-row gap-3 mt-0">
                        <Text className="text-xl font-bold text-white">Withdraw Money</Text>
                        <Icons.BanknotesIcon size={32} color="white" />
                    </View>
                    <Text className="mt-1 font-normal text-sm text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</Text>
                    <Button mode="elevated" style={{height: 52,width: 120 ,marginTop: 20, justifyContent: 'center'}} onPress={showwithdrawModal}>
                        Withdraw
                    </Button>
                </LinearGradient>
            </View>
        </PaperProvider>
    )
}