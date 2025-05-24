import React from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ToggleInput from 'components/toggleInput';
import ContButton from 'components/ContButton';
import Input from 'components/input';


export default function IdentityDocument({ navigation }) {
    return (
        <View className='bg-white flex-1 '>
            
                
                    <View className=' justify-between flex-1'>
                        <View>
                    <View className='mt-5 mx-5 mb-3'>
                        <Text className="text-pb font-inter-bold mb-3 text-4xl font-bold w-3/4">Identity document</Text>
                        <Text className='text-gg text-xl w-5/6 font-inter'>xxxxxxxxxx xxxxxx xxxxxxxx xxxxxxxx xxxxxxx xxxxxxxxx xx xxxxxxxxxx x xxxxxxx</Text>
                    </View>
                    {/* nationality omar! */}
                    <View>
                        <Input title={'Select issuing country'}
                            showImage={true} />
                    </View>
                    <View className='mx-5  mt-5  mb-5'>
                        <Text className='text-lg text-black'>Choose your document type</Text>
                    </View>
                    <View>
                        <ToggleInput
                            title={'Passport'}
                            description={''}
                            className={'h-20 bg-gl   flex flex-row justify-between items-center mx-4 px-6  rounded-2xl mt-4'}
                            textClassName={'text-pb text-xl font-bold mt-5 '}
                        />
                        <ToggleInput
                            title={'Driver’s license'}
                            description={''}
                            className={'h-20 bg-gl   flex flex-row justify-between items-center mx-4 px-6  rounded-2xl mt-4'}
                            textClassName={'text-pb text-xl font-bold mt-5 '}
                        />
                        <ToggleInput
                            title={'ID card'}
                            description={''}
                            className={'h-20 bg-gl   flex flex-row justify-between items-center mx-4 px-6  rounded-2xl mt-4'}
                            textClassName={'text-pb text-xl font-bold mt-5 '}
                        />
                        <ToggleInput
                            title={'Residence permit'}
                            description={''}
                            className={'h-20 bg-gl  flex flex-row justify-between items-center mx-4 px-6  rounded-2xl mt-4'}
                            textClassName={'text-pb text-xl font-bold mt-5 '}
                        />
                        
                    </View>
                    </View>
                    <View>
                        <ContButton 
                        navigation={navigation}
                        navigateTo={'CameraAccess'}
                            
                        />
                    </View>
                    </View>
                </View>
            
    )
}