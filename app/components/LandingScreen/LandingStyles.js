import { StyleSheet } from "react-native";

export const LandingScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection:'row'
  },
  header_image: {
    height: 150,
    width: '100%'
  },
  tabs: {
    height: 50,
    width: '50%',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: 'blue',
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  btnText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15
  },

  separation_view: {
    flexDirection: 'row',
    height: 50,
  },

  line_style: {
    height: 1,
    flex: 1,
    marginTop: 15,
    backgroundColor: 'gray'
  },

  circle_style: {
    height: 30,
    width: 30,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  btngoogle_signin: {
    width: '100%',
    height: 60
  }




})

