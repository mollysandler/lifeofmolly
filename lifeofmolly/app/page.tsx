import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import PhotosSection from "@/components/PhotoSection";
import ProjectsSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HomeSection />
      <AboutSection />
      <PhotosSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
