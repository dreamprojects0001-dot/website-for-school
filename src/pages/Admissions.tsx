import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, FileText, Calendar, Users } from "lucide-react";
import { toast } from "sonner";
import heroSchool from "@/assets/hero-school.jpg";

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    grade: "",
    parentName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We will contact you soon.");
    setFormData({
      studentName: "",
      grade: "",
      parentName: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  const admissionSteps = [
    {
      icon: <FileText />,
      title: "Submit Application",
      desc: "Fill out the online application form with required documents",
    },
    {
      icon: <Calendar />,
      title: "Entrance Test",
      desc: "Attend the entrance examination on the scheduled date",
    },
    {
      icon: <Users />,
      title: "Interview",
      desc: "Parent and student interview with school administration",
    },
    {
      icon: <CheckCircle />,
      title: "Admission Confirmation",
      desc: "Receive admission letter and complete enrollment process",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 40, 85, 0.8), rgba(30, 144, 255, 0.7)), url(${heroSchool})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center text-white animate-fadeUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Admissions</h1>
          <p className="text-xl">Join Our Community of Excellence</p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeUp">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to become part of our prestigious institution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, idx) => (
              <Card key={idx} className="hover-lift animate-fadeUp border-none shadow-lg" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center text-secondary-foreground">
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">{idx + 1}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fadeUp">
            Important Dates
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-lg animate-fadeUp">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {[
                    { event: "Application Opens", date: "January 1, 2025" },
                    { event: "Application Deadline", date: "March 31, 2025" },
                    { event: "Entrance Test", date: "April 15, 2025" },
                    { event: "Results Announcement", date: "April 30, 2025" },
                    { event: "Admission Confirmation", date: "May 1-15, 2025" },
                    { event: "Academic Year Begins", date: "June 1, 2025" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <span className="font-semibold text-foreground">{item.event}</span>
                      <span className="text-secondary font-bold">{item.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeUp">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Online Application Form
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to start your admission process
            </p>
          </div>

          <Card className="max-w-3xl mx-auto border-none shadow-lg animate-fadeUp">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="studentName">Student Name *</Label>
                    <Input
                      id="studentName"
                      required
                      value={formData.studentName}
                      onChange={(e) =>
                        setFormData({ ...formData, studentName: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="grade">Grade Applying For *</Label>
                    <Select
                      value={formData.grade}
                      onValueChange={(value) =>
                        setFormData({ ...formData, grade: value })
                      }
                      required
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => (
                          <SelectItem key={i + 1} value={`grade-${i + 1}`}>
                            Grade {i + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input
                      id="parentName"
                      required
                      value={formData.parentName}
                      onChange={(e) =>
                        setFormData({ ...formData, parentName: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-2"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 font-semibold"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-accent animate-fadeUp">
            Admission Requirements
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 animate-fadeUp">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    "Completed application form with recent photograph",
                    "Birth certificate (original and copy)",
                    "Previous school transcript/report card",
                    "Character certificate from previous school",
                    "Medical fitness certificate",
                    "Parent/Guardian ID proof (copy)",
                    "Entrance test fee payment receipt",
                  ].map((req, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
