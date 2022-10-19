import styles from "../styles.module.scss";
import type { Blog } from "../../../types";

interface Props {
  blog: Blog;
}

const BlogDetail: React.FC<Props> = ({ blog }) => {
  return (
    <div className={styles.container}>
      <h1>Blog - {blog?.id} </h1>
      <h2>Title: {blog?.title} </h2>
      <h2>Description: {blog?.description} </h2>
      <h2>Slug: {blog?.slug} </h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quibusdam architecto optio recusandae culpa, blanditiis ullam iste
        facere unde! Facere rem aperiam praesentium incidunt pariatur quos
        labore ab unde molestiae.
      </p>
    </div>
  );
};

export default BlogDetail;
