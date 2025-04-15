import React, {Component} from 'react';
import {View, Text, TextInput, Switch, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: null,
      genderSelected: '',
      genders: [
        {key: 1, gender: 'Feminino'},
        {key: 2, gender: 'Masculino'},
      ],
      accountlimit: 0,
      student: false,
    };
  }

  render() {
    let genderItem = this.state.genders.map((value, key) => {
      return <Picker.Item key={key} value={value} label={value.gender} />;
    });

    return (
      <View>
        <Text>Banco</Text>
        <TextInput
          placeholder="Digite seu nome..."
          value={this.state.name}
          onChangeText={name => this.setState({name})}
        />
        <TextInput
          placeholder="Idade..."
          value={this.state.age !== null ? this.state.age.toString() : ''}
          keyboardType="numeric"
          onChangeText={age => this.setState({age: parseInt(age) || null})}
        />
        <Picker
          selectedValue={this.state.genderSelected}
          onValueChange={genderItem =>
            this.setState({genderSelected: genderItem})
          }>
          {genderItem}
        </Picker>

        <Slider
          minimumValue={0}
          maximumValue={10000}
          onValueChange={valueSelected =>
            this.setState({accountlimit: valueSelected})
          }
          value={this.state.value}
        />

        <Switch
          value={this.state.student}
          onValueChange={switchValue => this.setState({student: switchValue})}
        />

        <Text>
          Seu limite {this.state.accountlimit.toFixed(0)}
        </Text>

        <TouchableOpacity>
          <Text>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
