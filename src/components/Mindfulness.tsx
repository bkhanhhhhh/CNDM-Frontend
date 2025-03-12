import { useState } from "react";

const breathingExercises = [
  "Breathe in... Hold... Breathe out...",
  "Take a deep breath... Slowly exhale...",
  "Inhale... Hold... Exhale slowly..."
];

const Mindfulness = () => {
  const [exercise, setExercise] = useState(0);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">Mindfulness</h2>
      <p className="text-gray-600">{breathingExercises[exercise]}</p>

      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
        onClick={() => setExercise((prev) => (prev + 1) % breathingExercises.length)}
      >
        Next Exercise
      </button>
    </div>
  );
};

export default Mindfulness;