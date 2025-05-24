import React from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ToggleInput from 'components/toggleInput';
import ContButton from 'components/ContButton';
import Input from 'components/input';


export default function Sumsub({ navigation }) {
    return (
        <View className='bg-white flex-1'>
            <StatusBar style="auto" />
            <View className='flex-1'>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 100 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View className='mt-5 mx-5 mb-3'>
                        <Text className="text-pb font-inter-bold mb-3 text-4xl font-bold w-3/4">Sumsub Applicant data</Text>
                        <Text className='text-gg text-xl w-5/6 font-inter'>xxxxxxxxxx xxxxxx xxxxxxxx xxxxxxxx</Text>
                    </View>

                    <View className=''>
                        <Input title={'First Name'} showImage={false} />
                        <Input title={'Last Name'} />
                        <Input title={'E-mail'} showImage={false} />
                        <Input title={'Date of Birth'} showImage={false} />
                        <Input title={'Nationality'} showImage={true} />
                        <Input title={'City *'} showImage={false} />
                        <Input title={'Address line 1 *'} showImage={false} />
                        <Input title={'Address line 2 *'} showImage={false} />
                        <Input title={'Post code'} showImage={false} />
                    </View>
                </ScrollView>

                
                <View className='absolute bottom-0 w-full px-5 pb-5'>
                    <ContButton
                        navigation={navigation}
                        navigateTo={'IdentityDocument'}
                    />
                </View>
            </View>
        </View>
    );
}
