import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  titleText: {
    fontSize: 40,
    color: 'white',
  },
  boardContainer: {
    marginTop: 50,
    backgroundColor: 'skyblue',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center'
  },
  squareContainer: {
    backgroundColor: "#444",
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: "center",
    borderColor: "#999",
    borderWidth: 1
  }
})

export default styles;