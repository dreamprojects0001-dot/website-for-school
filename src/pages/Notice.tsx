import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, AlertCircle, Bell, FileText } from "lucide-react";

const Notice = () => {
  const notices = [
    {
      id: 1,
      title: "Admission Open for Academic Year 2025-2026",
      date: "December 15, 2024",
      category: "Admission",
      priority: "high",
      content:
        "Applications are now open for all grades. Please visit the admissions page or contact the office for more information. Last date to apply: March 31, 2025.",
    },
    {
      id: 2,
      title: "Winter Holiday Notice",
      date: "December 10, 2024",
      category: "Holiday",
      priority: "medium",
      content:
        "The school will remain closed from December 24, 2024 to January 5, 2025 for winter holidays. Classes will resume on January 6, 2025.",
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting Scheduled",
      date: "December 5, 2024",
      category: "Event",
      priority: "high",
      content:
        "Parent-teacher meeting for all grades will be held on December 20, 2024 from 10:00 AM to 4:00 PM. Parents are requested to attend.",
    },
    {
      id: 4,
      title: "Annual Sports Day 2025",
      date: "November 28, 2024",
      category: "Event",
      priority: "medium",
      content:
        "Annual Sports Day will be celebrated on January 15, 2025. Students are encouraged to participate in various sports activities. Registration starts from December 1.",
    },
    {
      id: 5,
      title: "Mid-Term Examination Schedule",
      date: "November 20, 2024",
      category: "Examination",
      priority: "high",
      content:
        "Mid-term examinations for all grades will be conducted from January 20-30, 2025. Detailed schedule will be shared with students next week.",
    },
    {
      id: 6,
      title: "Science Exhibition 2025",
      date: "November 15, 2024",
      category: "Event",
      priority: "medium",
      content:
        "Inter-school science exhibition will be held on February 10, 2025. Students interested in participating should contact the science department by December 15.",
    },
    {
      id: 7,
      title: "Fee Payment Reminder",
      date: "November 10, 2024",
      category: "Payment",
      priority: "high",
      content:
        "Parents are reminded to clear pending fees by December 31, 2024. Late payment will incur additional charges. Contact accounts section for queries.",
    },
    {
      id: 8,
      title: "New Library Books Available",
      date: "November 5, 2024",
      category: "Announcement",
      priority: "low",
      content:
        "The library has added 500+ new books across various genres. Students can visit the library during break hours to explore the new collection.",
    },
    {
      id: 9,
      title: "Digital Learning Platform Launch",
      date: "October 28, 2024",
      category: "Technology",
      priority: "medium",
      content:
        "New digital learning platform launched for students. Login credentials will be shared via email. Parents can monitor student progress through the portal.",
    },
    {
      id: 10,
      title: "School Uniform Guidelines",
      date: "October 20, 2024",
      category: "Announcement",
      priority: "low",
      content:
        "Students must wear proper school uniform as per the guidelines. Casual attire is not permitted on regular school days except on designated casual Fridays.",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive text-destructive-foreground";
      case "medium":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Admission":
        return <Bell className="w-5 h-5" />;
      case "Examination":
        return <FileText className="w-5 h-5" />;
      case "Event":
        return <Calendar className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
        <div className="text-center text-white animate-fadeUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Notice Board</h1>
          <p className="text-xl">Stay Updated with Latest Announcements</p>
        </div>
      </section>

      {/* Important Notice Banner */}
      <section className="py-8 bg-accent/10 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 animate-fadeUp">
            <AlertCircle className="w-6 h-6 text-accent" />
            <p className="text-lg font-semibold text-foreground">
              Important: Admission Open for Academic Year 2025-2026 - Apply Now!
            </p>
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {notices.map((notice, idx) => (
              <Card
                key={notice.id}
                className="hover-lift animate-fadeUp border-none shadow-lg"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-start space-x-3 mb-3 md:mb-0">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground flex-shrink-0">
                        {getCategoryIcon(notice.category)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {notice.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {notice.date}
                          </Badge>
                          <Badge className={`text-xs ${getPriorityColor(notice.priority)}`}>
                            {notice.category}
                          </Badge>
                          {notice.priority === "high" && (
                            <Badge className="text-xs bg-destructive text-destructive-foreground">
                              Important
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-0 md:pl-13">
                    {notice.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-accent animate-fadeUp">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Academic Calendar", desc: "View full year schedule" },
              { title: "Exam Schedule", desc: "Check upcoming exams" },
              { title: "Fee Structure", desc: "View payment details" },
              { title: "Contact Office", desc: "Get in touch with us" },
            ].map((link, idx) => (
              <Card
                key={idx}
                className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover-lift animate-fadeUp cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-accent mb-2">
                    {link.title}
                  </h3>
                  <p className="text-primary-foreground/80">{link.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Notice;
