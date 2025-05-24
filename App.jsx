import Home2 from './pages/Home2';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import {Image, TouchableOpacity} from 'react-native';
import Personel1 from 'pages/personal/personel1';
import PersInfo from 'pages/personal/persInfo';
import Activites from 'pages/personal/Activites';
import OperationAct from 'pages/personal/OperationAct';
import Business1 from 'pages/business/business1';
import { CompanyTp } from 'pages/business/companyTp';
import CountryAndnm from 'pages/business/CountryAndnm';
import Address from 'pages/business/Address';
import CorporateInfo from 'pages/business/CorporateInfo';
import Services from 'pages/personal/Services';
import IdentityVerification from 'pages/personal/identityVerification';
import Sumsub from 'pages/personal/sumsub';
import IdentityDocument from 'pages/personal/identityDocument';
import CameraAccess from 'pages/personal/CameraAccess';
import CameraCaptureScreen from 'pages/personal/CameraScreen';
import PersData from 'pages/business/PersData';
import CameraScreen from 'pages/personal/CameraScreen';
import DocumentPreviewScreen from 'pages/personal/DocumentPreviewScreen';
import BackCameraScreen from 'pages/personal/BackCameraScreen';
import Reviews from 'pages/personal/Reviews';
import BackDocumentPreviewScreen from 'pages/personal/BackDocumentPreviewScreen';



const Stack = createNativeStackNavigator();

export default function App() {

    


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="Home2" 
          component={Home2} 
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
        name="personel"
        component={Personel1}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />

        <Stack.Screen
        name="persInfo"
        component={PersInfo}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />

        <Stack.Screen
        name="Activites"
        component={Activites}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="OperationAct"
        component={OperationAct}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="Business1"
        component={Business1}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="companyTp"
        component={CompanyTp}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="CountryAndnm"
        component={CountryAndnm}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="Address"
        component={Address}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="CorporateInfo"
        component={CorporateInfo}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="Services"
        component={Services}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="IdentityVerification"
        component={IdentityVerification}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="Sumsub"
        component={Sumsub}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="IdentityDocument"
        component={IdentityDocument}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="Reviews"
        component={Reviews}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="CameraAccess"
        component={CameraAccess}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="PersData"
        component={PersData}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/leftarrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: 'Verify your identity',
            headerTransparent: true,
            headerTitleStyle: {color:'white'},
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/whiteArrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="DocumentPreviewScreen"
        component={DocumentPreviewScreen}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: 'Verify your identity',
            headerTransparent: true,
            headerTitleStyle: {color:'white'},
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/whiteArrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        <Stack.Screen
        name="BackDocumentPreviewScreen"
        component={BackDocumentPreviewScreen}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: 'Verify your identity',
            headerTransparent: true,
            headerTitleStyle: {color:'white'},
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/whiteArrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
         <Stack.Screen
        name="BackCameraScreen"
        component={BackCameraScreen}
        options={({ navigation }) => ({
            headerShown: true,
            headerTitle: 'Verify your identity',
            headerTransparent: true,
            headerTitleStyle: {color:'white'},
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./assets/whiteArrow.png')}
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                />
              </TouchableOpacity>
            ),
          })}

        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}