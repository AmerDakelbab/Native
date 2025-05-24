import React from 'react';
import { View, Text, Pressable, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Input from 'components/input';
import ContButton from 'components/ContButton';



export default function PersInfo({ navigation }) {
    return (
        <View className='bg-white flex-1 '>
            <View className='flex justify-between flex-1'>
                <View>
            <View className='mt-5 mx-5 mb-3'>
                <Text className="text-black font-inter-bold mb-3 text-4xl font-bold w-3/4">Personal information</Text>
            </View>
            
            <Input title={'First Name'}/>

           <Input title={'Last Name'} showImage={false}/>

           <Input title={'E-mail'} showImage={false}/>

            <Input title={'Date of birth (DD/MM/YYYY)'}/>

            <Input title={'Nationality'}/>
            </View>
            <View className=''>
                <ContButton />
            </View>
            </View>
        </View>
    )
}