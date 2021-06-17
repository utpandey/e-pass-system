import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {Button, TextInput, Provider} from 'react-native-paper';
// import DropDown from 'react-native-paper-dropdown';
import {Picker} from '@react-native-picker/picker';
import {signUp} from '../Services/utils/api';

const Signup = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);

  const [team, setTeam] = useState('uiux');
  console.log(team);
  const teamList = [
    {label: 'UI/UX', value: 'uiux'},
    {label: 'Front-End', value: 'frontend'},
    {label: 'Back-End', value: 'backend'},
    {label: 'Testing', value: 'testing'},
    {label: 'Deployemnt', value: 'deployment'},
  ];

  return (
    <View style={{height: '100%'}}>
      <KeyboardAvoidingView behavior="position">
        <StatusBar backgroundColor="grey" barStyle="light-content" />
        <Text
          style={{fontSize: 35, marginLeft: 18, marginTop: 10, color: 'grey'}}>
          Welcome to SnagApp
        </Text>
        <View
          style={{
            borderBottomColor: 'blue',
            borderBottomWidth: 4,
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
          }}
        />
        <Text
          style={{fontSize: 20, marginLeft: 18, marginTop: 20, color: 'black'}}>
          Create New Account
        </Text>
        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          theme={{colors: {primary: 'blue'}}}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          label="password"
          mode="outlined"
          secureTextEntry={true}
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          theme={{colors: {primary: 'blue'}}}
        />
        {/* <TextInput
          label="username"
          mode="outlined"
          secureTextEntry={true}
          value={username}
          onChangeText={text => {
            setUsername(text);
          }}
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          theme={{colors: {primary: 'blue'}}}
        /> */}
        {/* <Provider>
          <SafeAreaView style={styles.containerStyle}>
            <DropDown
              label={'Team'}
              mode={'outlined'}
              value={team}
              setValue={setTeam}
              list={teamList}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              inputProps={{
                right: <TextInput.Icon name={'menu-down'} />,
              }}
            />
          </SafeAreaView>
        </Provider> */}
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={team}
            onValueChange={itemValue => setTeam(itemValue)}>
            <Picker.Item label="UI/UX" value="uiux" />
            <Picker.Item label="Front-End" value="Frontend" />
            <Picker.Item label="Back-End" value="Backend" />
            <Picker.Item label="Testing" value="testing" />
            <Picker.Item label="Deployment" value="deployment" />
          </Picker>
        </View>
        <Button
          mode="contained"
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          onPress={() => signUp({email, password})}>
          sign up
        </Button>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 18,
              marginTop: 20,
              color: 'grey',
            }}
            onPress={() => props.navigation.replace('signin')}>
            Already have an account?
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    // flex: 1,
    // marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginLeft: 18,
    marginRight: 18,
    marginTop: 18,
    // backgroundColor: 'red',
  },
  picker: {
    width: 370,
    // height: 45,
    // borderColor: 'blue',
    borderWidth: 1,
    backgroundColor: 'red',
    // color: 'white',
  },
});

export default Signup;
