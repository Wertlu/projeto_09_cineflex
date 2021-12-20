import "./footer.css";
export default function Footer({title, img, weekDay, hour}) {
  return (
    <footer>
      <div className="movie">
        <img src={img} alt="" />
      </div>
      <p>{title} {hour !== undefined && (
        <>
        {weekDay} - {hour}
        </>
      )}</p>
    </footer>
  );
}