import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap, Shield, Award } from "lucide-react";
import heroSchool from "@/assets/hero-school.jpg";
import classroom from "@/assets/classroom.jpg";
import lab from "@/assets/lab.jpg";
import sports from "@/assets/sports.jpg";
import library from "@/assets/library.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 40, 85, 0.7), rgba(30, 144, 255, 0.6)), url(${heroSchool})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center z-10 animate-fadeUp">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Nepal Police School
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Building Tomorrow's Leaders Through Discipline, Excellence, and Innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 font-semibold hover-scale">
                Apply Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 font-semibold">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Badge Animation */}
        <div className="absolute bottom-10 right-10 animate-float hidden md:block">
          <Shield className="w-24 h-24 text-accent opacity-30" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Nepal Police School?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A unique blend of academic excellence and disciplinary values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-12 h-12 text-secondary" />,
                title: "Academic Excellence",
                desc: "Comprehensive curriculum with focus on holistic development",
              },
              {
                icon: <Shield className="w-12 h-12 text-secondary" />,
                title: "Discipline & Character",
                desc: "Building strong moral values and disciplined citizens",
              },
              {
                icon: <Users className="w-12 h-12 text-secondary" />,
                title: "Experienced Faculty",
                desc: "Highly qualified teachers dedicated to student success",
              },
              {
                icon: <BookOpen className="w-12 h-12 text-secondary" />,
                title: "Modern Facilities",
                desc: "State-of-the-art classrooms, labs, and learning resources",
              },
              {
                icon: <Trophy className="w-12 h-12 text-secondary" />,
                title: "Sports & Activities",
                desc: "Extensive extracurricular programs for all-round growth",
              },
              {
                icon: <Award className="w-12 h-12 text-secondary" />,
                title: "Proven Track Record",
                desc: "Consistently excellent academic and character outcomes",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="hover-lift card-3d animate-fadeUp border-none shadow-lg"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Campus Life
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our world-class facilities and vibrant community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: classroom, title: "Modern Classrooms" },
              { img: lab, title: "Science Labs" },
              { img: sports, title: "Sports Facilities" },
              { img: library, title: "Library" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg shadow-lg hover-scale animate-fadeUp group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-semibold p-6">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 font-semibold">
                View Full Gallery <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "1000+", label: "Students" },
              { num: "50+", label: "Expert Teachers" },
              { num: "20+", label: "Years of Excellence" },
              { num: "95%", label: "Success Rate" },
            ].map((stat, idx) => (
              <div key={idx} className="animate-scaleIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.num}
                </h3>
                <p className="text-lg text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center animate-fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards excellence. Apply now and become part of our prestigious institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 font-semibold">
                Start Your Application
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-lg px-8 py-6 font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
