import { PrismaClient } from "@prisma/client";
import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useTransition } from "react";

const prisma = new PrismaClient();

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const email = String(formData.get("email"));
	const name = String(formData.get("name"));

	const user = await prisma.user.create({
		data: {
			name: name,
			email: email,
		},
	});
	console.log(user);
	return user;
}

export default function FormClient() {
	const data = useActionData();
	const navigation = useNavigation();
	console.log(navigation.state);
	return (
		<div className="h-screen flex w-full justify-center items-center">
			<Form method="post" className=" p-3 h-fit flex flex-col gap-4">
				<input
					className="border rounded-xl p-2"
					type="email"
					name="email"
					placeholder="Email"
				/>
				<input
					className="border rounded-xl p-2"
					type="name"
					name="name"
					placeholder="Name"
				/>
				<button
					type="submit"
					className="p-3 rounded-2xl border border-slate-700"
				>
					{navigation.state == "submitting" ? "........" : "Submit"}
				</button>
			</Form>
		</div>
	);
}
