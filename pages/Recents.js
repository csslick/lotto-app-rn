import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function Recents() {
  const API_URL = `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=`;
  const [data, setData] = useState();

  useEffect(() => {
    fetch(API_URL + 100)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>{data.drwNo}회차</Text>
      <View>
        <Text>당첨일자: {data.drwNoDate}</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop:50}}>
        <View style={styles.ball}>
          <Text>{data.drwtNo1}</Text>
        </View>
        <View style={styles.ball}>
          <Text>{data.drwtNo2}</Text>
        </View>
        <View style={styles.ball}>
          <Text>{data.drwtNo3}</Text>
        </View>
        <View style={styles.ball}>
          <Text>{data.drwtNo4}</Text>
        </View>
        <View style={styles.ball}>
          <Text>{data.drwtNo5}</Text>
        </View>
        <View style={styles.ball}>
          <Text>{data.drwtNo6}</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ball: {
    backgroundColor: 'gray', // 배열색상값 = 숫자값 - 1
    width: 48, height: 48, margin: 4,
    borderRadius: 24,
    justifyContent: 'center', alignItems: 'center'
  }
});