import { StyleSheet } from 'react-native';
import Constants from '../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444',
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    color: 'white',
  },
  boardContainer: {
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 5,
    backgroundColor: 'skyblue',
    borderRadius: 5,
    padding: Constants.BaseStyle.DEVICE_WIDTH / 100 * 6,
  },
  squareContainer: {
    backgroundColor: "#444",
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 12,
    width: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 12,
    alignItems: 'center',
    justifyContent: "center",
    borderColor: "#999",
    borderWidth: 1
  }
})

export default styles;