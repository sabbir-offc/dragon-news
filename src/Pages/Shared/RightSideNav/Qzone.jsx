import Qzone1 from "/public/assets/qZone1.png";
import Qzone2 from "/public/assets/qZone2.png";
import Qzone3 from "/public/assets/qZone3.png";
const Qzone = () => {
  return (
    <div className="p-4 space-y-5 mb-8">
      <h2 className="text-xl font-semibold">QZone</h2>
      <img src={Qzone1} alt="Qzone1" />
      <img src={Qzone2} alt="Qzone1" />
      <img src={Qzone3} alt="Qzone1" />
    </div>
  );
};

export default Qzone;
