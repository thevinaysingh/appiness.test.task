import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputView: {
    width: (width / 3) * 2.5,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 15,
    left: 10,
    backgroundColor: 'green',
  },
  inputTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'left',
    marginBottom: 10,
  },
  textInput: {
    width: width - 80,
    fontSize: 16,
    marginLeft: 10,
    paddingBottom: 5,
    marginTop: Platform.OS === 'ios' ? 5 : -8,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
});

const CustomTextInput = ({
  title,
  titleStyle,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  selectionColor,
  keyboardType,
  editable,
  secureTextEntry,
  returnKeyType,
  autoCapitalize,
  autoCorrect,
  onSubmitEditing,
  onFocus,
  inputKey,
  getTextInputReference,
  inputView,
  textInput,
  paddingRight,
}) => (
  <View style={inputView}>
    { title !== '' && <Text style={[styles.inputTitle, titleStyle]}>{ title }</Text> }
    <TextInput
      style={textInput}
      ref={(ref) => { getTextInputReference(inputKey, ref); }}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      selectionColor={selectionColor}
      keyboardType={keyboardType}
      underlineColorAndroid="transparent"
      secureTextEntry={secureTextEntry}
      editable={editable}
      returnKeyType={returnKeyType}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      paddingRight={paddingRight}
      onSubmitEditing={() => onSubmitEditing(inputKey)}
      onFocus={() => onFocus()}
      onChangeText={onChangeText}
    />
  </View>
);

CustomTextInput.propTypes = {
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  editable: PropTypes.bool,
  getTextInputReference: PropTypes.func,
  inputKey: PropTypes.string,
  inputView: PropTypes.oneOfType([PropTypes.any]),
  keyboardType: PropTypes.string,
  paddingRight: PropTypes.number,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  returnKeyType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  selectionColor: PropTypes.string,
  textInput: PropTypes.oneOfType([PropTypes.any]),
  title: PropTypes.string,
  titleStyle: PropTypes.oneOfType([PropTypes.any]),
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  onSubmitEditing: PropTypes.func,
};

CustomTextInput.defaultProps = {
  autoCapitalize: 'none',
  autoCorrect: false,
  editable: true,
  getTextInputReference: () => {},
  inputKey: '',
  inputView: {},
  keyboardType: 'default',
  paddingRight: 1,
  placeholder: '',
  placeholderTextColor: 'darkgrey',
  returnKeyType: 'done',
  secureTextEntry: false,
  selectionColor: 'darkgrey',
  textInput: {},
  title: '',
  titleStyle: {},
  value: '',
  onChangeText: () => {},
  onFocus: () => {},
  onSubmitEditing: () => {},
};

export default CustomTextInput;
