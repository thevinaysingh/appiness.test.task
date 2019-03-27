import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import {
  View, StyleSheet, Platform, TouchableOpacity, Alert,
} from 'react-native';
import { ActionCreators } from '../../actions';
import { RootContainer, DefaultLabel } from '../../components/AppStyledComponents';
import CustomTextInput from '../../components/CustomTextInput';
import { Colors } from '../../theme';
import { locales } from '../../utils/locales';
import { isEmailValid, isPasswordValid } from '../../utils/validations';
import { screens } from '../../navigator/screens-name';
import CommonStatusBar from '../../components/StatusBar';
import * as Storage from '../../utils/storage';
import { CONSTANTS } from '../../utils/constants';

/**
  * @desc this class will handle login functionality
  * @author Vinay Singh vinaysinghsatna@gmail.com
  * @required navigation, loginResponse
*/

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginResponse != null) {
      if (!nextProps.loginResponse.isLoggedin) {
        Alert.alert(nextProps.loginResponse.message);
      } else {
        this.saveUserDetailsInStorage(nextProps.loginResponse);
        this.goToScreen(screens.DASHBOARD);
      }
    }
  }

  onChangeState = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  onSubmit = () => {
    const { email, password } = this.state;
    if (!isEmailValid(email)) {
      Alert.alert(locales.LOGIN.email_validation_msg);
      return;
    }
    if (!isPasswordValid(password)) {
      Alert.alert(locales.LOGIN.password_validation_msg);
      return;
    }
    this.props.login(email, password);
  }

  onSubmitEditing(key) {
    try {
      switch (key) {
        case 'email':
          this.passwordInput.focus();
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }

  getTextInputReference = (key, reference) => {
    switch (key) {
      case 'emailInput':
        this.emailInput = reference;
        break;
      case 'passwordInput':
        this.passwordInput = reference;
        break;
      default:
        break;
    }
  }

  goToScreen(screenToRedirect) {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: screenToRedirect }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  saveUserDetailsInStorage(loginResponse) {
    Storage.setItemWithKeyAndValue(CONSTANTS.KEYS.ACCESS_TOKEN, loginResponse.accessToken);
  }

  render() {
    const { email, password } = this.state;

    return (
      <RootContainer>
        <CommonStatusBar />
        <View style={styles.container}>
          <CustomTextInput
            titleStyle={styles.labelStyles}
            inputView={StyleSheet.flatten(styles.textInputView)}
            textInput={StyleSheet.flatten(styles.textInput)}
            placeholder={locales.LOGIN.email}
            placeholderTextColor={Colors.appGreyColor}
            inputKey="email"
            title={locales.LOGIN.email}
            getTextInputReference={this.getTextInputReference}
            value={email}
            returnKeyType="next"
            onChangeText={txt => this.onChangeState('email', txt)}
            onSubmitEditing={() => this.onSubmitEditing('email')}
          />
          <CustomTextInput
            titleStyle={[styles.labelStyles, { marginVertical: 20 }]}
            inputView={StyleSheet.flatten(styles.textInputView)}
            textInput={StyleSheet.flatten(styles.textInput)}
            placeholder={locales.LOGIN.password}
            placeholderTextColor={Colors.appGreyColor}
            inputKey="email"
            title={locales.LOGIN.password}
            getTextInputReference={this.getTextInputReference}
            value={password}
            returnKeyType="done"
            onChangeText={txt => this.onChangeState('password', txt)}
          />
          <TouchableOpacity style={styles.buttonStyles} onPress={this.onSubmit}>
            <DefaultLabel>{locales.LOGIN.login}</DefaultLabel>
          </TouchableOpacity>
        </View>
      </RootContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  labelStyles: {
    fontSize: 16,
    color: Colors.appGreyColor,
  },
  textInput: {
    paddingVertical: 0,
    marginTop: Platform.OS === 'ios' ? 5 : 0,
    color: Colors.whiteColor,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrayColor,
    height: 35,
    fontSize: 13,
  },
  textInputView: {
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 15,
    backgroundColor: 'transparent',
  },
  buttonStyles: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Colors.appGreyColor,
    borderRadius: 5,
    marginTop: 20,
  },
});

Login.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  loginResponse: PropTypes.objectOf(PropTypes.any),
  login: PropTypes.func,
};

Login.defaultProps = {
  loginResponse: null,
  login: () => {},
};

const mapStateToProps = state => ({
  loginResponse: state.auth.loginResponse,
});

const mapDispatchToProps = () => ActionCreators;

const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginScreen;
