import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ToggleClass = createContext();

export const CartProvider = ({ children }) => {
  const [login, setIsLogin] = useState(() => {
    const storedUser = localStorage.getItem('login');
    // If there's a 'login' value in localStorage and it's 'true', set login to true
    return storedUser === 'true';
  });
  const [light, setLight] = useState(() => {
    const storedLight = localStorage.getItem('light');
    return storedLight === 'true';
  });
  const [isOpen, setIsOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const[getUser, setGetUser] = useState([])
  const[user, setUser] = useState({})
  const [getAdmin, setAdmin] = useState({})
  const storedAdminData = JSON.parse(localStorage.getItem('adminDetail'))
  const adminId = storedAdminData?.id

 
const storedUserData = JSON.parse(localStorage.getItem('userDetail'));
const userId = storedUserData?.id;

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/get/${adminId}`);
        setAdmin(res.data.data);
        // console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/user/get/${userId}`);
        setUser(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchAdmin();
    fetchUser();
  }, [adminId, userId]);
  
  

  useEffect(()=>{
    const fetchUser = async()=>{
      try {
        const res = await axios.get('http://localhost:4000/api/users')
        setGetUser(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  },[])
  const openModal = () => {
    setOpens(!isOpen);
  };
  const closeModal = () => {
    setOpens(false);
  };

  const openSide = () => {
    setSideOpen(true);
  };

  const closeSide = () => {
    setSideOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };


  const toggle = () => {
    setLight(true);
  };

  const back = () => {
    setLight(false);
  };

  const ret = () => {
    setIsLogin(true);
    localStorage.setItem('login', 'true');  // Save the login status to localStorage
  };

  const bet = () => {
    setIsLogin(false);
    localStorage.setItem('login', 'false');
    localStorage.removeItem('userDetail');
      closeSide()
  };

  useEffect(() => {
    // Save login status to localStorage whenever it changes
    localStorage.setItem('login', login);
  }, [login]);

  useEffect(() => {
    // Save light mode preference to localStorage
    localStorage.setItem('light', light);
  }, [light]);

  const values = {getUser, getAdmin, user, setAdmin, setGetUser, light, toggle, back, ret, login, bet, close, closeModal, closeSide, openModal, openSide, open, sideOpen, opens, isOpen };

  return (
    <ToggleClass.Provider value={values}>
      {children}
    </ToggleClass.Provider>
  );
};
