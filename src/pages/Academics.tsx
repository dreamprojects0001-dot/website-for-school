import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Beaker, Calculator, Globe, Music, Palette, Users, Trophy } from "lucide-react";
import classroom from "@/assets/classroom.jpg";

const Academics = () => {
  const subjects = [
    { icon: <BookOpen />, name: "English", desc: "Language and Literature" },
    { icon: <Calculator />, name: "Mathematics", desc: "Advanced Problem Solving" },
    { icon: <Beaker />, name: "Science", desc: "Physics, Chemistry, Biology" },
    { icon: <Globe />, name: "Social Studies", desc: "History, Geography, Civics" },
    { icon: <Users />, name: "Nepali", desc: "Language and Literature" },
    { icon: <Calculator />, name: "Computer Science", desc: "Programming & Technology" },
  ];

  const extracurricular = [
    { icon: <Trophy />, name: "Sports", activities: ["Football", "Basketball", "Athletics", "Volleyball"] },
    { icon: <Music />, name: "Music", activities: ["Vocal", "Instrumental", "Choir", "Band"] },
    { icon: <Palette />, name: "Arts", activities: ["Painting", "Drawing", "Sculpture", "Craft"] },
    { icon: <Users />, name: "Clubs", activities: ["Debate", "Science Club", "Literary Club", "Eco Club"] },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 40, 85, 0.8), rgba(30, 144, 255, 0.7)), url(${classroom})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center text-white animate-fadeUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Academics</h1>
          <p className="text-xl">Excellence Through Comprehensive Education</p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeUp">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Curriculum</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nepal Police School follows the national curriculum with enhanced focus on discipline, character building, and holistic development. Our academic programs are designed to challenge students intellectually while nurturing their social, emotional, and physical growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, idx) => (
              <Card key={idx} className="hover-lift card-3d animate-fadeUp border-none shadow-lg" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center text-secondary-foreground">
                    {subject.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{subject.name}</h3>
                  <p className="text-muted-foreground">{subject.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Structure */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fadeUp">
            Grade Structure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { level: "Primary Level", grades: "Grades 1-5", focus: "Foundation building, basic concepts, play-based learning" },
              { level: "Lower Secondary", grades: "Grades 6-8", focus: "Subject specialization, critical thinking, practical learning" },
              { level: "Secondary Level", grades: "Grades 9-10", focus: "Advanced concepts, exam preparation, career guidance" },
            ].map((level, idx) => (
              <Card key={idx} className="hover-lift animate-fadeUp border-none shadow-lg" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{level.level}</h3>
                  <p className="text-xl text-secondary font-semibold mb-4">{level.grades}</p>
                  <p className="text-muted-foreground">{level.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeUp">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Extracurricular Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond academics, we offer a wide range of activities to develop talents, interests, and life skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extracurricular.map((activity, idx) => (
              <Card key={idx} className="hover-lift animate-fadeUp border-none shadow-lg" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-accent mb-4 flex items-center justify-center text-accent-foreground">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{activity.name}</h3>
                  <ul className="space-y-1">
                    {activity.activities.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-accent animate-fadeUp">
            Academic Excellence Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Qualified Teachers",
                desc: "Experienced educators with advanced degrees and teaching certifications",
              },
              {
                title: "Modern Labs",
                desc: "Well-equipped science, computer, and language labs for practical learning",
              },
              {
                title: "Smart Classrooms",
                desc: "Interactive boards and digital learning tools in every classroom",
              },
              {
                title: "Library Resources",
                desc: "Extensive collection of books, journals, and digital resources",
              },
              {
                title: "Regular Assessments",
                desc: "Continuous evaluation and feedback for student improvement",
              },
              {
                title: "Parent Communication",
                desc: "Regular updates and parent-teacher meetings for student progress",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover-lift animate-fadeUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-accent mb-2">{feature.title}</h3>
                  <p className="text-primary-foreground/80">{feature.desc}</p>
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

export default Academics;
