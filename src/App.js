import ProfileIcon from "./profile_icon.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import SemiCircleProgressBar from "react-progressbar-semicircle";

import emg from "./emg.jpg";
import rom from "./rom.jpg";

function App() {

  let attributeStyle = "text-gray-400 font-bold";
  let valueStyle = "";

  return (
    <div>
      <div className="">
        <div className="py-3 flex flex-row items-center justify-start gap-2 border-b-2 border-b-gray-300">
          <span className="px-2 text-3xl">&#8592;</span>
          <span className="text-xl font-semibold">View Patient</span>
        </div>
        <div className="pb-3 py-6 px-3 border-b-2 border-b-gray-300">
          <div className="flex flex-row justify-between items-center mb-3">
            <div className="text-deepblue font-semibold">
              <div className="text-lg">S.Meena, F/23</div>
              <div className="text-sm">Patient ID: 87 20200727153457</div>
            </div>
            <img src={ProfileIcon} alt="" width={"55px"} />
          </div>
          <div className="bg-deepblue rounded-xl pt-2 pb-6 px-1 shadow-2xl text-white font-medium mb-5 flex flex-col items-center">
            <div className="mb-3">Goal Reached</div>
            <div className="flex flex-row gap-2 justify-center">
              <SemiCircleProgressBar percentage={40} stroke={"#FCB000"} diameter={150} showPercentValue />
              <div className="flex flex-col justify-between">
                <img src={emg} alt="" width={"60px"} className="rounded-md" />
                <img src={rom} alt="" width={"60px"} className="rounded-md" />
              </div>
            </div>
          </div>

          <div className="text-xs">
            <div className="grid grid-cols-7 mb-3">
              <div className={`col-span-3 ${attributeStyle}`}>Phone no</div>
              <div className={`col-span-4 ${valueStyle}`}>
                <FontAwesomeIcon icon={icon({ name: "phone" })} /> 8022334455
              </div>
            </div>

            <div className="grid grid-cols-7 mb-3">
              <div className={`col-span-3 ${attributeStyle}`}>Mail ID</div>
              <div className={`col-span-4 ${valueStyle}`}>
                <FontAwesomeIcon icon={icon({ name: "envelope" })} />{" "}
                meenarabinsachin2@gmail.com
              </div>
            </div>

            <div className="grid grid-cols-7 mb-3">
              <div className={`col-span-3 ${attributeStyle}`}>
                Affected Side
              </div>
              <div className={`col-span-4 ${valueStyle}`}>
                <FontAwesomeIcon icon={icon({ name: "lungs" })} /> Billateral
              </div>
            </div>

            <div className="grid grid-cols-7 mb-3">
              <div className={`col-span-3 ${attributeStyle}`}>Condition</div>
              <div className={`col-span-4 ${valueStyle}`}>
                <FontAwesomeIcon icon={icon({ name: "child" })} /> Ortho
              </div>
            </div>

            <div className="grid grid-cols-7 mb-3">
              <div className={`col-span-3 ${attributeStyle}`}>Speciality</div>
              <div className={`col-span-4 ${valueStyle}`}>
                <FontAwesomeIcon icon={icon({ name: "suitcase-medical" })} />{" "}
                Osteoarthritis
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 px-3 border-b-2 border-b-gray-300 text-xs">
          <div className="grid grid-cols-7">
            <div className="col-span-3 font-blue-800 font-bold">
              <FontAwesomeIcon icon={icon({ name: "file-pdf" })} /> Medical
              History
            </div>
            <div className="col-span-4">Hypertension, DM, Hypothyrodism</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
