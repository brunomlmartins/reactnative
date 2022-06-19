import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';


export default function App() {

  const[task, setTask ] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () =>{
    setTaskItems([...taskItems,task])
    setTask(null);
  }
  return (
    <View style={styles.container}>

      {/*Todays Tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Lista de compras</Text>

        <View style={styles.items}>
          {/* Tarefas aqui */}
          <Task text={'text1'}/>
          <Task text={'text2'}/>
        </View>

      </View>
        <KeyboardAvoidingView style={styles.writeTaskWrapper}>

          <TextInput style={styles.input} placeholder={'Escrever falta'} value={task} onChangeText={text => setTask(text)}></TextInput>
          <TouchableOpacity onPress={handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>

        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom: 60,
    width:"100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    maxWidth:250,
    borderRadius:60,
    borderColor: '#fff',
    borderWidth:1,
    width:250,

  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor: '#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems: 'center',

  },
  addText:{},
});
