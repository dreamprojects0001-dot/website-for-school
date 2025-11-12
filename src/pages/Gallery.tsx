import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import classroom from "@/assets/classroom.jpg";
import lab from "@/assets/lab.jpg";
import sports from "@/assets/sports.jpg";
import library from "@/assets/library.jpg";
import heroSchool from "@/assets/hero-school.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    { img: heroSchool, title: "School Campus", category: "campus" },
    { img: classroom, title: "Modern Classroom", category: "academics" },
    { img: lab, title: "Science Laboratory", category: "academics" },
    { img: sports, title: "Sports Ground", category: "sports" },
    { img: library, title: "Library", category: "facilities" },
    { img: heroSchool, title: "Main Building", category: "campus" },
    { img: classroom, title: "Interactive Learning", category: "academics" },
    { img: lab, title: "Student Experiments", category: "academics" },
    { img: sports, title: "Athletic Events", category: "sports" },
    { img: library, title: "Reading Hall", category: "facilities" },
    { img: heroSchool, title: "School Entrance", category: "campus" },
    { img: sports, title: "Basketball Court", category: "sports" },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
        <div className="text-center text-white animate-fadeUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-xl">Capturing Moments of Excellence</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 animate-fadeUp">
            {[
              { label: "All", value: "all" },
              { label: "Campus", value: "campus" },
              { label: "Academics", value: "academics" },
              { label: "Sports", value: "sports" },
              { label: "Facilities", value: "facilities" },
            ].map((btn) => (
              <Button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`${
                  filter === btn.value
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground"
                } hover:bg-accent hover:text-accent-foreground transition-all`}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg shadow-lg hover-scale animate-fadeUp group cursor-pointer"
                style={{ animationDelay: `${idx * 0.05}s` }}
                onClick={() => setSelectedImage(item.img)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-semibold p-6">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fadeUp">
            Event Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Sports Day 2024",
                desc: "Students showcasing their athletic talents in various sports competitions",
                date: "March 2024",
              },
              {
                title: "Science Exhibition",
                desc: "Innovative projects and experiments presented by budding scientists",
                date: "February 2024",
              },
              {
                title: "Cultural Program",
                desc: "Celebration of Nepali culture with traditional dances and music",
                date: "January 2024",
              },
            ].map((event, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover-lift animate-fadeUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={idx === 0 ? sports : idx === 1 ? lab : classroom}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-secondary text-sm font-semibold mb-2">
                    {event.date}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-accent animate-fadeUp">
            Recent Achievements
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              "1st Place in Inter-School Science Competition 2024",
              "National Football Championship - Runners Up",
              "Best School Award for Academic Excellence",
              "Outstanding Performance in National Level Debate",
              "Gold Medal in Mathematics Olympiad",
              "Best Eco-Friendly School Initiative Award",
            ].map((achievement, idx) => (
              <div
                key={idx}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 flex items-center space-x-4 hover-lift animate-fadeUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-lg">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
