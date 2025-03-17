import Image from 'next/image';
import Link from 'next/link';

export default function About() {
	return (
		<>
			<link rel="redirect_uri" href="/api/auth/callback/misskey" />
			<div className="h-app">
				<Image src="/logo.png" className='u-logo' alt='application logo' width={114} height={114}/>
				<Link href='/' className='u-url p-name'>Misskey Portal</Link>
			</div>
		</>
	);
}
