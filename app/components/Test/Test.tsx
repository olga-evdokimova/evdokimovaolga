import Image from "next/image";
import "./Test.scss";
const MyComponent = () => {
  return (
    <div>
      <div style={{ float: "left", marginRight: "10px" }}>
        <Image
          src="https://i.ibb.co/kQ4T5tX/logo.png"
          alt="Картинка"
          width={300}
          height={300}
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lorem
        at nunc tincidunt aliquet. Donec auctor, mauris ut lacinia ultrices,
        ipsum nunc tincidunt urna, vitae aliquet justo risus at justo.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Nullam auctor, lacus vitae consequat aliquam, nunc nunc
        tincidunt urna, vitae aliquet justo risus at justo.
      </p>
    </div>
  );
};
export default MyComponent;
