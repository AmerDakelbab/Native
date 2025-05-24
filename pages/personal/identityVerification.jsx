import React from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ToggleInput from 'components/toggleInput';
import ContButton from 'components/ContButton';


export default function IdentityVerification({ navigation }) {
    return (
        <View className='bg-white flex-1 '>
            <View className='flex justify-between flex-1'>
        <View>
            <View className='mt-5 mx-5 mb-3'>
                <Text className="text-pb font-inter-bold mb-3 text-4xl font-bold w-3/4">Identity verification</Text>
                <Text className='text-gg text-xl w-4/6 font-inter'>Let's get you verified
                    Confirm your country of residence to learn how your personal data will be processed</Text>
            </View>
            <View className='mx-5   mt-5  mb-5'>
                <Text className='text-base'>Select your country of residence:</Text>
            </View>

            <View>
                <ToggleInput
                    title={'All country execpt USA'}
                    description={''}
                    className={'h-20 bg-gl shadow-sm shadow-gray-300 flex flex-row justify-between items-center mx-4 px-6  rounded-2xl mt-4'}
                    textClassName={'text-pb text-xl font-bold mt-5 '}
                />
            </View>

            <View>
                <ToggleInput
                    title={'United States of America'}
                    description={''}
                    className={'h-20 bg-gl shadow-sm shadow-gray-300 flex flex-row justify-between items-center mx-4 px-6  rounded-2xl mt-4'}
                    textClassName={'text-pb text-xl font-bold mt-5 '}
                />
            </View>

            <View className='mx-10 mt-10 w-5/6 '>
                <Text className='text-gg text-base font-inter-bold  font-semibold'>By clicking the "Continue" button I agree that I have read the <Text className='text-og'>Privacy Notice</Text> and give my consent to the processing of my personal data, including biometrics, as described in this<Text className='text-og'> Notification to Processing of Personal Data.</Text></Text>
            </View>
</View>
            <View>
                <ContButton
                navigation={navigation}
                navigateTo='Sumsub'
                />
            </View>
            </View>
        </View>
    )
}