import "./style.scss";
import Title from "../components/Ttile";
import BlogPost from "../components/BlogPost/BlogPost";

// import Test from "../components/Test/Test";
export default function Blog() {
  return (
    <div className="blog container2">
      <Title tag="h1" text="Блог" />
      {/* <h3 className="blog__subtitle">
        Добро пожаловать в мой блог! Здесь вы найдете информацию о моей работе в
        области фронтенд-разработки. Буду рада поделиться с вами своим опытом и
        интересными проектами.
      </h3> */}
      <BlogPost />
      <BlogPost />
    </div>
  );
}
