import React, {useEffect, useState} from "react";
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import * as Icons from 'react-native-heroicons/outline'
import * as ImagePicker from 'expo-image-picker'

export default function VendorProfile(){

    const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
    const [image, setImage] = useState(null)


    const pickImage = async () => {
        const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
        setHasGalleryPermission(galleryStatus.status === 'granted')
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [6,5],
            quality: 1
        })
        console.log(result)
        if(result.canceled){
            setImage(result.uri)
        }
        if(hasGalleryPermission === false) {
            return(<Text>No Access to Internal Storage</Text>)
        }
    }

    return(
            <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
                <View className="flex-row justify-between mt-12 mx-7" >
                    <Icons.ArrowLeftIcon size={32} color='black'/>
                    <Icons.EllipsisVerticalIcon size={32} color='black'/>
                </View>
                <TouchableOpacity onPress={()=>pickImage()}>
                    <View className="self-center">
                        <View className="w-48 h-48 rounded-full overflow-hidden bg-slate-400">
                            <Image source={require('../../assets/images/mus.jpg')} className="flex-1"/>
                        </View>
                    </View>
                </TouchableOpacity>
                <View className="flex-row justify-between self-center mt-10">
                    <View className="items-center flex-1">
                        <Text className="font-semibold text-base">155 DT</Text>
                        <View className="flex-row">
                            <Text className="mt-1 mr-1 font-normal text-base">Transactions</Text>
                            <Icons.ArrowsRightLeftIcon size={32} color='black'/>
                        </View>
                    </View>
                    <View className="items-center flex-1" style={{borderColor: 'black', borderLeftWidth: 1, borderRightWidth: 1}}>
                        <Text className="font-semibold text-base">2950 DT</Text>
                        <View className="flex-row">
                            <Text className="mt-1 mr-1 font-normal text-base">Balance</Text>
                            <Icons.CreditCardIcon size={32} color='black'/>
                        </View>
                    </View>
                    <View className="items-center flex-1">
                        <Text className="font-semibold text-base">700</Text>
                        <View className="flex-row">
                            <Text className="mt-1 font-normal text-base">Winnings</Text>
                            <Icons.ArrowTrendingUpIcon size={32} color='black' />
                        </View>
                    </View>
                </View>
            </ScrollView>
    )
}