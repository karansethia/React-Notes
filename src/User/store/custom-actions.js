import { uiActions } from "./ui-slice";

export const setLogOut = () => {
  return async(dispatch)=> {
    const setLog = async() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if(isLoggedIn){
        localStorage.setItem('isLoggedIn',false);
        return "Succesfully Logged Out"
      }
      return "You gotta login first man"
    }
    try{
      const notification = await setLog();
      dispatch(uiActions.logout(false));
      dispatch(
        uiActions.showModal(notification)
      )
      
    }catch(err){
      dispatch(
        uiActions.showModal("An error occured while logging out")
      )
    }
  }
}

export const setLogIn = () => {
  return async(dispatch) =>{
    const setLog = async() => {
      localStorage.setItem('isLoggedIn',true);
      return "Logged In succesfully";
    }
    try{
      const notification = await setLog();
      dispatch(uiActions.logout(true))
      dispatch(
        uiActions.showModal(notification)
      )
    }catch(err){
      dispatch(
        uiActions.showModal(notification)
      )
    }
  }
}