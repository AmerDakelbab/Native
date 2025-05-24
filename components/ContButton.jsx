import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ContButton({
    navigation,
    navigateTo,
    title = 'Continue',


}) {
    return (
    <View className='mx-4 mb-10 '>
        <Pressable onPress={() => navigation.navigate(navigateTo)} className='bg-pb w-full h-20 rounded-xl items-center justify-center'>
            <Text className='text-white font-semibold text-lg font-inter-bold'>{title}</Text>
        </Pressable>
    </View>
    )
}