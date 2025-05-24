import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ToggleInput({
    title,
    description,
    onPress,
    image,
    className = 'h-28 bg-[white] shadow-sm shadow-gray-300 flex flex-row justify-between items-center mx-4 p-6 rounded-2xl mt-4',
    navigation,
    textClassName = 'text-pb text-xl font-bold ',
    onPressImage,
    onPressText,
    onPressText2
}) {
        const [isToggled, setIsToggled] = useState(false);
    return (
        <View className={className}>
            <View >
                <Text className={textClassName} >{title}</Text>
                <Text className='text-gy text-lg'>{description}</Text>
            </View>
            <View>
                <Pressable
                    onPress={() => setIsToggled(!isToggled)}
                >
                    <Image
                    source={isToggled ? require('../assets/on.png') : require('../assets/off.png')}
                    />
                </Pressable>
            </View>
        </View>
    )
}