import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  // lotto num(6)
  const [lotto, setLotto] = useState([1, 2, 3, 4, 5, 6])
  // color table
  const color = [
    // 1...10
    'gold','gold','gold','gold','gold','gold','gold','gold','gold','gold',
    // 11...20
    'blue','blue','blue','blue','blue','blue','blue','blue','blue','blue',
    // 21...30
    'red','red','red','red','red','red','red','red','red','red',
    // 31...40
    'gray','gray','gray','gray','gray','gray','gray','gray','gray','gray',
    // 41...45
    'green','green','green','green','green',
  ]

  // lotto 번호 종류에 따라 색상 바꿈
  useEffect(() => {
    console.log('render')
  }, [lotto])

  // generate lotto num
  const genLotto = () => {    
    setLotto([])
    let num45 = [];
    for(let i = 1; i <= 45; i++) {
      num45.push(i)
    }
      
    let lottoNum = new Array(6);

    // 6개의 랜덤 번호 추출
    for (let i = 1; i <= 6; i++) {
      // num45배열 범위에서 랜덤 번호 생성
      let r = Math.floor(Math.random()*num45.length);
      // 배열에서 임의값 추출
      let val = num45.splice(r, 1); // val 배열값 주의
      // 로또 배열에 추출값 val 추가
      lottoNum[i-1] = val[0]; 
    }
    setLotto(lottoNum);
    console.log(`lottoNum = ${lottoNum}`)
  } // genLotto
  console.log(lotto)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30, marginBottom: 60}}>Lotto Generator</Text>
      <View style={{flexDirection: 'row'}}>
        {
          lotto.map((num, key) => {
            return (
              <View key={key} style={{
                backgroundColor: color[num-1], // 배열색상값 = 숫자값 - 1
                width: 48, height: 48, margin: 4,
                borderRadius: 24,
                justifyContent: 'center', alignItems: 'center'
              }}>
                <Text style={{ fontSize: 32, color: 'white' }}>{num}</Text>
              </View>
            )
          })
        }
      </View>
      <View style={{ marginTop: 60 }}>
        <Button onPress={genLotto} title="Generate" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
