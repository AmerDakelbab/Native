import {Camera} from 'expo-camera';
import React, { useState, useEffect } from 'react';
import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { Text,View,Image, Pressable, TextInput, Alert } from 'react-native';

import camera from '../../assets/camera.png';
export default function CameraAccess({navigation}) {

    const [hasPermission, setHasPermission] = useState(Boolean);

  const sure = () => {
    Alert.alert(
      "Are you sure you want to skip the verification process?",
      "You won’t be able to send, receive and exchange money until we have verified your identity.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "SKIP", onPress: () => navigation.navigate('Home2') }
      ]
    );
  }
const access = async () => {
  const {status} = await Camera.requestCameraPermissionsAsync();
  if (status === 'granted') {
    setHasPermission(true);
    navigation.navigate('CameraScreen');

  } else {
    setHasPermission(false);
    Alert.alert(
      '“MUXXUS” would like to Access the Camera',
      'MUXXUS requires access to the camera to add receipts to transactions and take photos of documents when requested.'
    )
  }
}

  return (
    <View className='flex-1  bg-white'>
      <StatusBar hidden={false}/>
        <View className='flex-1 justify-between'>
        <View>
      <View className='mt-12  items-center'>
      <Image className='w-[100%]'  source={camera} />
      </View>
      <View className='items-center  w-full -mt-10'>
        <Text className='text-4xl text-center w-4/5 mb-5 font-inter-bold font-bold'>Please allow camera access to continue</Text>
        <Text className='text-lg text-gy w-3/5 text-center'>Submit a selfie and a photo of the document for identity verification.</Text>
      </View>
        </View>
      <View className='w-full px-6 pb-6 '> 
        <Pressable onPress={() => access()}  className='bg-black w-full h-20 rounded-xl items-center justify-center mb-3'>
          <Text className='text-white font-semibold text-lg font-inter-bold'>Allow camera access</Text>
        </Pressable>
        <Pressable onPress={() => sure()}  className='bg-white w-full h-20 rounded-full items-center justify-center mb-3'>
          <Text className='text-black font-semibold text-lg font-inter-bold'>Not right now</Text>
        </Pressable>
      </View>
        </View>
      </View> 
  );
}