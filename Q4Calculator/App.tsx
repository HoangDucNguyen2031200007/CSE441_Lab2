import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from './style';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = (num) => {
    if(displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  }

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={style.container}>
      <Text style={style.display}>{firstValue}{operator}{displayValue}</Text>
      <View style={style.row}>
        <TouchableOpacity style={[style.buttons, style.elavation]} onPress={()=> handleNumberInput(7)}><Text style={style.buttonText}>7</Text></TouchableOpacity>
        <TouchableOpacity style={[style.buttons, style.elavation]} onPress={()=> handleNumberInput(8)}><Text style={style.buttonText}>8</Text></TouchableOpacity>
        <TouchableOpacity style={[style.buttons, style.elavation]} onPress={()=> handleNumberInput(9)}><Text style={style.buttonText}>9</Text></TouchableOpacity>
        <TouchableOpacity style={[style.operatorButtons, style.elavation]} onPress={()=> handleOperatorInput('/')}><Text style={style.operatorText}>/</Text></TouchableOpacity>
      </View>
      <View style={style.row}>
        <TouchableOpacity style={[style.buttons, style.elavation]} onPress={()=> handleNumberInput(4)}><Text style={style.buttonText}>4</Text></TouchableOpacity>
        <TouchableOpacity style={[style.buttons, style.elavation]} onPress={()=> handleNumberInput(5)}><Text style={style.buttonText}>5</Text></TouchableOpacity>
        <TouchableOpacity style={[style.buttons, style.elavation]} onPress={()=> handleNumberInput(6)}><Text style={style.buttonText}>6</Text></TouchableOpacity>
        <TouchableOpacity style={[style.operatorButtons, style.elavation]} onPress={()=> handleOperatorInput('*')}><Text style={style.operatorText}>x</Text></TouchableOpacity>
      </View>
      <View style={style.row}>
        <TouchableOpacity style={[style.buttons, style.elavation]} onPress={()=> handleNumberInput(1)}><Text style={style.buttonText}>1</Text></TouchableOpacity>
        <TouchableOpacity style={[style.buttons, style.elavation]} onPress={()=> handleNumberInput(2)}><Text style={style.buttonText}>2</Text></TouchableOpacity>
        <TouchableOpacity style={[style.buttons, style.elavation]} onPress={()=> handleNumberInput(3)}><Text style={style.buttonText}>3</Text></TouchableOpacity>
        <TouchableOpacity style={[style.operatorButtons, style.elavation]} onPress={()=> handleOperatorInput('-')}><Text style={style.operatorText}>-</Text></TouchableOpacity>
      </View>
      <View style={style.row}>
        <TouchableOpacity style={[style.zeroButton, style.elavation]} onPress={()=> handleNumberInput(0)}><Text style={style.buttonText}>0</Text></TouchableOpacity>
        <TouchableOpacity style={[style.operatorButtons, style.elavation]} onPress={()=> handleOperatorInput('+')}><Text style={style.operatorText}>+</Text></TouchableOpacity>
        <TouchableOpacity style={[style.equalButton, style.elavation]} onPress={handleEqual}><Text style={style.equalText}>=</Text></TouchableOpacity>
      </View>
      <TouchableOpacity style={[style.clearButton, style.elavation]} onPress={handleClear}><Text style={style.buttonText}>C</Text></TouchableOpacity>
    </View>
  );
};

export default App;