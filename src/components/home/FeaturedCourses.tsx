
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/ui/CourseCard";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for featured courses
const featuredCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    rating: 4.8,
    reviewCount: 12543,
    price: 99.99,
    discountPrice: 14.99,
    category: "Web Development",
    level: "All Levels" as const,
    duration: "63h 30m",
    studentsCount: 245689,
  },
  {
    id: "2",
    title: "Machine Learning A-Z: Hands-On Python & R",
    instructor: "Kirill Eremenko",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    rating: 4.7,
    reviewCount: 8976,
    price: 129.99,
    discountPrice: 19.99,
    category: "Data Science",
    level: "Intermediate" as const,
    duration: "44h 15m",
    studentsCount: 156432,
  },
  {
    id: "3",
    title: "The Complete Digital Marketing Course",
    instructor: "Rob Percival",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    rating: 4.5,
    reviewCount: 7865,
    price: 84.99,
    discountPrice: 12.99,
    category: "Marketing",
    level: "Beginner" as const,
    duration: "38h 40m",
    studentsCount: 132567,
  },
  {
    id: "4",
    title: "iOS App Development with Swift",
    instructor: "Stephen Grider",
    thumbnail: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    rating: 4.9,
    reviewCount: 5432,
    price: 109.99,
    discountPrice: 16.99,
    category: "Mobile Development",
    level: "Intermediate" as const,
    duration: "52h 20m",
    studentsCount: 98765,
  },
];

const categories = [
  "All Categories",
  "Web Development",
  "Data Science",
  "Marketing",
  "Mobile Development",
  "Design",
  "Business",
];

const FeaturedCourses = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="heading-2 mb-4">Featured Courses</h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our most popular courses across various categories, handpicked by our team and loved by students.
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden md:flex mt-4 md:mt-0">
            <Link to="/courses">
              View All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button asChild>
            <Link to="/courses">
              View All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
