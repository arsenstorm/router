export default function MagicLinkEmail({
	url,
	host,
}: {
	readonly url: string;
	readonly host: string;
}) {
	return (
		<>
			<h1 className="text-lg opacity-60">Login to {host}</h1>
			<a href={url} target="_blank" rel="noreferrer" className="mb-4 block">
				Click here to log in with this magic link
			</a>
			<p className="my-4 opacity-50">
				If you didn&apos;t try to login, you can safely ignore this email.
			</p>
			<a href="https://router.so" target="_blank" rel="noreferrer" className="underline">
				router.so
			</a>
		</>
	);
}
