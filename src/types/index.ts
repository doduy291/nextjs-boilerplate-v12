/* Blog Page types */
export interface Blog {
  id: number | string;
  title: string;
  description: string;
  slug: string;
}

export interface Blogs extends Array<Blog> {}
