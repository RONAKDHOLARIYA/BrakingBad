import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../Helpers/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  heading: {
    color: colors.lightGreen,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  nameContainer: {
    backgroundColor: colors.lightGreen,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    padding: 10,
    borderTopRightRadius: 45,
    marginRight: 20,
    borderBottomRightRadius: 8,
    marginTop: Dimensions.get('window').height / 2.3,
  },
  tag: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 8,
    marginTop: 10,
  },
});
