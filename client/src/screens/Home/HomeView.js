import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import styles from './styles';
import { Text, Button } from '../../components';
import { palette, rgba, fontSystem } from '../../theme';
import { LineChart, PieChart } from "react-native-chart-kit";

const buttons = [
  {
    index: 0,
    type: 'icon',
    label: 'Recargar',
    icon: 'arrow-collapse-up',
    route: 'Deposit'
  },
  {
    index: 1,
    type: 'icon',
    label: 'Transacciones',
    icon: 'refresh',
    route: 'Transaction'
  },
  {
    index: 2,
    type: 'icon',
    label: 'Enviar',
    icon: 'subdirectory-arrow-right',
    route: 'Transfer'
  },
];


export default function HomeView({ navigation, account }) {

  const PieChartCustom = () => {
    return (
      <PieChart
        data={[
          {
            population: 1153.15,
            color: palette.primary.light,
          },
          {
            population: 2334.12,
            color: palette.secondary.light,
          },
        ]}
        width={128+25.6+5.12}
        height={128+25.6+5.12}
        hasLegend={false}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        center={[40, 0]}
      />
    )
  }

  const data = [
    {
      value: Math.random() * 100,
      type: 'income'
    },
    {
      value: Math.random() * 100,
      type: 'express'
    },
    {
      value: Math.random() * 100,
      type: 'express'
    },
    {
      value: Math.random() * 100,
      type: 'income'
    },
    {
      value: Math.random() * 100,
      type: 'income'
    },
    { value: Math.random() * 100,
      type: 'income'
    }
  ];

  const LineChartCustom = () => {
    return (
      <LineChart

      data={{
        labels: ['January', 'February', 'March', 'April'],
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
        width={Dimensions.get("window").width - 32}
        height={220}
        withInnerLines={false}
        withVerticalLines={false}
        yAxisLabel="$"
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          fillShadowGradient:'red',
          fillShadowGradientOpacity:1,
          backgroundColor: '#e20000',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          color: (opacity = 1) => rgba(palette.secondary.main, opacity),
          labelColor: (opacity = 1) => rgba(palette.accent.dark, opacity),
          strokeWidth: 3,

          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "5",
            strokeWidth: "6",
            stroke: rgba(palette.secondary.main, 0.1)
          },
          propsForBackgroundLines: {
            strokeWidth: 1,
            stroke: palette.accent.dark
          },
        }}
        backgroundColor="transparent"
        bezier
        style={[fontSystem.body3, {color: 'red'}]}
      />
    )
  }

  return (
    <View style={{flex: 1, paddingVertical: 16}}>
      <View style={styles.header}>
        <View style={styles.headerChart}>
          <PieChartCustom />
          <View style={styles.chartTitle}>
            <Text type='subtitle2' text='General' style={{textAlign: 'center'}}/>
          </View>
        </View>

        <View style={styles.headerText}>
          <View>
            <Text type='body2' text='Balance total' style={{textAlign: 'center'}} />
            <View style={styles.balanceText}>
              <Text type='title' text={`$${account.balance}`} style={{fontSize: 24}} />
              <View style={styles.currency}>
                <Text type='subtitle2' text={`${account.currency}`} />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.generalText}>
              <Text type='body2' text='Ingresos' />
              <Text type='subtitle2' text={`$1153.15`} color='primary' />
            </View>
            <View style={styles.generalText}>
              <Text type='body2' text='Gastos' />
              <Text type='subtitle2' text={`$2334.12`} color='secondary' />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.middle}>
        <Text type='subtitle2' text='Estadisticas de movimientos' style={{paddingBottom: 4}}/>
        <View style={styles.separator}></View>
        <View style={styles.buttonsChartLineal}>
          <Button
            style={{padding: 4}}
            type='text'
            label='Quincena'
            onPress={() => console.log('clicked')}
          />
          <Button
            style={{padding: 4}}
            type='text'
            label='Trimestral'
            onPress={() => console.log('clicked')}
          />
          <Button
            style={{padding: 4}}
            type='text'
            label='Semestral'
            onPress={() => console.log('clicked')}
          />
        </View>
        <View style={{paddingTop: 4}}>
          <LineChartCustom />
        </View>
      </View>


      <View style={styles.bottom}>
          {buttons.map((bt, index) => (
              <View key={index} style={{alignItems: 'center'}}>
                <Button
                  style={styles.buttonFloat}
                  color='primary'
                  type={bt.type}
                  icon={bt.icon}
                  onPress={() => navigation.navigate(bt.route)} />
                <View style={styles.textButton}>
                  <Text type='body2' text={bt.label} style={{alignText: 'center'}}/>
                </View>
              </View>
            ))
          }
      </View>
    </View>
  );
};
