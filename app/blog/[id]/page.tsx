import { getPostById } from "@/api/api";
import "./style.scss";
import Title from "@/app/components/Title/Title";


export default function PageSlug({ params }: any) {
  const post = getPostById(params.id + ".html");

  return (
    <div className="post container">
      <div className="post__content">
        <Title>{post.title}</Title>
        <div className="post__info">
          <span className="post__info-date">{post.date}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
