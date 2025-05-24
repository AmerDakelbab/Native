import React from 'react';
import { View, Text, Pressable, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import ListInput from 'components/ListInput';
import TaskInput from 'components/taskInput';




export default function Activites({ navigation }) {
    return (
        <View className='bg-white flex-1 '>
            <View className='flex justify-between flex-col flex-1'>
                <View>
                    <View className='mt-5 mx-5 mb-3'>
                        <Text className="text-black font-inter-bold mb-3 text-4xl font-bold w-3/4">Activites</Text>
                    </View>
                
                    <TaskInput
                        Title={'What is your current occupation ?'}
                        
                    />
                    <TaskInput
                        Title={'What will be the source of funds ?'}
                    />

                   

                    <View className='h-14 mt-16 bg-[#F5F5F5] flex flex-row items-center mx-4  rounded-2xl'>
                        <Image className='ml-5 mr-3 object-contain' source={require('../../assets/plus.png')} />
                        <Text className='text-pb text-xl font-inter-bold font-semibold' >Operations activity</Text>
                    </View>
                </View>

                <View className='mx-4 mb-8'>
                    <Pressable className='bg-pb w-full h-20 rounded-xl items-center justify-center'>
                        <Text className='text-white font-semibold text-lg font-inter-bold'>Continue</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}