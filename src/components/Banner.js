import bannerImage from "../james-kang.jpeg";

export default function Banner() {
  return (
    <div className="banner">
      <div className="background"></div>
      <img src={bannerImage} alt="James Kang" />
    </div>
  );
}
