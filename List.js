import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
export default function List() {
    const [names, setNames] = useState([
        {
           id: 0,
           name: 'Ben',
        },
        {
           id: 1,
           name: 'Susan',
        },
        {
           id: 2,
           name: 'Robert',
        },
        {
           id: 3,
           name: 'Mary',
        }
     ]);

     const alertItemName = (item) => {
      alert(item.name)
   }
      return (
         <View>
            {
               names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})
