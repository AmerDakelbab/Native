import ContButton from "components/ContButton";
import React from "react";
import { View, Text, ScrollView, Pressable } from 'react-native'


export default function Reviews({ navigation }) {
    return (
        <View className='bg-white flex-1 '>
            <View className='mt-5 mx-5 mb-5'>
                <Text className="text-pb font-inter-bold mb-3 text-4xl font-bold w-3/4">Reviews</Text>
                <Text className='text-gy text-xl w-3/4 font-inter'>Please check the information below to make sure everything is correct.</Text>
            </View>
            <ScrollView>
                <View className="flex flex-row justify-between items-center mx-4">
                    <Text className="font-inter-bold text-xl font-bold">Applicant data</Text>
                    <Pressable>
                        <Text className="text-pb text-xl">Edit</Text>
                    </Pressable>
                </View>
                <View>
                    {/* {inputs} */}
                </View>
                <View>
                    {/* Second Inputs */}
                </View>
                <View className="flex flex-row justify-between items-center mx-4">
                    <Text className="font-inter-bold text-xl font-bold">Identity documents</Text>
                    <Pressable>
                        <Text className="text-pb text-xl">Edit</Text>
                    </Pressable>
                </View>
            </ScrollView>
            <View>
                <ContButton />
            </View>
            </View>
            ); 
}