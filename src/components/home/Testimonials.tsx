
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content:
      "EduForge completely transformed my learning experience. The AI-generated quizzes helped me identify knowledge gaps I didn't even know I had, and the personalized recommendations led me to courses that perfectly matched my career goals.",
    author: "Sarah Johnson",
    role: "Software Developer",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    content:
      "As an instructor, I've taught on several platforms, but EduForge stands out. The tools for creating engaging content are intuitive, and the AI-powered insights help me understand exactly what my students need. My course completion rates have never been higher!",
    author: "Michael Chen",
    role: "Data Science Instructor",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    content:
      "I was skeptical about online learning until I discovered EduForge. The interactive elements and community features make it feel like you're in a real classroom. I've completed three courses so far and have already applied my new skills at work.",
    author: "Emily Rodriguez",
    role: "Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground">
            Discover how EduForge has helped thousands of students and instructors achieve their goals.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-primary opacity-20">
            <Quote size={80} />
          </div>

          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-md relative z-10">
            <div className="mb-8">
              <p className="text-lg md:text-xl italic">
                "{testimonials[activeIndex].content}"
              </p>
            </div>
            <div className="flex items-center">
              <img
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].author}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
                <p className="text-muted-foreground text-sm">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 text-primary opacity-20">
            <Quote size={80} className="rotate-180" />
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className={`w-2 h-2 rounded-full p-0 ${
                  activeIndex === index
                    ? "bg-primary border-primary"
                    : "bg-muted border-muted"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
