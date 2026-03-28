// agregar.js
import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { Modal, Portal, Text, TextInput, Button } from "react-native-paper";

export default function Agregar({ visible, onAdd, onCancel }) {

  const [matricula, setMatricula] = useState('');
  const [nombre, setNombre]       = useState('');

  const handleOnAdd = () => {
    if (!matricula.trim() || !nombre.trim()) return; 
    onAdd({ matricula, nombre });   
    setMatricula('');              
    setNombre('');
  };

  const handleCancel = () => {
    setMatricula('');   
    setNombre('');
    onCancel();         
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={handleCancel}    
        contentContainerStyle={styles.container}
      >
        <Text variant="titleLarge" style={styles.titulo}>
          Agregar alumno
        </Text>

        <TextInput
          label="Matrícula"
          mode="outlined"
          value={matricula}
          onChangeText={setMatricula}
          keyboardType="numeric"
          style={styles.input}
        />

        <TextInput
          label="Nombre"
          mode="outlined"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
        />

        <View style={styles.botones}>
          <Button
            mode="contained"
            onPress={handleOnAdd}
            style={styles.boton}
          >
            Agregar
          </Button>

          <Button
            mode="outlined"
            onPress={handleCancel}
            style={styles.boton}
          >
            Cancelar
          </Button>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 24,
    margin: 20,
    borderRadius: 12,
  },
  titulo: {
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    gap: 8,
  },
  boton: {
    flex: 1,
  },
});