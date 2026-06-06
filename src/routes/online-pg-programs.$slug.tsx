import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Section } from "@/components/ui-bits";
import { getCourse } from "@/data/courses";
import { CourseDetail } from "./online-ug-programs.$slug";

export const Route = createFileRoute("/online-pg-programs/$slug")({
  head: ({ params }) => {
    const c = getCourse(params.slug);
    if (!c) return { meta: [{ title: "Course not found" }] };
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDescription },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDescription },
      ],
    };
  },
  loader: ({ params }) => {
    const c = getCourse(params.slug);
    if (!c || c.level !== "pg") throw notFound();
    return c;
  },
  component: () => <CourseDetail course={Route.useLoaderData()} backTo="/online-pg-programs" backLabel="All PG Programs" />,
  notFoundComponent: () => <SiteLayout><Section><p>Course not found.</p></Section></SiteLayout>,
});
