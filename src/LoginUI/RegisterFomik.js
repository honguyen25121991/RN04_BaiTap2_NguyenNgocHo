import {
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import TextInput from './components/TextInput';
import axios from 'axios';
import {
  checkRequired,
  emailValidation,
  letterValidation,
  numberValidation,
  phoneValidator,
  rangeValidation,
} from './utils/validator';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Không được bỏ trống')
    .email('Email không hợp lệ'),
  password: Yup.string()
    .min(4, 'Mật khẩu tối thiểu có 4 kí tự')
    .max(9, 'không được vượt quá 9 ki tu')
    .required('Không được bỏ trống'),
  name: Yup.string()
    .required('Không được bỏ trống')
    .min(5, 'Tến tối thiểu có 5 kí tự')
    .max(9, 'Tên không được vượt quá 12 ki tu'),
  phone: Yup.string().required('Không được bỏ trống'),
});

export default class RegisterFomik extends Component {
  handleSubmit = values => {
    console.log('handle submit', values);
  };
  render() {
    console.log(this.state);
    return (
      <SafeAreaView style={styles.container}>
        <AntIcon
          name="left"
          size={35}
          style={styles.backBotton}
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.header}>
          <AntIcon
            styles={styles.logo}
            name="lock"
            size={100}
            color="#6330c2"
          />
          <Text style={styles.headerText}>Register Formik</Text>
        </View>
        <Formik
          validationSchema={validationSchema}
          initialValues={{email: '', password: '', name: '', phone: ''}}
          onSubmit={this.handleSubmit}>
          {({
            values,
            errors,
            handleChange,
            touched,
            handleBlur,
            handleSubmit,
          }) => {
            return (
              <View style={styles.loginFrom}>
                <TextInput
                  title="Email"
                  placeholder="email@gmail.com"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  errorMessage={errors.email}
                  onBlur={handleBlur('email')}
                  touched={touched.email}
                />
                <TextInput
                  title="PassWord"
                  placeholder="*******"
                  secureTextEntry
                  password
                  value={values.password}
                  onChangeText={handleChange('password')}
                  errorMessage={errors.password}
                  onBlur={handleBlur('password')}
                  touched={touched.password}
                />
                <TextInput
                  title="Name"
                  placeholder=" Nguyen Van A "
                  value={values.name}
                  onChangeText={handleChange('name')}
                  errorMessage={errors.name}
                  onBlur={handleBlur('name')}
                  touched={touched.name}
                />
                <TextInput
                  title="Phone"
                  placeholder="091-xxx-xxx"
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  errorMessage={errors.phone}
                  onBlur={handleBlur('phone')}
                  touched={touched.phone}
                />
                <TouchableOpacity
                  style={styles.bottomStyle}
                  onPress={handleSubmit}>
                  <Text>Submit</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 100,
    // paddingVertical:20
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  logo: {
    paddingTop: 100,
  },
  loginFrom: {
    flex: 3,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  bottomStyle: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#6330c2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBotton: {paddingLeft: 15},
});
