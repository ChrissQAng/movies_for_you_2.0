import "./Starrating.css";
const Starrating = (props) => {
  const rateArray = [];

  for (let i = 0; i <= 9; i++) {
    if (props.rate > i && props.rate - i >= 1) {
      rateArray.push("full.svg");
    } else if (props.rate - i >= 0.5) {
      rateArray.push("half.svg");
    } else {
      rateArray.push("empty.svg");
    }
  }
  console.log(rateArray);
  return (
    <div className="star-wrapper">
      {rateArray.map((star, index) => (
        <img key={index} src={`/public/img/${star}`} alt="" />
      ))}
    </div>
  );
};

export default Starrating;
