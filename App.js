//Import calls
import React, {useState} from 'react';
import{View, Text, Button, Modal} from 'react-native';
import {IconButton} from 'react-native-paper';
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { TextInput } from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context'
//Home page and Hub links
function Home({navigation}){
  return(
    <SafeAreaView style={{flex:1}}>
      <Container>
        {/*Header Bar*/}
        <Titlebar>
          {/* Hamburger Icon*/}
          <IconButton 
          icon = "menu"
          color="white"
          size={32}
          onPress = {() => navigation.toggleDrawer()}/>

        <Title>MyHealthApp</Title>
        {/*Crisis Mode Icon*/}
        <IconButton 
          icon="alert" 
          size={32} 
          color="white"
          onPress = {() => navigation.navigate('Crisis Mode')}
        />
        </Titlebar>
        {/*Page Content*/}
        <TextHeader>Home Screen</TextHeader>
        <TextHeader>Welcome Back!</TextHeader>
        <TextHeader>Here are some quick links for you</TextHeader>
        <HubWrapper>
          {/*Hub links for fast-access*/}
          {/*This one is to medication */}
          <IconWrapper>
            <IconButton
              icon = "medical-bag"
              color="black"
              size={80}
              onPress = {() => navigation.navigate('Medication')}
            />
            <IcoLabel>Medication</IcoLabel>
          </IconWrapper>
          <IconWrapper>
          {/*This one is to mood log */}
          <IconButton
            icon = "notebook"
            color="black"
            size={80}
            onPress = {()=> navigation.navigate('Mood Logs') }
          />
          <IcoLabel>Mood Logbook</IcoLabel>
        </IconWrapper>
      </HubWrapper>
      <HubWrapper>
        {/*This one is to contacts */}
        <IconWrapper>
          <IconButton
            icon = "phone"
            color="black"
            size={80}
            onPress = {()=> navigation.navigate('Contacts')}
          
          />
          <IcoLabel>Contacts</IcoLabel>
        </IconWrapper>
        <IconWrapper>
          {/*This one is to crisis mode */}
          <IconButton
            icon = "alert"
            color="black"
            size={80}
            onPress = {()=> navigation.navigate('Crisis Mode')}
          />
          <IcoLabel>Crisis Mode</IcoLabel>
          </IconWrapper>
        </HubWrapper>
      </Container>
    </SafeAreaView>
  );
}
//Mood Journal Main Screen
function MoodLogs({navigation}){
  return(
    <SafeAreaView style={{flex:1}}>
      <Container>
      <Titlebar>
        <IconButton 
        icon = "menu"
        color="white"
        size={32}
        onPress = {() => navigation.toggleDrawer()}/>
        <Title>MyHealthApp</Title>
        <IconButton 
          icon="alert" 
          size={32} 
          color="white"
          onPress = {() => navigation.navigate('Crisis Mode')}
        />
      </Titlebar>
      {/*Screen Content */}
      <TextHeader>Mood Screen</TextHeader>
      <IconButton
        icon = "note-plus-outline"
        color = "black"
        size={32}
      />
      </Container>
    </SafeAreaView>
  );
}
//Medication Screen
function Meds({navigation}){
  return(
    <SafeAreaView style={{flex:1}}>
      <Container>
      <Titlebar>
        <IconButton 
        icon = "menu"
        color="white"
        size={32}
        onPress = {() => navigation.toggleDrawer()}/>
        <Title>MyHealthApp</Title>
        <IconButton 
          icon="alert" 
          size={32} 
          color="white"
          onPress = {() => navigation.navigate('Crisis Mode')}
        />
      </Titlebar>
      {/*Screen Content*/}
      <TextHeader>Meds Screen</TextHeader>
      <Button title="Press Me" onPress={() => console.log("REEEEe")}/>
    </Container>
    </SafeAreaView>
  );
}
//Contact Details Page
function Contacts({navigation}){
  const [modalVisible, setModalVisible] = useState(false);
  return( 
  <SafeAreaView style={{flex:1}}>
  <Container>
    <Titlebar>
      <IconButton 
      icon = "menu"
      color="white"
      size={32}
      onPress = {() => navigation.toggleDrawer()}/>
      <Title>MyHealthApp</Title>
      <IconButton 
        icon="alert" 
        size={32} 
        color="white"
        onPress = {() => navigation.navigate('Crisis Mode')}
      />
    </Titlebar>
    {/*Screen Content*/}
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}>
      <View>
        <View>
          <TextHeader>Please Edit Your Contact Details</TextHeader>
          <TextInput></TextInput>
          <TextInput></TextInput>
          {/*I ran way out of time so storage is not implemented, pressing submit will just close the modal.*/}
          <Button label="Submit Changes" onPress = {() => setModalVisible(!modalVisible)}></Button>
        </View>
      </View>
    </Modal>
    <TextHeader>Contacts Screen</TextHeader>
    <TextHeader>Your Registered Contacts</TextHeader>
    <ContactWrapper>
      <IconButton
        icon="lead-pencil"
        size={22}
        color = "black"
        style={{alignSelf:'flex-end'}}
        onPress={() => setModalVisible(true)}
      />
      <ContactText>Name : </ContactText>
      <ContactText>Contact Information: </ContactText>
    </ContactWrapper>
    <ContactWrapper>
      <IconButton
        icon="lead-pencil"
        size={22}
        color = "black"
        style={{alignSelf:'flex-end'}}
        onPress={() => setModalVisible(true)}
      />
      <ContactText>Name : </ContactText>
      <ContactText>Contact Information: </ContactText>
    </ContactWrapper>
    <ContactWrapper>
      <IconButton
        icon="lead-pencil"
        size={22}
        color = "black"
        style={{alignSelf:'flex-end'}}
        onPress={() => setModalVisible(true)}
      />
      <ContactText>Name : </ContactText>
      <ContactText>Contact Information: </ContactText>
    </ContactWrapper>
  </Container>
  </SafeAreaView>
  );
}
//Crisis mode page
function Crisis({navigation}){
  return(
    <SafeAreaView style={{flex:1}}>
      <Container>
      <Titlebar>
        <IconButton 
        icon = "menu"
        color="white"
        size={32}
        onPress = {() => navigation.toggleDrawer()}/>
        <Title>MyHealthApp</Title>
        <IconButton 
          icon="alert" 
          size={32} 
          color="white"
          onPress = {() => navigation.navigate('Crisis Mode')}
        />
      </Titlebar>
      {/*Screen Content */}
        <TextHeader>Crisis Screen</TextHeader>
        <Button title="Press Me" onPress={() => console.log("REEEEe")}/>
      </Container>
</SafeAreaView>
  );
}
//Custom Drawer-style navbar content. Doesn't link to anywhere, just adds a "Close Menu" option to the navbar.
function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView{...props}>
      <DrawerItemList {...props} />
      <DrawerItem 
        label = "Close Menu"
        onPress= { ()=> props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}
