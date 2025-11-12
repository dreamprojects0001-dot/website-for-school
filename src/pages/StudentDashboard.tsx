import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Home,
  Calendar,
  BookOpen,
  Award,
  Bell,
  User,
  LogOut,
  Clock,
  TrendingUp,
  FileText,
} from "lucide-react";
import schoolBadge from "@/assets/school-badge.png";

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home /> },
    { id: "timetable", label: "Timetable", icon: <Calendar /> },
    { id: "assignments", label: "Assignments", icon: <BookOpen /> },
    { id: "grades", label: "Grades", icon: <Award /> },
    { id: "notices", label: "Notices", icon: <Bell /> },
    { id: "profile", label: "Profile", icon: <User /> },
  ];

  const todayClasses = [
    { time: "08:00 - 09:00", subject: "Mathematics", teacher: "Mr. KC", room: "Room 101" },
    { time: "09:00 - 10:00", subject: "English", teacher: "Mrs. Sharma", room: "Room 102" },
    { time: "10:00 - 11:00", subject: "Science", teacher: "Mr. Gurung", room: "Lab 1" },
    { time: "11:00 - 12:00", subject: "Social Studies", teacher: "Mr. Adhikari", room: "Room 103" },
  ];

  const upcomingAssignments = [
    { subject: "Mathematics", title: "Chapter 5 Exercises", due: "Dec 20, 2024", status: "Pending" },
    { subject: "Science", title: "Lab Report - Physics", due: "Dec 22, 2024", status: "Pending" },
    { subject: "English", title: "Essay Writing", due: "Dec 25, 2024", status: "In Progress" },
  ];

  const recentGrades = [
    { subject: "Mathematics", score: 95, grade: "A+", date: "Dec 10, 2024" },
    { subject: "English", score: 88, grade: "A", date: "Dec 8, 2024" },
    { subject: "Science", score: 92, grade: "A+", date: "Dec 5, 2024" },
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-primary-foreground fixed h-full overflow-y-auto shadow-lg">
        <div className="p-6 border-b border-primary-foreground/20">
          <div className="flex items-center space-x-3">
            <img src={schoolBadge} alt="Badge" className="w-12 h-12" />
            <div>
              <h2 className="font-bold text-lg">Student Portal</h2>
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
                      ? "bg-secondary text-secondary-foreground"
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back, Aayush!</h1>
          <p className="text-muted-foreground">Grade 10 | Roll No: 2024-105</p>
        </div>

        {activeSection === "dashboard" && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  title: "Attendance",
                  value: "92%",
                  icon: <TrendingUp />,
                  color: "bg-secondary",
                },
                {
                  title: "Avg. Grade",
                  value: "A",
                  icon: <Award />,
                  color: "bg-accent",
                },
                {
                  title: "Assignments",
                  value: "3 Pending",
                  icon: <FileText />,
                  color: "bg-destructive",
                },
                {
                  title: "Next Class",
                  value: "08:00 AM",
                  icon: <Clock />,
                  color: "bg-primary",
                },
              ].map((stat, idx) => (
                <Card
                  key={idx}
                  className="hover-lift animate-fadeUp border-none shadow-lg"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center text-white`}>
                        {stat.icon}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Today's Timetable */}
            <Card className="mb-8 animate-fadeUp border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Today's Classes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayClasses.map((cls, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <Clock className="w-5 h-5 text-secondary mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground font-medium">
                            {cls.time}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{cls.subject}</p>
                          <p className="text-sm text-muted-foreground">
                            {cls.teacher} • {cls.room}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upcoming Assignments */}
              <Card className="animate-fadeUp border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Upcoming Assignments</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingAssignments.map((assignment, idx) => (
                      <div key={idx} className="p-4 border border-border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold text-foreground">
                              {assignment.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {assignment.subject}
                            </p>
                          </div>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              assignment.status === "Pending"
                                ? "bg-destructive/20 text-destructive"
                                : "bg-accent/20 text-accent"
                            }`}
                          >
                            {assignment.status}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">Due: {assignment.due}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Grades */}
              <Card className="animate-fadeUp border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>Recent Grades</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentGrades.map((grade, idx) => (
                      <div key={idx} className="p-4 border border-border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <p className="font-semibold text-foreground">{grade.subject}</p>
                          <span className="text-2xl font-bold text-secondary">
                            {grade.grade}
                          </span>
                        </div>
                        <div className="mb-2">
                          <Progress value={grade.score} className="h-2" />
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{grade.score}/100</span>
                          <span>{grade.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {activeSection !== "dashboard" && (
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

export default StudentDashboard;
