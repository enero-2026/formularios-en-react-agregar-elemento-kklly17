import { FlatList, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { List, TextInput, Text, Button } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Agregar from './agregar';   // 👈 A mayúscula

export default function Alumnos() {

  const [alumnos, setAlumnos] = useState([]);
  const [buscarAlumno, setBuscarAlumno] = useState('');
  const [ordenamiento, setOrdenamiento] = useState('asc');
  const [cargando, setCargando] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const alumnosFiltrados = alumnos.filter((alumno) =>
    alumno.nombre.toLowerCase().includes(buscarAlumno.toLowerCase())
  );

  const alumnosOrdenados = [...alumnosFiltrados].sort((a, b) => {
    const nombreA = a.nombre.toLowerCase();
    const nombreB = b.nombre.toLowerCase();
    return ordenamiento === 'asc'
      ? nombreA.localeCompare(nombreB)
      : nombreB.localeCompare(nombreA);
  });

  const toggleOrden = () => {
    setOrdenamiento((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const handleAdd = ({ matricula, nombre }) => {
    const nuevoAlumno = { matricula, nombre };
    setAlumnos(prev => [nuevoAlumno, ...prev]);
    setModalVisible(false);
  };

  const handleBorrar = (matricula) => {
    setAlumnos(prev => prev.filter(a => a.matricula !== matricula));
  };

  useEffect(() => {
    setTimeout(() => {
      setAlumnos([
        {
        
        nombre: 'CANDELARIA MORA SAMANTHA',
        
        matricula: '2114354'
        
      },
      
      {
        
        nombre: 'CANTU SILVA JAVIER',
        
        matricula: '2111889'
        
      },
      
      {
        
        nombre: 'CARMONA LOZANO ANGEL EMILIANO',
        
        matricula: '2069119'
        
      },
      
      {
        
        nombre: 'CASTILLO ACOSTA JORGE',
        
        matricula: '2132842'
        
      },
      
      {
        
        nombre: 'DAVILA GONZALEZ ALDO ADRIAN',
        
        matricula: '1994122'
        
      },
      
      {
        
        nombre: 'DURAN BARRIENTOS FABRIZIO',
        
        matricula: '2018230'
        
      },
      
      {
        
        nombre: 'FLORES GONZALEZ SEBASTIAN',
        
        matricula: '21045641'
        
      },
      
      {
        
        nombre: 'DURAN BARRIENTOS FABRIZIO',
        
        matricula: '20182301'
        
      },
      
      {
        
        nombre: 'FLORES GONZALEZ SEBASTIAN',
        
        matricula: '2104564'
        
      },
      
      {
        
        nombre: 'FLORES LÓPEZ DIEGO',
        
        matricula: '2066033'
        
      },
      
      {
        
        nombre: 'FLORES MARTINEZ ERICK ADRIAN',
        
        matricula: '2132976'
        
      },
      
      {
        
        nombre: 'GARZA AVALOS DIEGO',
        
        matricula: '2066114'
        
      },
      
      {
        
        nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL',
        
        matricula: '2031243'
        
      },
      
      {
        
        nombre: 'GRANJA PEÑA DIEGO',
        
        matricula: '20647331'
        
      },
      
      {
        
        nombre: 'IBARRA RODRIGUEZ ALEXIS',
        
        matricula: '20312431'
        
      },
      
      {
        
        nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN',
        
        matricula: '2064733'
        
      },
      
      {
        
        nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA',
        
        matricula: '2094647'
        
      },
      
      {
        
        nombre: 'MIRELES VELAZQUEZ ALEJANDRO',
        
        matricula: '2005102'
        
      },
      
      {
        
        nombre: 'MONSIVAIS SALAZAR ANDRES',
        
        matricula: '2064574'
        
      },
      
      {
        
        nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA',
        
        matricula: '2024783'
        
      },
      
      {
        
        nombre: 'PEÑA MUNGARRO LUIS ANGEL',
        
        matricula: '2066077'
        
      },
      
      {
        
        nombre: 'PUENTE REYNOSO JULIO CESAR',
        
        matricula: '2092151'
        
      },
      
      {
        
        nombre: 'RAMIREZ LOPEZ BRYAN',
        
        matricula: '2103708'
        
      },
      
      {
        
        nombre: 'RAMOS AVILA LILIANA VALERIA',
        
        matricula: '2115192'
        
      },
      
      {
        
        nombre: 'RICO JAUREGUI MAURICIO',
        
        matricula: '2037503'
        
      },
      
      {
        
        nombre: 'RIVERA LUNA ADRIAN',
        
        matricula: '2131513'
        
      },
      
      {
        
        nombre: 'RIVERA REYNA JOSE EMILIO',
        
        matricula: '2013503'
        
      },
      
      {
        
        nombre: 'RODRIGUEZ OLVERA ROSA ISELA',
        
        matricula: '2004613'
        
      },
      
      {
        
        nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL',
        
        matricula: '2133022'
        
      },
      
      {
        
        nombre: 'SANCHEZ GALARZA JUAN CARLOS',
        
        matricula: '2026061'
        
      },
      
      {
        
        nombre: 'SOLIS ORTIZ ALFREDO',
        
        matricula: '2095320'
        
      },
      
      {
        
        nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL',
        
        matricula: '2025350'
        
      },
      
      {
        
        nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL',
        
        matricula: '2103895'
        
      },
      
      {
        
        nombre: 'ZACATENCO OLIVE RODRIGO',
        
        matricula: '1857791'
        
      },
      
      {
        
        nombre: 'ZAVALA CANTU TERESA MARGARITA',
        
        matricula: '2025218'
        
      }
      ]);
      setCargando(false);
    }, 2000);
  }, []);

if (cargando) return <Text>Cargando alumnos...</Text>;
  if (!alumnos.length) return <Text>No hay alumnos</Text>;

  return (
    <>
      <Text variant="labelMedium">Busca por nombre:</Text>
      <TextInput
        placeholder="ejemplo: David Garza"
        mode="outlined"
        value={buscarAlumno}
        onChangeText={setBuscarAlumno}
        right={<TextInput.Icon icon="magnify" />}
      />
      <Button
        mode="contained"
        icon="plus"
        onPress={() => setModalVisible(true)}
        style={styles.botonAgregar}
      >
        Agregar alumno
      </Button>
      <List.Section>
        <List.Accordion
          title="Ordenar"
          left={props => <List.Icon {...props} icon="sort" />}
        >
          <List.Item
            title="Nombre: A-Z"
            onPress={() => { setOrdenamiento('asc'); }}
          />
          <List.Item
            title="Nombre: Z-A"
            onPress={() => { setOrdenamiento('desc'); }}
          />
        </List.Accordion>
      </List.Section>
      <FlatList
        data={alumnosOrdenados}
        keyExtractor={(item) => item.matricula}
        renderItem={({ item }) => (
          <List.Item
            title={item.nombre}
            description={item.matricula}
            left={() => (
              <MaterialIcons name="account-circle" size={40} />
            )}
            right={() => (
              <View style={styles.acciones}>
                <Button
                  mode="text"
                  textColor="#6750A4"
                  compact
                  onPress={() => console.log('Editar', item.matricula)}
                >
                  Editar
                </Button>
                <Button
                  mode="contained"
                  buttonColor="#B00020"
                  compact
                  onPress={() => handleBorrar(item.matricula)}
                >
                  Borrar
                </Button>
              </View>
            )}
          />
        )}
      />
      <Agregar
        visible={modalVisible}
        onAdd={handleAdd}
        onCancel={() => setModalVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  botonAgregar: {
    margin: 12,
    borderRadius: 8,
  },
  acciones: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});