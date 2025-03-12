const sounds = [
    { name: "Rain", file: "/sounds/rain.mp3" },
    { name: "Ocean", file: "/sounds/ocean.mp3" },
    { name: "Forest", file: "/sounds/forest.mp3" }
  ];
  
  const SoundTherapy = () => {
    const playSound = (file: string) => {
      new Audio(file).play();
    };
  
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Sound Therapy</h2>
        <p className="text-gray-600">Relax with nature's calming sounds.</p>
  
        <div className="mt-4">
          {sounds.map((sound) => (
            <button 
              key={sound.name}
              className="m-2 px-4 py-2 bg-purple-500 text-white rounded-lg"
              onClick={() => playSound(sound.file)}
            >
              {sound.name}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default SoundTherapy;