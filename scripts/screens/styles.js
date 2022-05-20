import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const styles = StyleSheet.create({
    welcomeCard: {
          width: '100%',
          backgroundColor: DefaultTheme.colors.background,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 10
          },
          container: {
            width: "100%",
            height: "100%",
            alignItems: "center"
          },
          titles: {
            marginTop: "50%",
            alignItems: "center"
          },
          title: {
            fontSize: 48,
            fontWeight: "bold",
          },
          subtitle1: {
            fontSize: 18,
            fontWeight: "500",
          },
          subtitle2: {
            fontSize: 18,
            fontWeight: "300"
          },
          buttonContainer: {
            position: "absolute",
            bottom: 120,
            width: '70%'
          },
          view: {
            height: '90%'
          },
          head: { 
            height: 50, 
            backgroundColor: 'skyblue'
          },
          text: { 
            margin: 5, 
            textAlign: 'center', 
            fontWeight: '500'
          }
})

export default styles