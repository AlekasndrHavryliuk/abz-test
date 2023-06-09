import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getPositions } from "store/positionsReducer/postionsOperations";
import { getToken } from "store/tokenReducer/tokenOperation";
import Banner from "./Banner/Banner";
import CardsGallery from "./CardsGallery/CardsGallery";
import { GlobalStyle } from "./Custom/GlobalStyle/GlobalStyle.styled";
import Header from "./Header/Header";
import SignUpForm from "./SignUpForm/SignUpForm";


export const App = () => {

  const dispatch = useDispatch();

  // Default receipt of positions and token. 
  // P.S. the token can be obtained immediately before sending the form, but this option is more convenient given that this is a test work.

  useEffect(() => {
    dispatch(getPositions())
    dispatch(getToken())
  }, [dispatch])


  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Banner />
      <CardsGallery />
      <SignUpForm />
    </>
  );
};
