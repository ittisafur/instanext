import { useState } from "react";
import Feed from "@/screens/Feed";
import LandingScreen from "@/screens/LandingScreen";

const HomePage = () => {
  const [loggedIn] = useState(false);
  if (loggedIn) return <Feed />;
  return <LandingScreen />;
};

export default HomePage;
