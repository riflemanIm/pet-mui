import React from "react";

export default function About({ menu }) {
  return <div></div>;
}
// export async function getServerSideProps(context) {
//   const locale = context.locale;
//   const postData1 = {
//     method: "Post",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       locale,
//     }),
//   };
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu`, postData1);
//   const menu = await res.json();

//   return { props: { menu } };
// }
