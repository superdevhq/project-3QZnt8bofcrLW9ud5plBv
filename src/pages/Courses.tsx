
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/ui/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, X } from "lucide-react";

// Mock data for courses
const allCourses = [
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
  {
    id: "5",
    title: "Advanced JavaScript Concepts",
    instructor: "Andrei Neagoie",
    thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    rating: 4.8,
    reviewCount: 6789,
    price: 89.99,
    discountPrice: 13.99,
    category: "Web Development",
    level: "Advanced" as const,
    duration: "35h 45m",
    studentsCount: 87654,
  },
  {
    id: "6",
    title: "UX/UI Design Masterclass",
    instructor: "Daniel Walter Scott",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    rating: 4.6,
    reviewCount: 4321,
    price: 94.99,
    discountPrice: 15.99,
    category: "Design",
    level: "Beginner" as const,
    duration: "42h 30m",
    studentsCount: 76543,
  },
  {
    id: "7",
    title: "Complete Python Bootcamp",
    instructor: "Jose Portilla",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    rating: 4.7,
    reviewCount: 9876,
    price: 99.99,
    discountPrice: 14.99,
    category: "Programming",
    level: "All Levels" as const,
    duration: "48h 15m",
    studentsCount: 198765,
  },
  {
    id: "8",
    title: "Financial Analysis & Business Modeling",
    instructor: "Chris Haroun",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    rating: 4.5,
    reviewCount: 5432,
    price: 119.99,
    discountPrice: 17.99,
    category: "Business",
    level: "Intermediate" as const,
    duration: "36h 20m",
    studentsCount: 65432,
  },
];

const categories = [
  "All Categories",
  "Web Development",
  "Data Science",
  "Marketing",
  "Mobile Development",
  "Design",
  "Programming",
  "Business",
];

const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter courses based on search, category, level, and price
  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory;
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level);
    const matchesPrice = (course.discountPrice || course.price) >= priceRange[0] && 
                         (course.discountPrice || course.price) <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
  });

  const toggleLevel = (level: string) => {
    setSelectedLevels((prev) => 
      prev.includes(level) 
        ? prev.filter((l) => l !== level) 
        : [...prev, level]
    );
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="bg-muted py-12">
          <div className="container-custom">
            <h1 className="heading-2 mb-4">Explore Courses</h1>
            <p className="text-muted-foreground max-w-2xl">
              Discover thousands of courses to help you learn new skills, advance your career, or explore new hobbies.
            </p>
            <div className="mt-6 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for courses..."
                className="pl-10 py-6 text-lg rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="md:hidden w-full mb-4">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-between"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <span className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </span>
                {isFilterOpen ? <X className="h-4 w-4" /> : null}
              </Button>
            </div>

            {/* Filters Sidebar */}
            <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-1/4 lg:w-1/5`}>
              <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
                <h2 className="font-semibold text-lg mb-4">Filters</h2>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Category</h3>
                  <div className="space-y-1">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant="ghost"
                        className={`w-full justify-start ${
                          selectedCategory === category ? "bg-primary/10 text-primary" : ""
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Level Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Level</h3>
                  <div className="space-y-2">
                    {levels.map((level) => (
                      <div key={level} className="flex items-center">
                        <Checkbox 
                          id={`level-${level}`} 
                          checked={selectedLevels.includes(level)}
                          onCheckedChange={() => toggleLevel(level)}
                        />
                        <label 
                          htmlFor={`level-${level}`}
                          className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <Slider
                    defaultValue={[0, 200]}
                    max={200}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-6"
                  />
                  <div className="flex items-center justify-between">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                {/* Reset Filters */}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Categories");
                    setSelectedLevels([]);
                    setPriceRange([0, 200]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
            
            {/* Course Grid */}
            <div className="w-full md:w-3/4 lg:w-4/5">
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{filteredCourses.length}</span> results
                </p>
                <div className="flex items-center">
                  <span className="mr-2 text-sm text-muted-foreground">Sort by:</span>
                  <select className="bg-muted border border-border rounded-md px-2 py-1 text-sm">
                    <option>Most Popular</option>
                    <option>Highest Rated</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
              
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted rounded-lg">
                  <h3 className="text-lg font-medium mb-2">No courses found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Courses;
