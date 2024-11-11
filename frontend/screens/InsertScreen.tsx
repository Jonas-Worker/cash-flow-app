import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import supabase from '../supabaseClient'; // Import supabase client

const InsertScreen = ({ route, navigation }: any) => {
  const { token } = route.params;  // Get the token from the previous screen (if needed)
  const [cashIn, setCashIn] = useState('');
  const [cashOut, setCashOut] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      // Insert data directly into Supabase
      const { data, error } = await supabase
        .from('cash_flows') // Replace with your actual table name
        .insert([
          { 
            cash_in: parseFloat(cashIn), 
            cash_out: parseFloat(cashOut), 
            date 
          }
        ]);

      if (error) {
        setError('Error inserting data: ' + error.message);
      } else {
        console.log('Data inserted:', data);
        // Optionally navigate back or show success message
        navigation.goBack();
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while submitting the data');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Cash In"
        value={cashIn}
        onChangeText={setCashIn}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Cash Out"
        value={cashOut}
        onChangeText={setCashOut}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default InsertScreen;
