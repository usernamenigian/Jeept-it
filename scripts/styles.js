import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logoContainer: {
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
      backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
      },
      logoImage: {
        width: "25%",
        height: "25%",
        resizeMode: "cover",
      },
      buttonContainer: {
        position: "absolute",
        bottom: 100,
        width: '70%'
      }
})

export default styles