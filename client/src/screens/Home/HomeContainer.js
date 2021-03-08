import React, {useEffect, useState} from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { BottomNav, Header, Background } from '../../components';
import { IconButton } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { readAccountsByIdFetch } from '../../controllers/account';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeView from './HomeView';
import styles from './styles';
import Cargar from '../../../images/icons/Cargar.jpg'
import EnviarDinero from '../../../images/icons/EnviarDinero.png'
import Transacciones from '../../../images/icons/Transacciones.png'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";



export default function HomeContainer({ navigation, route }) {
  const { handleIsLogin } = route.params;
  const [account, setAccount] = useState();
  const user = useSelector((state) => state.userReducer.user);

  const handleAccount = (idAccount) => {
    readAccountsByIdFetch(idAccount)
    .then(responseAccount => {
      console.log(responseAccount);
      setAccount(responseAccount);
    })
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      <Header
        type="settings"
        label='Inicio'
        align="center"
        navigation={navigation}
        handleIsLogin={handleIsLogin}
      />
      <View style={styles.container}>
      {user ?
        (
          <HomeView user={user} handleAccount={handleAccount} account={account}/>
        )
        :(
          <></>
        )
      }
      </View>
      <View style={estilos.titulo}>
        <Text style={estilos.negrita}>
          Estadisticas de gastos
        </Text>
        <View style={estilos.linea}/>
          <View style={estilos.semMesSem}>
            <TouchableOpacity style={estilos.semanaMesSem}>
              Semanal
            </TouchableOpacity>
            <TouchableOpacity style={estilos.semanaMesSem}>
              Mensual
            </TouchableOpacity>
            <TouchableOpacity style={estilos.semanaMesSem}>
              Semestral
            </TouchableOpacity>
          </View>
      </View>
  <View style={estilos.estadisticas}>
  
  <LineChart
    data={{
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor:'red',
      backgroundGradientFrom: "white",
      backgroundGradientTo: "white",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0, 110, 199, ${opacity})`,
      
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "fff"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      
    }}
  />
</View>
      <View style={estilos.surface4}>
        <Text style={estilos.negrita}> General </Text>
        <View style={estilos.linea}/>
        <View style={estilos.general}>
          <Text style={{color:'#283db5'}}> Ingresos{"\n"}{"\n"}
          {" "} $2.408 </Text>
          <Text style={{color:'#ac2020'}}> Gastos{"\n"}{"\n"}
          {" "}$1.209 </Text>
        </View>
        <View style={estilos.tiempo}>
          <Text style={{color:'#bdbdbd'}}> 3 meses, 28 días</Text>
        </View>
        

        
      </View>
      <View style={estilos.contenedorBotones}>
      <View style={estilos.surface}>
        <TouchableOpacity style={estilos.button}>
          <IconButton style={estilos.IconButton} icon={EnviarDinero}/>
          <Text style={estilos.text}> Enviar</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.surface2}>
        <TouchableOpacity style={estilos.button}>          
          <IconButton style={estilos.IconButton} icon={Cargar}/>
          <Text style={estilos.text}> Cargar</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.surface3}>
        <TouchableOpacity style={estilos.button}>
          <IconButton style={estilos.IconButton} icon={Transacciones}/>
          <Text style={estilos.text}> Transacciones </Text>
        </TouchableOpacity>
        
      </View>
      </View>
      <BottomNav navigation={navigation} init={0} />
    </SafeAreaView>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};


const estilos = StyleSheet.create({
  
  semanaMesSem:{
    alignItems: 'flex-start',
    textAlign: 'left',
    marginLeft: 13,
    fontSize: 12,
    
  },
  semMesSem:{
    flex: 0.5,
    flexDirection: 'row',
    
  },
  titulo: {
    flex: 0.3,
    margin: 10,
  },
  estadisticas: {
    flex: 1.5,
    margin: 10,
  },
  surface4: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 32, 
    margin: 10,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  contenedorBotones: {
    flex: 1,
    margin: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    
  },
  negrita: {
    fontWeight: 'bold',
    marginLeft: 15
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 48,
    height: 48
  },
  iconButton: {
    width: 24,
    height: 24,
    margin: 0
  },
  
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 14
  },
  surface: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: '75px',
    width: '120px',
    borderRadius: 32,

    borderRadius: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  surface2: {
    
    backgroundColor: 'white',
    alignItems: 'center',
    height: '75px',
    width: '120px',
    borderRadius: 32,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  surface3: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: '75px',
    width: '120px',
    borderRadius: 32,
    borderRadius: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  linea:{
    flex: 0.01,
    backgroundColor: '#bdbdbd',
    margin: 10,
  },
  general: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    
    
  },
  tiempo: {
    flex: 0.3,  
    alignItems: 'center',
    
  },
  
});