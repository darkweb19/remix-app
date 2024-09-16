import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div className="flex h-screen items-center justify-center">
			Hello world
			<Link className="border ml-10 p-3 rounded-3xl" to={"/forms"}>
				Forms
			</Link>
		</div>
	);
}
