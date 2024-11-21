"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect the user to the login page when visiting the root route ("/")
    router.push("/login");
  }, [router]);

  return null; // This page won't render anything, just redirects
};

export default HomePage;
