import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import EPassForm from './Form';

const Pass = () => {
	return (
		<SafeAreaView style={styles.sectionContainer}>
			<ScrollView>
				<Text style={styles.headerText}>
					Below is the e-pass form which you need to fill for visiting the office.
				</Text>
				<EPassForm />
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 20,
    marginBottom: 100,
		paddingHorizontal: 24
	},
	headerText: {
		fontSize: 20,
		margin: 10
	}
});

export default Pass;
