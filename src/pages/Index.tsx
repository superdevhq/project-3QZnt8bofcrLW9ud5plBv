
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="flex justify-center">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold">10,000+</h3>
                <p>Courses Available</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold">250,000+</h3>
                <p>Active Students</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold">15,000+</h3>
                <p>Certified Graduates</p>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedCourses />
        <HowItWorks />
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container-custom text-center">
            <h2 className="heading-2 mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of students and instructors on EduForge today. Whether you want to learn new skills or share your expertise, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/signup">
                  Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/teach">Become an Instructor</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
