
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      // Get the URL hash and handle the OAuth callback
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error("Error during OAuth callback:", error);
        navigate("/login?error=Authentication failed");
        return;
      }
      
      if (data?.session) {
        // Redirect to home page or the page they were trying to access
        const returnUrl = localStorage.getItem("returnUrl") || "/";
        localStorage.removeItem("returnUrl"); // Clean up
        navigate(returnUrl);
      } else {
        navigate("/login");
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
      <h1 className="text-2xl font-bold mb-2">Completing authentication...</h1>
      <p className="text-muted-foreground">Please wait while we log you in.</p>
    </div>
  );
};

export default AuthCallback;
