import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
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

    this.showData = this.showData.bind(this);
  }

  showData() {
    if (
      this.state.name &&
      this.state.age &&
      this.state.genderSelected &&
      this.state.accountlimit != ''
    ) {
      alert(`Conta Criada com sucesso!\n
            Nome: ${this.state.name}\n
            Idade: ${this.state.age}\n
            Sexo: ${this.state.genderSelected.gender}\n
            Limite da conta: ${this.state.accountlimit.toFixed(0)}\n
            Estudante: ${this.state.student ? `Sim` : `Não`}`);
    } else {
      alert('Campos preenchidos incorretamentes');
    }
  }

  render() {
    let genderItem = this.state.genders.map((value, key) => {
      return <Picker.Item key={key} value={value} label={value.gender} />;
    });

    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={styles.logoIcon}
            source={require('./src/images/piggy-icon.png')}
          />
          <Text style={styles.logoText}>Native Bank</Text>
        </View>

        <View style={styles.block}>
          <View style={styles.inputs}>
            <TextInput
              style={styles.inputText}
              placeholder="Nome"
              value={this.state.name}
              onChangeText={name => this.setState({name})}
            />

            <TextInput
              style={styles.inputText}
              placeholder="Idade"
              value={this.state.age}
              keyboardType="numeric"
              onChangeText={age => this.setState({age})}
            />

            <View style={styles.select}>
              <Picker
                selectedValue={this.state.genderSelected}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({genderSelected: itemValue})
                }>
                <Picker.Item label="Sexo " value="" enabled={false} />
                {genderItem}
              </Picker>
            </View>
          </View>

          <View styles={styles.finish}>
            <View style={styles.limitTextArea}>
              <Text style={styles.label}>Limite da conta</Text>

              <Text>R${this.state.accountlimit.toFixed(0)}</Text>
            </View>
            <Slider
              minimumValue={0}
              maximumValue={10000}
              minimumTrackTintColor="#4ECA6C"
              thumbTintColor="#4ECA6C"
              onValueChange={limitSelected =>
                this.setState({accountlimit: limitSelected})
              }
              value={this.state.accountlimit}
            />

            <View style={styles.switch}>
              <Text style={styles.label}>
                {this.state.student ? 'Sou' : 'Não sou'} estudante
              </Text>
              <Switch
                thumbColor={this.state.student ? '#4ECA6C' : '#E4AB0A'}
                style={styles.switch}
                value={this.state.student}
                onValueChange={switchValue =>
                  this.setState({student: switchValue})
                }
              />
            </View>
          </View>

          <TouchableOpacity style={styles.btn} onPress={this.showData}>
            <Text style={styles.btnText}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ECA6C',
    padding: 30,
    justifyContent: 'space-evenly',
  },
  logo: {
    flexDirection: 'row',
    textAlign: 'center',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  logoIcon: {
    width: 40,
    height: 40,
  },
  logoText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  block: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 40,
    borderRadius: 30,
    gap: 30,
  },
  inputs: {
    gap: 15,
  },
  limitTextArea: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText: {
    backgroundColor: '#deded9',
    borderRadius: 15,
    padding: 15,
  },
  label: {
    marginLeft: 5,
    fontSize: 14,
    color: '#686663',
  },
  select: {
    borderWidth: 1.5,
    borderRadius: 15,
    borderColor: '#b2b0ab',
    paddingLeft: 5,
  },
  switch: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#3258C3',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  btnText: {
    color: '#eee',
  },
});

export default App;
