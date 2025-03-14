
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { CheckCircle, DollarSign, Users, Award, BarChart, Clock, ArrowRight } from "lucide-react";

const Teach = () => {
  const [activeTab, setActiveTab] = useState("why-teach");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [expertise, setExpertise] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form data to a backend
    alert("Thank you for your interest in teaching! We'll contact you soon.");
    setEmail("");
    setName("");
    setExpertise("");
    setMessage("");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="heading-1">Share Your Knowledge, Inspire Learners</h1>
                <p className="text-xl opacity-90 max-w-xl">
                  Become an instructor on EduForge and transform your expertise into engaging courses that reach students worldwide.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <a href="#get-started">Start Teaching Today</a>
                </Button>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                    alt="Teacher with students" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">$50M+</h3>
                <p className="text-muted-foreground">Earned by instructors in 2023</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">250,000+</h3>
                <p className="text-muted-foreground">Active students worldwide</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">10,000+</h3>
                <p className="text-muted-foreground">Courses from expert instructors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-2 mb-4">Why Teach on EduForge?</h2>
              <p className="text-muted-foreground">
                Join our community of instructors and share your expertise with students around the world.
              </p>
            </div>

            <Tabs defaultValue="why-teach" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-12">
                <TabsTrigger value="why-teach">Why Teach</TabsTrigger>
                <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
                <TabsTrigger value="ai-tools">AI Tools</TabsTrigger>
              </TabsList>
              
              <TabsContent value="why-teach">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="heading-3 mb-6">Transform Your Knowledge Into Income</h3>
                    <div className="space-y-4">
                      <div className="flex">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-lg">Earn Revenue</h4>
                          <p className="text-muted-foreground">Get paid for every student who enrolls in your course with our revenue sharing model.</p>
                        </div>
                      </div>
                      <div className="flex">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-lg">Reach Millions</h4>
                          <p className="text-muted-foreground">Access our global audience of learners and grow your impact worldwide.</p>
                        </div>
                      </div>
                      <div className="flex">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-lg">Teach Your Way</h4>
                          <p className="text-muted-foreground">Create courses on your schedule with our flexible platform and supportive resources.</p>
                        </div>
                      </div>
                      <div className="flex">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-lg">Build Your Brand</h4>
                          <p className="text-muted-foreground">Establish yourself as an expert in your field and grow your professional network.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                      alt="Instructor teaching" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="how-it-works">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                      alt="Course creation process" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-6">Simple 4-Step Process</h3>
                    <div className="space-y-6">
                      <div className="flex">
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Plan Your Course</h4>
                          <p className="text-muted-foreground">
                            Decide what to teach and how to structure your content for maximum engagement.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Create Your Content</h4>
                          <p className="text-muted-foreground">
                            Record videos, create assignments, and develop resources with our easy-to-use tools.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Launch Your Course</h4>
                          <p className="text-muted-foreground">
                            Publish your course and start reaching students around the world.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                          4
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Earn & Grow</h4>
                          <p className="text-muted-foreground">
                            Get paid for enrollments, gather feedback, and continuously improve your course.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ai-tools">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="heading-3 mb-6">AI-Enhanced Teaching Tools</h3>
                    <div className="space-y-4">
                      <div className="flex">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-lg">Automatic Quiz Generation</h4>
                          <p className="text-muted-foreground">Our AI analyzes your course content and generates relevant quizzes to test student understanding.</p>
                        </div>
                      </div>
                      <div className="flex">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-lg">Content Suggestions</h4>
                          <p className="text-muted-foreground">Receive AI-powered recommendations to improve your course structure and fill knowledge gaps.</p>
                        </div>
                      </div>
                      <div className="flex">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-lg">Automated Subtitles</h4>
                          <p className="text-muted-foreground">Generate accurate subtitles in multiple languages to make your course accessible worldwide.</p>
                        </div>
                      </div>
                      <div className="flex">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-lg">Student Engagement Analytics</h4>
                          <p className="text-muted-foreground">Get detailed insights into how students interact with your content to optimize your teaching.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                      alt="AI-powered teaching tools" 
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Instructor Testimonials */}
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-2 mb-4">Hear From Our Instructors</h2>
              <p className="text-muted-foreground">
                Learn how teaching on EduForge has transformed the careers of instructors worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/32.jpg" 
                    alt="Sarah Johnson" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Web Development Instructor</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Teaching on EduForge has allowed me to reach students I never would have connected with otherwise. The platform's tools make course creation simple, and the AI features help me create better content."
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  <span>45,000+ students</span>
                  <span className="mx-2">•</span>
                  <BarChart className="h-4 w-4 mr-1" />
                  <span>8 courses</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/46.jpg" 
                    alt="Michael Chen" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">Data Science Instructor</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "I started teaching on EduForge as a side project, but it's grown into my full-time career. The revenue sharing model is fair, and the support team has been incredible throughout my journey."
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  <span>78,000+ students</span>
                  <span className="mx-2">•</span>
                  <BarChart className="h-4 w-4 mr-1" />
                  <span>12 courses</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/65.jpg" 
                    alt="Emily Rodriguez" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Emily Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Marketing Instructor</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The AI tools on EduForge have transformed how I create and deliver my courses. The automated quiz generation saves me hours of work, and the analytics help me understand exactly what my students need."
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  <span>32,000+ students</span>
                  <span className="mx-2">•</span>
                  <BarChart className="h-4 w-4 mr-1" />
                  <span>5 courses</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Form */}
        <section id="get-started" className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 mb-4">Ready to Share Your Knowledge?</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form to express your interest in becoming an instructor. Our team will contact you with next steps.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="expertise" className="block text-sm font-medium mb-1">
                      Area of Expertise
                    </label>
                    <Input
                      id="expertise"
                      type="text"
                      placeholder="e.g., Web Development, Data Science, Marketing"
                      value={expertise}
                      onChange={(e) => setExpertise(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Tell us about your teaching experience
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Share your background, teaching experience, and what you'd like to teach on EduForge"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </div>
              
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6">What Happens Next?</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Application Review</h4>
                      <p className="text-muted-foreground">
                        Our team will review your application and expertise within 2-3 business days.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Onboarding Call</h4>
                      <p className="text-muted-foreground">
                        If approved, we'll schedule a call to discuss your course ideas and our platform.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Course Planning</h4>
                      <p className="text-muted-foreground">
                        We'll help you plan your course structure and content for maximum engagement.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Start Creating</h4>
                      <p className="text-muted-foreground">
                        Begin creating your course with our platform tools and AI assistance.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-2">Have questions?</h4>
                  <p className="text-muted-foreground mb-4">
                    Check out our comprehensive resources for instructors or contact our support team.
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/instructor-resources">
                      Instructor Resources <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container-custom text-center">
            <h2 className="heading-2 mb-4">Join Our Growing Community of Instructors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Start sharing your knowledge today and make an impact on learners worldwide while earning revenue from your expertise.
            </p>
            <Button size="lg" asChild>
              <a href="#get-started">
                Become an Instructor <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Teach;
