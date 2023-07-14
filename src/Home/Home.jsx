import React from "react";
import Banner from "./Banner";
import StudentCart from "./StudentCart";
import Instructors from "./instructors";
import Contack from "./Contack";
import Lochan from "./lochan";
import Extra from "./Extra";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Yoga School | Home</title>
      </Helmet>
      <Banner />
      <StudentCart />
      <Instructors />
      <Extra />
      <Contack />
      <Lochan />
    </div>
  );
};

export default Home;
