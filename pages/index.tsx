import { useState } from "react";
import Feed from "@/screens/Feed";
import LandingScreen from "@/screens/LandingScreen";
import useAuth from "@/hooks/useAuth";
import FullscreenLoader from "@/components/FullscreenLoader";

const HomePage = () => {
  const {authenticated, loading} = useAuth();
  if (loading) return <FullscreenLoader />;
  if (authenticated) return <Feed />;
  return <LandingScreen />;
};

export default HomePage;
