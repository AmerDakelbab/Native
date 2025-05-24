import { Text, View, Pressable,Image } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'


export default function Home2({navigation}) {
  
    return (
      <View className='bg-white flex-1 '>
        <StatusBar hidden={false} />
        <View className='mt-5 mx-5'>
          <Text className="text-black font-inter-bold mb-3 text-4xl font-bold w-3/4">What kind of account would you like to open?</Text>
          <Text className='text-gy text-xl w-3/4 font-inter'>You will be able to add new accounts later on.</Text>
        </View>

        <View className='h-32 flex-row  items-start bg-[#F5F5F5] mt-10 mx-4 p-6 rounded-2xl'> 

          <View>
            <Image className='h-4 w-4 mt-1 mr-3' source={require('../assets/master.png')} />
          </View>

          <View className='mr-28'>
            <Text className='text-xl font-inter-bold font-semibold mb-2'>Personal Account</Text>
            <Text className='text-lg font-inter leading-[24px] max-w-56 text-gy'>Send,spend,receive, and exchange your money freely.</Text>
          </View>

          <View>
            <Pressable onPress={() => navigation.navigate('personel')} className='h-10 w-10 bg-white rounded-lg items-center justify-center'>
              <Image source={require('../assets/arrow.png')} />
            </Pressable>
          </View>
        
        </View>

        <View className='h-32 flex-row  items-start bg-[#F5F5F5] mt-3 mx-4 p-6 rounded-2xl'> 

          <View>
            <Image className='h-4 w-4 mt-1 mr-3' source={require('../assets/bag.png')} />
          </View>

          <View className='mr-20'>
            <Text className='text-xl font-inter-bold font-semibold mb-2'>Business Account</Text>
            <Text className='text-lg font-inter leading-[24px] max-w-64 text-gy'>Collect invoices, do freelance or business work internationally</Text>
          </View>

          <View>
            <Pressable onPress={() => navigation.navigate('Business1')} className='h-10 w-10 bg-white rounded-lg items-center justify-center'>
              <Image source={require('../assets/arrow.png')} />
            </Pressable>
          </View>

        </View>
      </View>
    )
}
