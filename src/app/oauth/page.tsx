import Head from 'next/head';

export default function OAuth() {
	return (
		<>
			<Head>
				<link rel="redirect_uri" href="/api/auth/callback/misskey" />
			</Head>
			<div className="h-app">
				<img src="/logo.png" className="u-logo" />
				<a href="/" className="u-url p-name">Misskey Portal</a>
			</div>
		</>
	);
}
