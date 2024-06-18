import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FB from '../assets/image.png'
import BL from '../assets/blogo.png'
import BBL from '../assets/burgerlogo.png'

const data = [
    {name: 'Jr Executive', company: 'Fabe', location: 'Kasoa, Accra', image: BBL, salary: '200/yr'},
    {name: 'Product Manager', company: 'Fabe', location: 'Kasoa, Accra', image: BL, salary: '250/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '300/yr'},
    {name: 'Web Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '350/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '400/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '450/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '500/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
]

const Popular = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10, marginHorizontal: 20, marginTop: 20}}>
      {
        data.map((item, index) => {
            return(
                <View key={index} style={{backgroundColor: 'white', borderRadius: 10, padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <Image source={item.image} style={{width: 40, height: 40}}/>
                        <View style={{}}>
                            <Text style={{fontSize: 23}}>{item.name}</Text>
                            <Text>{item.name}</Text>
                        </View>
                        
                    </View>
                    <View>
                        <Text>${item.salary}</Text>
                        <Text>{item.location}</Text>
                    </View>
                </View>
            )
        })
      }
    </View>
  )
}

export default Popular

const styles = StyleSheet.create({})