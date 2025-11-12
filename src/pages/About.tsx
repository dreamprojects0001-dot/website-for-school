import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import heroSchool from "@/assets/hero-school.jpg";

const About = () => {
  const milestones = [
    { year: "2000", event: "School Established" },
    { year: "2005", event: "First Graduation Ceremony" },
    { year: "2010", event: "New Campus Expansion" },
    { year: "2015", event: "State-of-the-art Labs Opened" },
    { year: "2020", event: "Digital Learning Initiative" },
    { year: "2024", event: "Excellence Award Received" },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Our Heritage, Our Pride, Our Mission</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fadeUp">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Welcome to Nepal Police School
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nepal Police School is a premier educational institution that combines the best of academic excellence with the discipline and values of the Nepal Police. Established with a vision to nurture future leaders, we provide a holistic education that emphasizes character building, intellectual growth, and social responsibility.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our school stands as a beacon of quality education, where students are empowered to achieve their full potential in a safe, supportive, and stimulating environment. With a rich heritage and a forward-thinking approach, we prepare our students not just for exams, but for life.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-lift animate-fadeUp border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <Eye className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be a leading educational institution that produces well-rounded individuals equipped with knowledge, skills, values, and discipline to excel in a global society while remaining rooted in Nepali culture and traditions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift animate-fadeUp border-none shadow-lg" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide quality education that fosters academic excellence, builds character, promotes discipline, and develops responsible citizens who contribute positively to society and uphold the highest standards of integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fadeUp">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award />, title: "Excellence", desc: "Striving for the highest standards in all endeavors" },
              { icon: <Users />, title: "Integrity", desc: "Upholding honesty, ethics, and moral principles" },
              { icon: <Target />, title: "Discipline", desc: "Fostering self-control and responsibility" },
              { icon: <Eye />, title: "Innovation", desc: "Encouraging creativity and forward thinking" },
            ].map((value, idx) => (
              <Card key={idx} className="hover-lift animate-fadeUp border-none shadow-lg" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center text-secondary-foreground">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fadeUp text-accent">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30"></div>

              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`flex items-center mb-12 animate-fadeUp ${
                    idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={`w-1/2 ${idx % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <h3 className="text-3xl font-bold text-accent mb-2">{milestone.year}</h3>
                    <p className="text-lg text-primary-foreground/90">{milestone.event}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent border-4 border-primary z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg animate-fadeUp">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                  Principal's Message
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Dear Students, Parents, and Visitors,
                  </p>
                  <p>
                    It is with great pride and pleasure that I welcome you to Nepal Police School. Our institution stands as a testament to the power of education combined with discipline, values, and dedication.
                  </p>
                  <p>
                    At Nepal Police School, we believe that every child is unique and possesses immense potential. Our role is to nurture this potential through a comprehensive educational approach that balances academic rigor with character development, physical fitness, and creative expression.
                  </p>
                  <p>
                    We are committed to providing our students with the knowledge, skills, and values they need to become responsible citizens and future leaders. Together with our dedicated faculty, supportive parents, and motivated students, we continue to uphold the highest standards of excellence.
                  </p>
                  <p>
                    I invite you to explore our website and learn more about what makes Nepal Police School a special place for learning and growth.
                  </p>
                  <div className="mt-8">
                    <p className="font-bold text-foreground text-xl">Dr. Ram Prasad Sharma</p>
                    <p className="text-muted-foreground italic">Principal, Nepal Police School</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
