
import { Book, Video, Award, Brain } from "lucide-react";

const features = [
  {
    icon: <Book className="h-10 w-10 text-primary" />,
    title: "Comprehensive Curriculum",
    description:
      "Access a wide range of courses created by industry experts, covering everything from programming to business and beyond.",
  },
  {
    icon: <Video className="h-10 w-10 text-primary" />,
    title: "High-Quality Video Content",
    description:
      "Enjoy professionally produced video lessons with clear explanations, practical examples, and downloadable resources.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Certificates of Completion",
    description:
      "Earn recognized certificates upon course completion to showcase your new skills to employers and your network.",
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "AI-Enhanced Learning",
    description:
      "Experience personalized learning with our AI technology that adapts to your pace, generates quizzes, and provides tailored recommendations.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-4">How EduForge Works</h2>
          <p className="text-muted-foreground">
            Our platform combines expert-led courses with cutting-edge AI technology to create a personalized and effective learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-lg overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="heading-3 mb-4">The Learning Journey</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Browse & Enroll</h4>
                    <p className="text-muted-foreground">
                      Explore our catalog and enroll in courses that match your interests and goals.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Learn at Your Pace</h4>
                    <p className="text-muted-foreground">
                      Access course content anytime, anywhere, and learn at your own pace.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Practice & Apply</h4>
                    <p className="text-muted-foreground">
                      Reinforce your learning with quizzes, assignments, and practical projects.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Get Certified</h4>
                    <p className="text-muted-foreground">
                      Complete the course and earn a certificate to showcase your achievement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[300px] lg:min-h-0">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Learning journey"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
