import React, { useState } from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import ToggleInput from 'components/toggleInput';
import ContButton from 'components/ContButton';



export default function Services({ navigation }) {

    return (
        <View className='bg-white flex-1 '>
            <View className='mt-5 mx-5 mb-3'>
                <Text className="text-pb font-inter-bold mb-3 text-4xl font-bold w-3/4">Services</Text>
                <Text className='text-gy text-xl w-3/4 font-inter'>What types of services do you plan to use?</Text>
            </View>
            <ScrollView className='mb-10'>
                <View>
                    <ToggleInput
                        title={'Experience'}
                        description={'xxxxxxxxxxxxxxxxxxxxxxxxxxx'}
                    />
                </View>

                <View>
                    <ToggleInput
                        title={'Money transfer'}
                        description={'xxxxxxxxxxxxxxxxxxxxxxxxxxx'}
                    />
                </View>
                <View>
                    <ToggleInput
                        title={'SWIFT payments'}
                        description={'xxxxxxxxxxxxxxxxxxxxxxxxxxx'}
                    />
                </View>
                <View>
                    <ToggleInput
                        title={'SEPA Inst'}
                        description={'xxxxxxxxxxxxxxxxxxxxxxxxxxx'}
                    />
                </View>
                <View>
                    <ToggleInput
                        title={'Target 2 payment'}
                        description={'xxxxxxxxxxxxxxxxxxxxxxxxxxx'}
                    />
                </View>
                <View>
                    <ToggleInput
                        title={'Cards'}
                        description={'xxxxxxxxxxxxxxxxxxxxxxxxxxx'}
                    />
                </View>
                <View>
                    <ToggleInput
                        title={'Cash Over Counter'}
                        description={'xxxxxxxxxxxxxxxxxxxxxxxxxxx'}
                    />
                </View>
            </ScrollView>
            <View>
                <ContButton />
            </View>
        </View>
    )
}