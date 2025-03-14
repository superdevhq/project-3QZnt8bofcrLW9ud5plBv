
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Clock, Users, BarChart, Award, Play, FileText, Download, CheckCircle, ShoppingCart, Heart } from "lucide-react";

// Mock course data
const courseData = {
  "1": {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    instructorTitle: "Senior Web Developer & Lead Instructor",
    instructorAvatar: "https://randomuser.me/api/portraits/women/32.jpg",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    rating: 4.8,
    reviewCount: 12543,
    price: 99.99,
    discountPrice: 14.99,
    category: "Web Development",
    level: "All Levels",
    duration: "63h 30m",
    studentsCount: 245689,
    lastUpdated: "April 2023",
    language: "English",
    description: "Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB, and more!",
    longDescription: "This course is designed to take you from absolute beginner to professional developer. You'll learn the latest technologies and frameworks used by top companies worldwide. By the end of this course, you'll be able to build complete web applications from scratch and deploy them to the cloud.",
    whatYouWillLearn: [
      "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs",
      "Learn the latest technologies, including Javascript, React, Node and even Web3 development",
      "Master frontend development with React",
      "Master backend development with Node",
      "Learn professional developer best practices",
    ],
    requirements: [
      "No programming experience needed - I'll teach you everything you need to know",
      "A computer with access to the internet",
      "No paid software required",
      "I'll walk you through, step-by-step how to get all the software installed and set up",
    ],
    sections: [
      {
        title: "Introduction to Web Development",
        lectures: [
          { title: "Course Overview", duration: "5:22", type: "video", preview: true },
          { title: "How the Internet Works", duration: "12:45", type: "video", preview: true },
          { title: "Setting Up Your Development Environment", duration: "18:30", type: "video", preview: false },
        ],
      },
      {
        title: "HTML Fundamentals",
        lectures: [
          { title: "HTML Document Structure", duration: "14:20", type: "video", preview: false },
          { title: "HTML Tags and Elements", duration: "22:15", type: "video", preview: false },
          { title: "HTML Forms and Inputs", duration: "25:10", type: "video", preview: false },
          { title: "HTML Project: Personal Website", duration: "45:00", type: "project", preview: false },
        ],
      },
      {
        title: "CSS Styling",
        lectures: [
          { title: "CSS Selectors and Properties", duration: "18:45", type: "video", preview: false },
          { title: "CSS Box Model", duration: "15:30", type: "video", preview: false },
          { title: "CSS Flexbox Layout", duration: "28:15", type: "video", preview: false },
          { title: "CSS Grid Layout", duration: "32:20", type: "video", preview: false },
          { title: "Responsive Design with Media Queries", duration: "24:10", type: "video", preview: false },
          { title: "CSS Project: Portfolio Website", duration: "55:00", type: "project", preview: false },
        ],
      },
      {
        title: "JavaScript Basics",
        lectures: [
          { title: "JavaScript Variables and Data Types", duration: "22:30", type: "video", preview: false },
          { title: "JavaScript Functions and Scope", duration: "26:15", type: "video", preview: false },
          { title: "JavaScript Arrays and Objects", duration: "28:45", type: "video", preview: false },
          { title: "DOM Manipulation", duration: "35:20", type: "video", preview: false },
          { title: "JavaScript Project: Interactive Website", duration: "65:00", type: "project", preview: false },
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        user: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
        date: "2 months ago",
        comment: "This course is absolutely amazing! I started with zero knowledge and now I'm building full-stack applications. The instructor explains everything clearly and the projects are really fun to build.",
      },
      {
        id: 2,
        user: "Michael Chen",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        rating: 4,
        date: "3 months ago",
        comment: "Great course with lots of practical examples. The only reason I'm giving 4 stars instead of 5 is because some of the content could use updating to the latest versions of the frameworks.",
      },
      {
        id: 3,
        user: "Emily Rodriguez",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 5,
        date: "1 month ago",
        comment: "I've taken several web development courses, and this is by far the best one. The instructor's teaching style is engaging and the course content is comprehensive.",
      },
    ],
  },
  "2": {
    id: "2",
    title: "Machine Learning A-Z: Hands-On Python & R",
    instructor: "Kirill Eremenko",
    instructorTitle: "Data Scientist & Machine Learning Expert",
    instructorAvatar: "https://randomuser.me/api/portraits/men/46.jpg",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    rating: 4.7,
    reviewCount: 8976,
    price: 129.99,
    discountPrice: 19.99,
    category: "Data Science",
    level: "Intermediate",
    duration: "44h 15m",
    studentsCount: 156432,
    lastUpdated: "March 2023",
    language: "English",
    description: "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
    longDescription: "This course has been designed by two professional Data Scientists so that we can share our knowledge and help you learn complex theory, algorithms, and coding libraries in a simple way. We will walk you step-by-step into the World of Machine Learning. With every tutorial, you will develop new skills and improve your understanding of this challenging yet lucrative sub-field of Data Science.",
    whatYouWillLearn: [
      "Master Machine Learning on Python & R",
      "Have a great intuition of many Machine Learning models",
      "Make accurate predictions",
      "Make powerful analysis",
      "Make robust Machine Learning models",
      "Create strong added value to your business",
    ],
    requirements: [
      "Just some high school mathematics level",
      "Basic Python or R knowledge",
    ],
    sections: [
      {
        title: "Introduction to Machine Learning",
        lectures: [
          { title: "Welcome to the Course", duration: "3:45", type: "video", preview: true },
          { title: "What is Machine Learning?", duration: "10:20", type: "video", preview: true },
          { title: "Setting Up Your Environment", duration: "15:30", type: "video", preview: false },
        ],
      },
      {
        title: "Data Preprocessing",
        lectures: [
          { title: "Importing the Dataset", duration: "8:15", type: "video", preview: false },
          { title: "Handling Missing Data", duration: "12:30", type: "video", preview: false },
          { title: "Encoding Categorical Data", duration: "14:45", type: "video", preview: false },
          { title: "Feature Scaling", duration: "10:20", type: "video", preview: false },
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        user: "John Smith",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        date: "2 months ago",
        comment: "Excellent course for beginners in machine learning. The explanations are clear and the practical examples really help solidify the concepts.",
      },
    ],
  },
};

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Get course data based on courseId
  const course = courseData[courseId as keyof typeof courseData];
  
  if (!course) {
    return (
      <>
        <Navbar />
        <div className="container-custom py-16 text-center">
          <h1 className="heading-2 mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/courses">Browse Courses</a>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Course Header */}
        <div className="bg-muted py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h1 className="heading-2 mb-4">{course.title}</h1>
                <p className="text-lg mb-4">{course.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-500 mr-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(course.rating) ? "fill-yellow-500" : "fill-muted stroke-muted"}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{course.rating.toFixed(1)}</span>
                    <span className="text-muted-foreground ml-1">({course.reviewCount} reviews)</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Users size={16} className="mr-1" />
                    <span>{course.studentsCount.toLocaleString()} students</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <img 
                    src={course.instructorAvatar} 
                    alt={course.instructor} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">Created by {course.instructor}</p>
                    <p className="text-sm text-muted-foreground">{course.instructorTitle}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>Last updated {course.lastUpdated}</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart size={16} className="mr-1" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{course.duration} total length</span>
                  </div>
                </div>
              </div>
              
              {/* Course Card */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md sticky top-24">
                  <div className="aspect-video relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <Button variant="outline" className="rounded-full" size="icon">
                        <Play className="h-6 w-6 fill-white text-white" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {course.discountPrice ? (
                        <>
                          <span className="text-3xl font-bold">${course.discountPrice}</span>
                          <span className="text-lg text-muted-foreground line-through ml-2">${course.price}</span>
                          <span className="ml-2 bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                            {Math.round((1 - course.discountPrice / course.price) * 100)}% off
                          </span>
                        </>
                      ) : (
                        <span className="text-3xl font-bold">${course.price}</span>
                      )}
                    </div>
                    
                    <Button className="w-full mb-3">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    
                    <Button variant="outline" className="w-full mb-6">
                      <Heart className="mr-2 h-4 w-4" />
                      Wishlist
                    </Button>
                    
                    <div className="space-y-4 text-sm">
                      <p className="font-medium">This course includes:</p>
                      <div className="flex items-start">
                        <Play className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                        <span>{course.duration} on-demand video</span>
                      </div>
                      <div className="flex items-start">
                        <FileText className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                        <span>25 articles</span>
                      </div>
                      <div className="flex items-start">
                        <Download className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                        <span>85 downloadable resources</span>
                      </div>
                      <div className="flex items-start">
                        <Award className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                        <span>Certificate of completion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="container-custom py-8">
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger 
                value="overview" 
                className={`rounded-none border-b-2 border-transparent px-4 py-2 ${
                  activeTab === "overview" ? "border-primary" : ""
                }`}
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="curriculum" 
                className={`rounded-none border-b-2 border-transparent px-4 py-2 ${
                  activeTab === "curriculum" ? "border-primary" : ""
                }`}
              >
                Curriculum
              </TabsTrigger>
              <TabsTrigger 
                value="instructor" 
                className={`rounded-none border-b-2 border-transparent px-4 py-2 ${
                  activeTab === "instructor" ? "border-primary" : ""
                }`}
              >
                Instructor
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className={`rounded-none border-b-2 border-transparent px-4 py-2 ${
                  activeTab === "reviews" ? "border-primary" : ""
                }`}
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {course.longDescription}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex">
                          <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {course.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum" className="pt-6">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">Course Content</h2>
                <p className="text-muted-foreground">
                  {course.sections.reduce((total, section) => total + section.lectures.length, 0)} lectures • {course.duration} total length
                </p>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {course.sections.map((section, index) => (
                  <AccordionItem key={index} value={`section-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex justify-between w-full pr-4">
                        <span className="font-medium">{section.title}</span>
                        <span className="text-muted-foreground text-sm">
                          {section.lectures.length} lectures • 
                          {section.lectures.reduce((total, lecture) => {
                            const [mins, secs] = lecture.duration.split(':').map(Number);
                            return total + mins + secs / 60;
                          }, 0).toFixed(0)} min
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {section.lectures.map((lecture, lectureIndex) => (
                          <div 
                            key={lectureIndex} 
                            className="flex items-center justify-between p-3 hover:bg-muted rounded-md"
                          >
                            <div className="flex items-center">
                              {lecture.type === "video" ? (
                                <Play className="h-4 w-4 mr-3 text-muted-foreground" />
                              ) : (
                                <FileText className="h-4 w-4 mr-3 text-muted-foreground" />
                              )}
                              <span>{lecture.title}</span>
                              {lecture.preview && (
                                <span className="ml-3 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                                  Preview
                                </span>
                              )}
                            </div>
                            <span className="text-muted-foreground text-sm">{lecture.duration}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="instructor" className="pt-6">
              <div className="flex items-start mb-6">
                <img 
                  src={course.instructorAvatar} 
                  alt={course.instructor} 
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-1">{course.instructor}</h2>
                  <p className="text-muted-foreground mb-3">{course.instructorTitle}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-yellow-500 text-yellow-500" />
                      <span>4.7 Instructor Rating</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      <span>42,567 Reviews</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>376,983 Students</span>
                    </div>
                    <div className="flex items-center">
                      <Play className="h-4 w-4 mr-1" />
                      <span>12 Courses</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">About the Instructor</h3>
                <p className="text-muted-foreground mb-4">
                  I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.
                </p>
                <p className="text-muted-foreground">
                  My first foray into programming was when I was just 12 years old, wanting to build my own Space Invader game. Since then, I've made hundred of websites, apps and games. But most importantly, I realized that my greatest passion is teaching.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="pt-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <div className="text-5xl font-bold text-center">{course.rating.toFixed(1)}</div>
                    <div className="flex items-center text-yellow-500 justify-center mt-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(course.rating) ? "fill-yellow-500" : "fill-muted stroke-muted"}
                        />
                      ))}
                    </div>
                    <div className="text-center text-muted-foreground mt-1">
                      Course Rating
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const percentage = star === 5 ? 78 : star === 4 ? 15 : star === 3 ? 5 : star === 2 ? 1 : 1;
                      return (
                        <div key={star} className="flex items-center mb-1">
                          <div className="flex items-center text-yellow-500 w-20">
                            <span className="mr-1">{star}</span>
                            <Star size={12} className="fill-yellow-500" />
                          </div>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-yellow-500 rounded-full" 
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm text-muted-foreground w-12">{percentage}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="space-y-6">
                  {course.reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-6">
                      <div className="flex items-start">
                        <img 
                          src={review.avatar} 
                          alt={review.user} 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium">{review.user}</h4>
                          <div className="flex items-center">
                            <div className="flex items-center text-yellow-500 mr-2">
                              {Array(5).fill(0).map((_, i) => (
                                <Star
                                  key={i}
                                  size={12}
                                  className={i < review.rating ? "fill-yellow-500" : "fill-muted stroke-muted"}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="mt-2">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CourseDetail;
