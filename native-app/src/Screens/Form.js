import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import { HelperText, TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { submitPass } from '../Services/utils/passApi';

import check from '../assets/check.png';
import False from '../assets/false.png';

export default function EPassForm() {
	const [ hasEmailErrors, setEmailErrors ] = React.useState(false);
	const [ date, setDate ] = React.useState(new Date());
	const auth = useSelector((state) => state.auth)

	return (
		<View>
			<Formik
				initialValues={{
					employeeId: auth.user.id,
					purpose: '',
					vaccinated: false,
					address: '',
					inTime: date,
					phone: ''
				}}
				onSubmit={(values, actions) => {
					if (values.purpose || values.address || values.phone !== '') {
						submitPass(values);
						actions.resetForm();
						setEmailErrors(false);
					} else {
						setEmailErrors(true);
					}
					// console.log(date);
					// console.log(values);
					// console.log(values.inTime);
					
				}}
			>
				{(formikProps) => (
					<SafeAreaView>
						<ScrollView>
							<View>
								<TextInput
									returnKeyType="next"
									mode="outlined"
									error={hasEmailErrors}
									style={styles.input}
									placeholder="Purpose"
									placeholderTextColor="#000"
									onChangeText={formikProps.handleChange('purpose')}
									value={formikProps.values.purpose}
									multiline={true}
									numberOfLines={3}
									underlineColorAndroid="transparent"
									require={true}
								/>
								{/* <HelperText type="error" visible={error.isError}>
							
						</HelperText> */}
								<CheckBox
									containerStyle={styles.checkBox}
									checkedIcon={<Image style={styles.tinyLogo} source={check} />}
									uncheckedIcon={<Image style={styles.tinyLogo} source={False} />}
									title=" Vaccinated?"
									textStyle={styles.checkInput}
									checkedTitle="Vaccinated 👍"
									onPress={() =>
										formikProps.setFieldValue('vaccinated', !formikProps.values.vaccinated)}
									checked={formikProps.values.vaccinated}
								/>

								<TextInput
									returnKeyType="next"
									mode="outlined"
									error={hasEmailErrors}
									style={styles.input}
									placeholder="Address"
									placeholderTextColor="#000"
									onChangeText={formikProps.handleChange('address')}
									value={formikProps.values.address}
									multiline={true}
									numberOfLines={3}
									underlineColorAndroid="transparent"
									require={true}
								/>

								<TextInput
									returnKeyType="next"
									mode="outlined"
									error={hasEmailErrors}
									style={styles.input}
									placeholder="Contact No."
									placeholderTextColor="#000"
									onChangeText={formikProps.handleChange('phone')}
									value={formikProps.values.phone}
									keyboardType="numeric"
								/>
								<Text style={styles.timeText}>Select the visiting time of your office:</Text>
								<DatePicker
									style={styles.dateBox}
									date={date}
									onDateChange={setDate}
									onDateStringChange={formikProps.handleChange('inTime')}
									value={formikProps.values.inTime}
								/>
								<TouchableOpacity style={styles.submitBtn} onPress={formikProps.handleSubmit}>
									<Text style={styles.submitBtnText}> Submit </Text>
								</TouchableOpacity>
							</View>
						</ScrollView>
					</SafeAreaView>
				)}
			</Formik>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: '#e3e1dc',
		// borderWidth: 1,
		// borderColor: '#ddd',
		// padding: 10,
		fontSize: 18,
		borderRadius: 6,
		color: '#000'
	},
	checkBox: {
		borderWidth: 1,
		backgroundColor: '#e3e1dc',
		borderColor: '#535157',
		marginTop: 10,
		marginBottom: 10,
	},
	checkInput: {
		color: '#000',
		fontSize: 18,
		fontWeight: 'normal'
	},
	timeText: {
		fontSize: 18,
		margin: 5,
		marginTop: 10,
		marginBottom: 10,
	},
	dateBox: {
		alignSelf: 'center',
		marginTop: 10,
		marginBottom: 10,
	},
	submitBtn: {
		margin: 5,
		marginBottom: 30,
		backgroundColor: '#7546e3',
		padding: 10,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: '#ddd',
		alignItems: 'center'
	},
	submitBtnText: {
		color: '#fff',
		fontSize: 18
	}
});
