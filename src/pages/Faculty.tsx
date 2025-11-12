import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Ram Prasad Sharma",
      role: "Principal",
      qualification: "Ph.D. in Education",
      subject: "Administration",
      experience: "25 years",
    },
    {
      name: "Mrs. Sita Devi Thapa",
      role: "Vice Principal",
      qualification: "M.Ed. in Curriculum Development",
      subject: "Educational Leadership",
      experience: "20 years",
    },
    {
      name: "Mr. Bikram Singh Rana",
      role: "Head Teacher - Science",
      qualification: "M.Sc. in Physics",
      subject: "Physics, Mathematics",
      experience: "18 years",
    },
    {
      name: "Mrs. Kamala Sharma",
      role: "Senior Teacher",
      qualification: "M.A. in English",
      subject: "English Literature",
      experience: "15 years",
    },
    {
      name: "Mr. Krishna Bahadur KC",
      role: "Senior Teacher",
      qualification: "M.Sc. in Mathematics",
      subject: "Mathematics",
      experience: "16 years",
    },
    {
      name: "Mrs. Gita Rai",
      role: "Teacher",
      qualification: "M.A. in Nepali",
      subject: "Nepali Language",
      experience: "12 years",
    },
    {
      name: "Mr. Rajesh Gurung",
      role: "Teacher",
      qualification: "M.Sc. in Chemistry",
      subject: "Chemistry",
      experience: "10 years",
    },
    {
      name: "Mrs. Maya Tamang",
      role: "Teacher",
      qualification: "M.Sc. in Biology",
      subject: "Biology",
      experience: "11 years",
    },
    {
      name: "Mr. Sunil Adhikari",
      role: "Teacher",
      qualification: "M.A. in Social Studies",
      subject: "History, Geography",
      experience: "9 years",
    },
    {
      name: "Mrs. Anita Shrestha",
      role: "Teacher",
      qualification: "B.Ed. in Computer Science",
      subject: "Computer Science",
      experience: "8 years",
    },
    {
      name: "Mr. Dipak Karki",
      role: "Physical Education",
      qualification: "M.P.Ed.",
      subject: "Sports & Fitness",
      experience: "10 years",
    },
    {
      name: "Mrs. Puja Basnet",
      role: "Teacher",
      qualification: "M.A. in Fine Arts",
      subject: "Arts & Crafts",
      experience: "7 years",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
        <div className="text-center text-white animate-fadeUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Faculty</h1>
          <p className="text-xl">Dedicated Educators Shaping Tomorrow's Leaders</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fadeUp">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Excellence in Teaching
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our faculty comprises highly qualified, experienced, and dedicated educators who are passionate about nurturing young minds. Each teacher brings a wealth of knowledge, pedagogical expertise, and a commitment to student success. They create an engaging learning environment that fosters curiosity, critical thinking, and character development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
            {[
              {
                icon: <GraduationCap />,
                title: "Qualified Educators",
                desc: "Advanced degrees and teaching certifications",
              },
              {
                icon: <Award />,
                title: "Experienced Professionals",
                desc: "Years of dedicated teaching experience",
              },
              {
                icon: <BookOpen />,
                title: "Continuous Learning",
                desc: "Regular professional development and training",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="hover-lift animate-fadeUp border-none shadow-lg" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center text-secondary-foreground">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fadeUp">
            Meet Our Teachers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facultyMembers.map((member, idx) => (
              <Card
                key={idx}
                className="hover-lift card-3d animate-fadeUp border-none shadow-lg group"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="text-lg font-bold text-center text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-center text-secondary font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">Qualification:</span> {member.qualification}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Subject:</span> {member.subject}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Experience:</span> {member.experience}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Commitment */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fadeUp">
            <h2 className="text-4xl font-bold text-center mb-8 text-accent">
              Our Commitment to Excellence
            </h2>
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="p-8">
                <p className="text-lg text-primary-foreground leading-relaxed mb-6">
                  At Nepal Police School, our teachers are more than just educators—they are mentors, role models, and guides. Each member of our faculty is committed to:
                </p>
                <ul className="space-y-4">
                  {[
                    "Fostering a love for learning and intellectual curiosity",
                    "Creating an inclusive and supportive classroom environment",
                    "Using innovative teaching methods and modern technology",
                    "Providing individualized attention to each student",
                    "Promoting discipline, ethics, and strong character",
                    "Collaborating with parents for student success",
                    "Continuously improving through professional development",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
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

export default Faculty;
