import UploadForm from "@/components/UploadForm";

const Page = () => {
  return (
    <main className="new-book">
      <section className="flex flex-col gap-5 text-center">
        <h1 className="page-title-xl">Add a New Book</h1>
        <p className="subtitle">
          Upload a PDF to generate your interactive reading experience
        </p>
      </section>

      <UploadForm />
    </main>
  );
};

export default Page;

// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

// import Link from "next/link";
// import { ArrowLeft, MicOff, Mic } from "lucide-react";

// import { getBookBySlug } from "@/lib/actions/book.actions";
// import VapiControls from "@/components/VapiControls";

// export default async function BookDetailsPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { userId } = await auth();
//   console.log(userId);

//   if (!userId) {
//     redirect("/sign-in");
//   }

//   const { slug } = await params;
//   const result = await getBookBySlug(slug);

//   if (!result.success || !result.data) {
//     redirect("/");
//   }

//   const book = result.data;

//   return (
//     <div className="book-page-container">
//       <Link href="/" className="back-btn-floating">
//         <ArrowLeft className="size-6 text-[#212a3b]" />
//       </Link>

//       <VapiControls book={book} />
//     </div>
//   );
// }
