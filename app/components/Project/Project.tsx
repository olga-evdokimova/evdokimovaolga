// import "./Project.scss";
// import Link from "next/link";
// import Image, { StaticImageData } from "next/image";

// type ProjectProps = {
//   id: number;
//   img: StaticImageData;
//   title: string;
//   text: string;
//   href: string;
// };
// export default function Project(props: ProjectProps) {
//   const link = props.href.startsWith("http");

//   return (
//     <div className="project">
//       <div className="project__img">
//         <Image
//           src={props.img}
//           alt=""
//           fill
//           sizes="200px"
//           style={{ borderRadius: "4px", objectFit: "cover" }}
//         />
//       </div>
//       <div className="project__content">
//         <Link href={props.href}>
//           <div className="project__title">{props.title}</div>
//         </Link>
//         <div className="project__text">{props.text}</div>
//       </div>
//     </div>
//   );
// }
