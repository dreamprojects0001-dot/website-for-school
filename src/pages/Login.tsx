import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { GraduationCap, Users } from "lucide-react";
import schoolBadge from "@/assets/school-badge.png";

const Login = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({ username: "", password: "" });
  const [teacherData, setTeacherData] = useState({ username: "", password: "" });

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy validation
    if (studentData.username && studentData.password) {
      toast.success("Student login successful!");
      navigate("/student-dashboard");
    } else {
      toast.error("Please enter valid credentials");
    }
  };

  const handleTeacherLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy validation
    if (teacherData.username && teacherData.password) {
      toast.success("Teacher login successful!");
      navigate("/teacher-dashboard");
    } else {
      toast.error("Please enter valid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent p-4 relative overflow-hidden">
      {/* Animated 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <Card className="w-full max-w-md relative z-10 border-none shadow-2xl animate-scaleIn">
        <CardContent className="p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <img
              src={schoolBadge}
              alt="School Badge"
              className="w-24 h-24 mx-auto mb-4 animate-rotateSlow"
            />
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Nepal Police School
            </h1>
            <p className="text-muted-foreground">Login to Your Account</p>
          </div>

          {/* Login Tabs */}
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="student" className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4" />
                <span>Student</span>
              </TabsTrigger>
              <TabsTrigger value="teacher" className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Teacher</span>
              </TabsTrigger>
            </TabsList>

            {/* Student Login */}
            <TabsContent value="student">
              <form onSubmit={handleStudentLogin} className="space-y-4">
                <div>
                  <Label htmlFor="student-username">Username</Label>
                  <Input
                    id="student-username"
                    type="text"
                    required
                    value={studentData.username}
                    onChange={(e) =>
                      setStudentData({ ...studentData, username: e.target.value })
                    }
                    placeholder="Enter your username"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="student-password">Password</Label>
                  <Input
                    id="student-password"
                    type="password"
                    required
                    value={studentData.password}
                    onChange={(e) =>
                      setStudentData({ ...studentData, password: e.target.value })
                    }
                    placeholder="Enter your password"
                    className="mt-2"
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <a href="#" className="text-secondary hover:text-secondary/80">
                    Forgot Password?
                  </a>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6"
                >
                  Login as Student
                </Button>
              </form>
            </TabsContent>

            {/* Teacher Login */}
            <TabsContent value="teacher">
              <form onSubmit={handleTeacherLogin} className="space-y-4">
                <div>
                  <Label htmlFor="teacher-username">Username</Label>
                  <Input
                    id="teacher-username"
                    type="text"
                    required
                    value={teacherData.username}
                    onChange={(e) =>
                      setTeacherData({ ...teacherData, username: e.target.value })
                    }
                    placeholder="Enter your username"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="teacher-password">Password</Label>
                  <Input
                    id="teacher-password"
                    type="password"
                    required
                    value={teacherData.password}
                    onChange={(e) =>
                      setTeacherData({ ...teacherData, password: e.target.value })
                    }
                    placeholder="Enter your password"
                    className="mt-2"
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <a href="#" className="text-secondary hover:text-secondary/80">
                    Forgot Password?
                  </a>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6"
                >
                  Login as Teacher
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground">
              ← Back to Home
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
