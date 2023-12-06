/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  TextInput,
  Text,
  Button,
  View,
} from 'react-native';

import style from './style';

const App = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState('');

  const calculateTax = () => {
    const incomeAmount = parseFloat(income);

    if (isNaN(incomeAmount) || incomeAmount<0) {
      setTax('Invalid Income');
      return;
    }

    let taxAmount = 0;
    if (incomeAmount <= 1000000) {
      taxAmount = incomeAmount * 0.1;
    } else if (incomeAmount <= 5000000) {
      taxAmount = 1000000 * 0.1 + (incomeAmount - 1000000) * 0.2;
    } else {
      taxAmount = 1000000 * 0.1 + 4000000 * 0.2 + (incomeAmount - 5000000) * 0.3;
    }

    setTax(`Income Tax: ${taxAmount.toFixed(2)}đ`);
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Income Tax Calculator</Text>
      <TextInput
        textAlign="right"
        style={style.input}
        placeholder="Enter your Income"
        keyboardType="numeric"
        value={income}
        onChangeText={text => setIncome(text)}
      />
      <Button title="Calculate Tax" onPress={calculateTax}/>
      <Text style={style.result}>{tax}</Text>
    </View>
  );
};

export default App;