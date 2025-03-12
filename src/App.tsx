import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award as Garden, Brain, Leaf, Music, MessageCircle } from 'lucide-react';
import Home from "./pages/Home";

// Định nghĩa kiểu cho FeatureCard props
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void; // Thêm sự kiện onClick
}

function App() {
  // Tạo refs cho từng section trong Home.tsx
  const sectionRefs = {
    virtualGarden: useRef<HTMLDivElement>(null),
    mindfulness: useRef<HTMLDivElement>(null),
    gardenFriend: useRef<HTMLDivElement>(null),
    soundTherapy: useRef<HTMLDivElement>(null),
  };

  // Hàm xử lý cuộn xuống khu vực tương ứng
  const scrollToSection = (section: keyof typeof sectionRefs) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-purple-50">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mountain"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Garden of Mind
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-8">
              Nurture your mental wellness in our digital sanctuary
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <FeatureCard
              icon={<Garden className="w-8 h-8" />}
              title="Virtual Garden"
              description="Watch your garden grow with your progress"
              onClick={() => scrollToSection("virtualGarden")}
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="Mindfulness"
              description="Practice meditation and breathing exercises"
              onClick={() => scrollToSection("mindfulness")}
            />
            <FeatureCard
              icon={<MessageCircle className="w-8 h-8" />}
              title="Garden Friend"
              description="Chat with your supportive AI companion"
              onClick={() => scrollToSection("gardenFriend")}
            />
            <FeatureCard
              icon={<Music className="w-8 h-8" />}
              title="Sound Therapy"
              description="Relax with nature's calming sounds"
              onClick={() => scrollToSection("soundTherapy")}
            />
          </motion.div>
        </div>
      </header>

      {/* Garden Visualization Placeholder */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Your Digital Sanctuary</h2>
            <p className="text-lg text-green-600">A space that grows and evolves with your journey</p>
          </div>
          
          <div className="h-96 bg-gradient-to-b from-green-100 to-purple-100 rounded-2xl shadow-xl flex items-center justify-center">
            <div className="text-center">
              <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <p className="text-green-700">Your garden visualization will bloom here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Section */}
      <div className="min-h-screen bg-gray-50">
        <Home sectionRefs={sectionRefs} />
      </div>
    </div>
  );
}

// FeatureCard Component với sự kiện click để cuộn
function FeatureCard({ icon, title, description, onClick }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg w-64 cursor-pointer"
      onClick={onClick} // Gọi hàm cuộn xuống khi click
    >
      <div className="text-green-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
      <p className="text-green-600">{description}</p>
    </motion.div>
  );
}

export default App;