//Creates the drawer navigator object
const Drawer = createDrawerNavigator();
//Populates the navigator and sets the routes each item will take you through
function MyDrawer(){
  return(
    <Drawer.Navigator drawerContent = {props => <CustomDrawerContent{...props} />}>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Medication" component = {Meds}/>
      <Drawer.Screen name = "Mood Logs" component ={MoodLogs}/>
      <Drawer.Screen name = "Contacts" component = {Contacts}/>
      <Drawer.Screen name = "Crisis Mode" component = {Crisis}/>
    </Drawer.Navigator>
  );
}
//wrap the entire app in a navigation container so that onpress => navigation functions work.
export default function App() {
    return(
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
  }
//Styling
const TextHeader = styled.Text`
color: #000;
font-size:18px;
font-weight: bold;
`;
const Container = styled.View`
  flex:1;
  background-color: #eee;
  align-items: center;
  width:100%;
  height:100%;
  `;
const Titlebar = styled.View`
  width: 100%;
  background-color: #98e4d9;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
`;
const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  text-align:center;
  `;
const HubWrapper = styled.View`
flex-direction: row;
width: 100%;
justify-content: space-evenly;
`;
const IconWrapper = styled.View`
flex-direction:column;
`;
const IcoLabel = styled.Text`
text-align:center;
font-weight:bold;
`;
const PreviousEntry = styled.View`
height:70%;
`;
const safeView = styled.View`
flex:1;
background-color:#eee;
`;
const ContactWrapper = styled.View`
width:80%;
height: 20%;
border: 2px solid;
margin-top: 5px;
margin-bottom: 5px;
`;
const ContactText = styled.Text`
margin-top:5px;
margin-bottom:5px;
margin-left: 10px;
`;