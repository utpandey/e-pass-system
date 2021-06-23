import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {signIn} from '../Services/utils/authApi';

const Signin = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          Login with email
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
        <Button
          mode="contained"
          style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
          onPress={() => signIn({email, password})}>
          Sign In
        </Button>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 18,
              marginTop: 20,
              color: 'grey',
            }}
            onPress={() => props.navigation.replace('signup')}>
            dont have an account?
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Signin;
