import { StyleSheet } from "react-native";

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: 'white'
  },
  header_image: {
    height: 150,
    width: '100%'
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: 'blue',
    marginTop: 30
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

