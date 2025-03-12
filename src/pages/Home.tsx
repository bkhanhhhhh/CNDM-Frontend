import VirtualGarden from "../components/VirtualGarden";
import Mindfulness from "../components/Mindfulness";
import GardenFriend from "../components/GardenFriend";
import SoundTherapy from "../components/SoundTherapy";

const Home = ({ sectionRefs }: { sectionRefs: any }) => {
  return (
    <div className="p-6 space-y-12">
      {/* Virtual Garden Section */}
      <div ref={sectionRefs.virtualGarden} id="virtualGarden" className="p-6 bg-white shadow-md rounded-lg">
        <VirtualGarden />
      </div>

      {/* Mindfulness Section */}
      <div ref={sectionRefs.mindfulness} id="mindfulness" className="p-6 bg-white shadow-md rounded-lg">
        <Mindfulness />
      </div>

      {/* Garden Friend Section */}
      <div ref={sectionRefs.gardenFriend} id="gardenFriend" className="p-6 bg-white shadow-md rounded-lg">
        <GardenFriend />
      </div>

      {/* Sound Therapy Section */}
      <div ref={sectionRefs.soundTherapy} id="soundTherapy" className="p-6 bg-white shadow-md rounded-lg">
        <SoundTherapy />
      </div>
    </div>
  );
};

export default Home;