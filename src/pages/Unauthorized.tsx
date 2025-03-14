
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Home, ArrowLeft } from "lucide-react";

const Unauthorized = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-16">
        <div className="container-custom max-w-2xl text-center">
          <ShieldAlert className="h-24 w-24 text-destructive mx-auto mb-6" />
          <h1 className="heading-2 mb-4">Access Denied</h1>
          <p className="text-lg text-muted-foreground mb-8">
            You don't have permission to access this page. If you believe this is an error, please contact support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/profile">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Profile
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Unauthorized;
