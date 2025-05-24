import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { Text,View,Image, Pressable, TextInput, Alert } from 'react-native';

import person from '../assets/personImage.png';
export default function Home({navigation}) {

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
        { text: "SKIP", onPress: () => navigation.navigate('Reviews') }
      ]
    );
  }
  return (
    <View className='flex-1 bg-white'>
      <StatusBar hidden={false}/>
      <View className='mt-16  items-center'>
      <Image className='w-[100%]'  source={person} />
      </View>
      <View className=' items-center mx-12 -mt-12 mb-6'>
      <Text className='text-4xl font-inter-bold mb-5 text-pb font-bold '>Tell us about yourself</Text>
      <Text className='text-lg w-5/6 font-inter tracking-wide  text-center   text-gy'>Completing the verification shouldn’t take longer than 10 minutes and you do it all from your phone. </Text>
      </View>
      <View className='w-full px-6 pt-12'> 
        <Pressable onPress={() => navigation.navigate('Home2')}  className='bg-pb w-full h-20 rounded-xl items-center justify-center'>
          <Text className='text-white font-semibold text-lg font-inter-bold'>Continue</Text>
        </Pressable>
        <Pressable onPress={() => sure()}  className='bg-white w-full h-20 rounded-full items-center justify-center'>
          <Text className='text-black font-semibold text-lg font-inter-bold'>Not right now</Text>
        </Pressable>
        
      </View>
      </View> 
  );
}