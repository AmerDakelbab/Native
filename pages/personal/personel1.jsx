import { Image, Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import ListInput from 'components/ListInput'
import TaskInput from 'components/taskInput'

export default function Personel1({ navigation }) {
    return (

        <View className='bg-white flex-1 '>
            <StatusBar hidden={false} />
            <View className='mt-5 mx-5 mb-3'>
                <Text className="text-black font-inter-bold mb-3 text-4xl font-bold w-3/4">Verify your identity</Text>
                <Text className='text-gy text-xl w-3/4 font-inter'>We need to check that you are who you say you are. Here's how you can do it.</Text>
            </View>
            <View className='mx-5 mt-5 mb-6'>
                <Text className='font-inter-bold text-xl font-semibold'>Method of verification</Text>
            </View>

            <ListInput
            title={'Personal information'}
            navigation={navigation}
            NavigateTo={'persInfo'}
            />
            <ListInput
            title={'Activites'}
            navigation={navigation}
            NavigateTo={'Activites'}
            />
            <ListInput
            title={'Operations activity'}
            navigation={navigation}
            NavigateTo={'OperationAct'}

            />
            <ListInput
            title={'Services'}
            imageSource={require('../../assets/car.png')}
            navigation={navigation}
            NavigateTo={'Services'}
            />
            <ListInput
            title={'Identity verification'}
            imageSource={require('../../assets/car.png')}
            navigation={navigation}
            NavigateTo={'IdentityVerification'}
            />


            

            

            

            <View className='w-full px-6 pt-12'>
                <Pressable className='bg-white w-full h-20 rounded-full items-center justify-center'>
                    <Text className='text-black font-semibold text-xl font-inter-bold'>Skip for now</Text>
                </Pressable>
            </View>




        </View>

    )
}
