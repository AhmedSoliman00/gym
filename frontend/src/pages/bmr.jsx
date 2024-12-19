import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Bmr = () => {
  const [gender, setGender] = useState("male");
  const [train, setTrain] = useState("sedentary");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMR, setBMR] = useState(null);
  const [TDEE, setTDEE] = useState(null);
  const [insights, setInsights] = useState("");

  const checkGender = (gender, age, height, weight) => {
    let calculatedBMR = 0;
    if (gender === "male") {
      calculatedBMR = 10 * +weight + 6.25 * +height - 5 * +age + 5;
    } else if (gender === "female") {
      calculatedBMR = 10 * +weight + 6.25 * +height - 5 * +age - 161;
    }
    return calculatedBMR;
  };

  const checkTrain = (train, BMR) => {
    let multiplier = 1.2;
    switch (train) {
      case "sedentary":
        multiplier = 1.2;
        break;
      case "lightlyActive":
        multiplier = 1.375;
        break;
      case "moderatelyActive":
        multiplier = 1.55;
        break;
      case "veryActive":
        multiplier = 1.725;
        break;
      case "superActive":
        multiplier = 1.9;
        break;
      default:
        multiplier = 1.2;
    }
    return BMR * multiplier;
  };

  const getInsights = (TDEE) => {
    if (TDEE < 1500) {
      return "Your TDEE is quite low. Consider increasing your activity level or consulting a nutritionist.";
    } else if (TDEE < 2000) {
      return "Your TDEE is moderate. Maintain a balanced diet and regular exercise.";
    } else if (TDEE < 2500) {
      return "Your TDEE is high. Ensure you are consuming enough calories to support your activity level.";
    } else {
      return "Your TDEE is very high. Consider consulting a nutritionist to ensure you are meeting your nutritional needs.";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age && weight && height) {
      const calculatedBMR = checkGender(gender, age, height, weight);
      const calculatedTDEE = checkTrain(train, calculatedBMR);
      setBMR(calculatedBMR.toFixed(2));
      setTDEE(calculatedTDEE.toFixed(2));
      setInsights(getInsights(calculatedTDEE));
    }
  };

  return (
    <>
      <Nav />
      <section className="my-[5em] h-[80vh] flex flex-col justify-center items-center">
        <form className="space-y-5 font-sans" onSubmit={handleSubmit}>
          <h1 className="text-[#D6FD51] text-6xl text-center font-serif ">
            CalcBMR
          </h1>
          <div className="input-group">
            <input
              className="input age w-[20em] h-[3.5em] border-white rounded-xl "
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <label className="user-label">Age in (Years)</label>
          </div>
          <div className="input-group">
            <input
              className="input weight w-[20em] h-[3.5em] border-white rounded-xl "
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
            <label className="user-label">Weight in (KG)</label>
          </div>
          <div className="input-group">
            <input
              className="input height w-[20em] h-[3.5em] border-white rounded-xl"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
            <label className="user-label">Height in (CM)</label>
          </div>
          <div className="input-group">
            <select
              className="input gender w-[20em] h-[3.5em] border-[0.2em] border-white rounded-xl"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male" className="option">Male</option>
              <option value="female" className="option">Female</option>
            </select>
          </div>
          <div className="input-group">
            <select
              className="input train w-[20em] h-[3.5em] border-[0.2em] border-white rounded-xl"
              value={train}
              onChange={(e) => setTrain(e.target.value)}
            >
              <option value="sedentary" className="option">Sedentary (No Exercise)</option>
              <option value="lightlyActive" className="option">Lightly Active (1/3 Exercise)</option>
              <option value="moderatelyActive" className="option">Moderately Active (3/5 Exercise)</option>
              <option value="veryActive" className="option">Very Active (6/7 Exercise)</option>
              <option value="superActive" className="option">Super Active (high levels of activity)</option>
            </select>
          </div>
          <button
            type="submit"
            className="submit w-full h-[2.5em] text-2xl bg-[#D6FD51] text-black rounded-xl transition-all hover:text-white hover:bg-[#93a752]"
          >
            Submit
          </button>
        </form>
        {BMR && TDEE && (
          <div className="mt-8 text-center">
            <h2 className="text-3xl text-[#D6FD51]">Results</h2>
            <p className="text-xl text-white">BMR: {BMR} kcal/day</p>
            <p className="text-xl text-white">TDEE: {TDEE} kcal/day</p>
            <p className="text-lg text-[#D6FD51] mt-4">{insights}</p>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Bmr;