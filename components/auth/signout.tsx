"use client";

import { signOut } from "next-auth/react";

export default function SignOut({
	children,
}: { readonly children: React.ReactNode }) {
	return (
		<button className="w-full" onClick={() => signOut()} type="button">
			{children}
		</button>
	);
}
