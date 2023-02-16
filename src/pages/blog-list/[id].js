import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { baseUrl } from "../api/api";
import BlogsDetails from "@/components/BlogsDetails/BlogsDetails";
const BlogDetails = ({ blogs }) => {
  return (
    <>
      <Header />
      <BlogsDetails post={blogs} />
      <Footer />
    </>
  );
};

export default BlogDetails;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { data } = await baseUrl.get(`/detail_tyre_blog/${id}`);
  return {
    props: {
      blogs: data,
    },
  };
}
