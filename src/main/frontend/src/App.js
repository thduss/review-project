import './App.css';
import Review from './components/Review';
import MyReview from './components/MyReview';
import ReviewWrite from './components/ReviewWrite';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <div className="__className_e66fe9 bg-gray-100">
      <Routes>
        <Route path="/review" element={ <Review />} />
        <Route path="/myPage" element={ <MyReview/> } />
        <Route path="/reviewWrite" element={<ReviewWrite/>}/>
      </Routes>
   </div>
   </BrowserRouter>
  )
}