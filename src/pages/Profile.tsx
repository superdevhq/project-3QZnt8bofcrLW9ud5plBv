
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { User, Mail, BookOpen, Award, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const Profile = () => {
  const { user, profile, signOut, refreshProfile } = useAuth();
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [completedCourses, setCompletedCourses] = useState<any[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || "");
      setBio(profile.bio || "");
    }
  }, [profile]);

  useEffect(() => {
    if (user) {
      fetchEnrolledCourses();
    }
  }, [user]);

  const fetchEnrolledCourses = async () => {
    try {
      const { data: enrollments, error } = await supabase
        .from("enrollments")
        .select(`
          *,
          course:courses(
            id,
            title,
            slug,
            thumbnail_url,
            category_id,
            level,
            instructor_id,
            categories:categories(name)
          )
        `)
        .eq("user_id", user?.id);

      if (error) {
        console.error("Error fetching enrollments:", error);
        return;
      }

      const enrolled = enrollments.filter(e => !e.is_completed);
      const completed = enrollments.filter(e => e.is_completed);
      
      setEnrolledCourses(enrolled);
      setCompletedCourses(completed);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    }
  };

  const handleUpdateProfile = async () => {
    if (!user) return;
    
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: fullName,
          bio,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      if (error) {
        toast({
          title: "Update failed",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      await refreshProfile();
      
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <ProtectedRoute>
      <Navbar />
      <main className="min-h-screen bg-background py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm sticky top-24">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">{profile?.full_name || "User"}</h2>
                  <p className="text-muted-foreground">{user?.email}</p>
                </div>
                
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="#profile">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="#courses">
                      <BookOpen className="mr-2 h-4 w-4" />
                      My Courses
                    </a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="#certificates">
                      <Award className="mr-2 h-4 w-4" />
                      Certificates
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-destructive hover:text-destructive"
                    onClick={handleSignOut}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div id="profile" className="bg-card border border-border rounded-lg p-6 shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="email"
                        type="email"
                        value={user?.email || ""}
                        className="pl-10"
                        disabled
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your email address cannot be changed
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="pl-10"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium mb-1">
                      Bio
                    </label>
                    <Textarea
                      id="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Tell us about yourself"
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    onClick={handleUpdateProfile} 
                    disabled={isLoading}
                  >
                    {isLoading ? "Updating..." : "Update Profile"}
                  </Button>
                </div>
              </div>
              
              <div id="courses" className="bg-card border border-border rounded-lg p-6 shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6">My Courses</h2>
                
                <Tabs defaultValue="enrolled">
                  <TabsList className="mb-6">
                    <TabsTrigger value="enrolled">Enrolled Courses</TabsTrigger>
                    <TabsTrigger value="completed">Completed Courses</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="enrolled">
                    {enrolledCourses.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {enrolledCourses.map((enrollment) => (
                          <div 
                            key={enrollment.id} 
                            className="border border-border rounded-lg overflow-hidden flex"
                          >
                            <div className="w-1/3">
                              <img 
                                src={enrollment.course.thumbnail_url || "https://via.placeholder.com/150"} 
                                alt={enrollment.course.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-2/3 p-4">
                              <h3 className="font-semibold mb-1 line-clamp-1">{enrollment.course.title}</h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {enrollment.course.categories?.name || "Uncategorized"} • {enrollment.course.level}
                              </p>
                              <div className="w-full bg-muted rounded-full h-2 mb-2">
                                <div 
                                  className="bg-primary h-2 rounded-full" 
                                  style={{ width: `${enrollment.progress}%` }}
                                ></div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">{enrollment.progress}% complete</span>
                                <Button size="sm" asChild>
                                  <a href={`/courses/${enrollment.course.slug}`}>Continue</a>
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No enrolled courses</h3>
                        <p className="text-muted-foreground mb-4">
                          You haven't enrolled in any courses yet.
                        </p>
                        <Button asChild>
                          <a href="/courses">Browse Courses</a>
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="completed">
                    {completedCourses.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {completedCourses.map((enrollment) => (
                          <div 
                            key={enrollment.id} 
                            className="border border-border rounded-lg overflow-hidden flex"
                          >
                            <div className="w-1/3">
                              <img 
                                src={enrollment.course.thumbnail_url || "https://via.placeholder.com/150"} 
                                alt={enrollment.course.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="w-2/3 p-4">
                              <h3 className="font-semibold mb-1 line-clamp-1">{enrollment.course.title}</h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {enrollment.course.categories?.name || "Uncategorized"} • {enrollment.course.level}
                              </p>
                              <div className="w-full bg-muted rounded-full h-2 mb-2">
                                <div className="bg-primary h-2 rounded-full w-full"></div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm">Completed</span>
                                <Button size="sm" variant="outline" asChild>
                                  <a href={`/courses/${enrollment.course.slug}`}>Review</a>
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">No completed courses</h3>
                        <p className="text-muted-foreground">
                          You haven't completed any courses yet.
                        </p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
              
              <div id="certificates" className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">My Certificates</h2>
                
                {completedCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {completedCourses.map((enrollment) => (
                      <div 
                        key={enrollment.id} 
                        className="border border-border rounded-lg p-4"
                      >
                        <div className="flex items-center mb-4">
                          <Award className="h-8 w-8 text-primary mr-3" />
                          <div>
                            <h3 className="font-semibold">{enrollment.course.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Completed on {new Date(enrollment.updated_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full">
                          View Certificate
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No certificates yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Complete a course to earn your first certificate.
                    </p>
                    <Button asChild>
                      <a href="/courses">Browse Courses</a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </ProtectedRoute>
  );
};

export default Profile;
