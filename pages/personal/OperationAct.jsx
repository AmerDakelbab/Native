import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ContButton from 'components/ContButton';
import TaskInput from 'components/taskInput';

export default function OperationAct({ navigation }) {
    return (
        <View className='bg-white flex-1 '>
            <View className='mt-5 mx-5 mb-5'>
                <Text className="text-pb font-inter-bold mb-3 text-4xl font-bold w-3/4">Operation activity</Text>
                <Text className='text-gy text-xl w-3/4 font-inter'>What will be the expected transaction activity on the account?</Text>
            </View>

             <TaskInput 
                Title={'Monthly Turnover (EUR)'}
            />

            <TaskInput 
                Title={'N. of incoming transactions'}
            />

            <TaskInput
                Title={'N. of outgoing transactions'}
            />

            <TaskInput
                Title={'Value of incoming transactions '}
            />
            
            <TaskInput
                Title={'Value of outgoing transactions'}
            />

            <TaskInput
                Title={'Max. value of incoming payment'}
            />

            <TaskInput
                Title={'Max. value of outgoing payment'}
            />

            <View className='mx-2  mt-12'>
                <ContButton />
            </View>
        </View>

    )
}