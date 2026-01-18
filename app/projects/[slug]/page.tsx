import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function ProjectPage({ params }: Props) {
	if (!params || !params.slug) {
		notFound();
	}
	
	const slug = params.slug;
	const project = allProjects.find((project) => project.slug === slug);

	// Check if project exists and is published
	if (!project || !project.published) {
		notFound();
	}

	// Get views with error handling - non-blocking with fast timeout
	let views = 0;
	try {
		// Use a fast timeout to prevent blocking page render
		const viewData = await Promise.race([
			redis.get<number>(["pageviews", "projects", slug].join(":")),
			new Promise<null>((resolve) => setTimeout(() => resolve(null), 500)), // 500ms timeout
		]);
		views = viewData ?? 0;
	} catch (error) {
		// Silently fail - views are not critical for page render
		views = 0;
	}

	return (
		<div className="bg-zinc-50 min-h-screen">
			<Header project={project} views={views} />
			<ReportView slug={project.slug} />

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				{project.body?.code ? (
					<Mdx code={project.body.code} />
				) : (
					<p className="text-zinc-600">Content not available.</p>
				)}
			</article>
		</div>
	);
}
