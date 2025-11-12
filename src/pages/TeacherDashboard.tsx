import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Home,
  Users,
  BookOpen,
  Upload,
  CheckSquare,
  User,
  LogOut,
  TrendingUp,
  FileText,
} from "lucide-react";
import { toast } from "sonner";
import schoolBadge from "@/assets/school-badge.png";

const TeacherDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [uploadData, setUploadData] = useState({ title: "", description: "", dueDate: "" });

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home /> },
    { id: "classes", label: "My Classes", icon: <Users /> },
    { id: "assignments", label: "Assignments", icon: <BookOpen /> },
    { id: "upload", label: "Upload Assignment", icon: <Upload /> },
    { id: "attendance", label: "Attendance", icon: <CheckSquare /> },
    { id: "profile", label: "Profile", icon: <User /> },
  ];

  const myClasses = [
    { grade: "Grade 10", subject: "Mathematics", students: 45, section: "A" },
    { grade: "Grade 9", subject: "Mathematics", students: 42, section: "B" },
    { grade: "Grade 8", subject: "Mathematics", students: 48, section: "A" },
  ];

  const recentAssignments = [
    { class: "Grade 10-A", title: "Algebra Problems", submitted: 38, total: 45, dueDate: "Dec 20" },
    { class: "Grade 9-B", title: "Geometry Worksheet", submitted: 40, total: 42, dueDate: "Dec 22" },
    { class: "Grade 8-A", title: "Fractions Practice", submitted: 45, total: 48, dueDate: "Dec 25" },
  ];

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Assignment uploaded successfully!");
    setUploadData({ title: "", description: "", dueDate: "" });
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-primary-foreground fixed h-full overflow-y-auto shadow-lg">
        <div className="p-6 border-b border-primary-foreground/20">
          <div className="flex items-center space-x-3">
            <img src={schoolBadge} alt="Badge" className="w-12 h-12" />
            <div>
              <h2 className="font-bold text-lg">Teacher Portal</h2>
              <p className="text-xs text-accent">Nepal Police School</p>
            </div>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-primary-foreground/10"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-primary-foreground/20 absolute bottom-0 w-64 bg-primary">
          <Link to="/">
            <Button
              variant="outline"
              className="w-full text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="mb-8 animate-fadeUp">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome, Mr. Krishna KC!
          </h1>
          <p className="text-muted-foreground">Mathematics Teacher | Department Head</p>
        </div>

        {activeSection === "dashboard" && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "Total Classes",
                  value: "3",
                  icon: <Users />,
                  color: "bg-secondary",
                },
                {
                  title: "Total Students",
                  value: "135",
                  icon: <TrendingUp />,
                  color: "bg-accent",
                },
                {
                  title: "Assignments",
                  value: "12 Active",
                  icon: <FileText />,
                  color: "bg-primary",
                },
                {
                  title: "Pending Reviews",
                  value: "8",
                  icon: <CheckSquare />,
                  color: "bg-destructive",
                },
              ].map((stat, idx) => (
                <Card
                  key={idx}
                  className="hover-lift animate-fadeUp border-none shadow-lg"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center text-white`}
                      >
                        {stat.icon}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* My Classes */}
            <Card className="mb-8 animate-fadeUp border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>My Classes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {myClasses.map((cls, idx) => (
                    <div
                      key={idx}
                      className="p-6 border border-border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {cls.grade} - {cls.section}
                      </h3>
                      <p className="text-secondary font-semibold mb-3">{cls.subject}</p>
                      <p className="text-muted-foreground text-sm">
                        {cls.students} Students
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Assignments */}
            <Card className="animate-fadeUp border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Recent Assignments</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAssignments.map((assignment, idx) => (
                    <div
                      key={idx}
                      className="p-4 border border-border rounded-lg flex items-center justify-between"
                    >
                      <div>
                        <p className="font-semibold text-foreground mb-1">
                          {assignment.title}
                        </p>
                        <p className="text-sm text-muted-foreground">{assignment.class}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-secondary">
                          {assignment.submitted}/{assignment.total} Submitted
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Due: {assignment.dueDate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {activeSection === "upload" && (
          <Card className="animate-fadeUp border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>Upload New Assignment</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleUploadSubmit} className="space-y-6 max-w-2xl">
                <div>
                  <Label htmlFor="title">Assignment Title *</Label>
                  <Input
                    id="title"
                    required
                    value={uploadData.title}
                    onChange={(e) =>
                      setUploadData({ ...uploadData, title: e.target.value })
                    }
                    placeholder="e.g., Chapter 5 Algebra Problems"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    required
                    value={uploadData.description}
                    onChange={(e) =>
                      setUploadData({ ...uploadData, description: e.target.value })
                    }
                    rows={4}
                    placeholder="Provide details about the assignment..."
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="dueDate">Due Date *</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    required
                    value={uploadData.dueDate}
                    onChange={(e) =>
                      setUploadData({ ...uploadData, dueDate: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="file">Attachment (Optional)</Label>
                  <Input id="file" type="file" className="mt-2" />
                </div>

                <Button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Assignment
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {activeSection !== "dashboard" && activeSection !== "upload" && (
          <Card className="animate-fadeUp border-none shadow-lg">
            <CardContent className="p-12 text-center">
              <p className="text-2xl font-semibold text-foreground mb-4">
                {sidebarItems.find((item) => item.id === activeSection)?.label}
              </p>
              <p className="text-muted-foreground">
                This section is under development. Full functionality coming soon!
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default TeacherDashboard;
