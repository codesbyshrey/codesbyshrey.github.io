import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Brain, Activity, Zap } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Embodiment-Centric Design",
      subtitle: "Reclaiming the Body in the Age of Attention Extraction",
      type: "title",
      content: null
    },
    {
      title: "The War on Attention",
      type: "content",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      content: [
        { type: "text", text: "Two decades of design optimized relentlessly for engagement — variable rewards, push notifications, data-driven personalization." },
        { type: "text", text: "This war has fragmented not only mental focus but embodied coherence:" },
        { type: "indent", text: "Shallow breathing • Forward posture • Static movement • Sympathetic over-activation" },
        { type: "text", text: "Design ethics has focused on data privacy and dark patterns — but what about somatic consequences?" }
      ]
    },
    {
      title: "The Core Insight",
      type: "content",
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      content: [
        { type: "text", text: "If persuasive design shapes cognition and behavior, then it also modulates physiology." },
        { type: "quote", text: "If the interface is a behavioral prosthesis, it is also a nervous-system prosthesis." },
        { type: "text", text: "Ethical design must ask: What state of the body does this system cultivate?" },
        { type: "text", text: "Does it invite balance or vigilance? Presence or dissociation?" }
      ]
    },
    {
      title: "Introducing ECD",
      type: "content",
      icon: <Heart className="w-8 h-8 text-red-500" />,
      content: [
        { type: "heading", text: "Embodiment-Centric Design proposes:" },
        { type: "text", text: "Make autonomic regulation and interoceptive literacy explicit ethical objectives for humane design." },
        { type: "text", text: "Reframe human-computer interaction as human-autonomic interaction — design for balance rather than excitement." }
      ]
    },
    {
      title: "Literature Context",
      type: "content",
      icon: <Activity className="w-8 h-8 text-green-500" />,
      content: [
        { type: "text", text: "Recent work connects mindfulness, design ethics, and well-being:" },
        { type: "indent", text: "• Mindful design scaffolds moral awareness (Calvo & Peters, 2021; Andrahennadi, 2019)" },
        { type: "indent", text: "• Value-sensitive design integrates moral values from the start (Friedman & Hendry, 2019)" },
        { type: "indent", text: "• Reflective/slow design promotes pause and embodied awareness" },
        { type: "indent", text: "• Contemplative HCI nurtures mindfulness through interfaces" },
        { type: "text", text: "Gap: These literatures suggest ethical design must consider the felt sense of being alive — a dimension underdeveloped in mainstream design ethics." }
      ]
    },
    {
      title: "Navigation",
      type: "end"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {slide.type === "title" && (
          <div className="p-16 text-center bg-gradient-to-br from-blue-600 to-purple-700 text-white min-h-[600px] flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
            <p className="text-2xl opacity-90">{slide.subtitle}</p>
          </div>
        )}

        {slide.type === "content" && (
          <div className="p-12 min-h-[600px]">
            <div className="flex items-center gap-4 mb-8 border-b-2 border-blue-600 pb-4">
              {slide.icon}
              <h2 className="text-3xl font-bold text-slate-800">{slide.title}</h2>
            </div>
            <div className="space-y-4">
              {slide.content.map((item, idx) => (
                <div key={idx}>
                  {item.type === "text" && (
                    <p className="text-lg text-slate-700 leading-relaxed">{item.text}</p>
                  )}
                  {item.type === "quote" && (
                    <blockquote className="border-l-4 border-blue-600 pl-4 py-2 my-4 bg-blue-50 italic text-xl text-slate-800">
                      {item.text}
                    </blockquote>
                  )}
                  {item.type === "indent" && (
                    <p className="text-lg text-slate-600 ml-6">{item.text}</p>
                  )}
                  {item.type === "heading" && (
                    <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">{item.text}</h3>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {slide.type === "end" && (
          <div className="p-16 text-center bg-gradient-to-br from-slate-700 to-slate-900 text-white min-h-[600px] flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Use the slide outline provided</h2>
            <p className="text-xl opacity-90">This is a preview - build your full presentation in PowerPoint/Keynote</p>
          </div>
        )}

        <div className="bg-slate-100 p-6 flex items-center justify-between border-t">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          
          <span className="text-slate-600 font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;