'use client';

import { useRouter } from 'next/navigation';
import { PremiumBanner } from '@/components/premium-banner';
import { ActionButtons } from '@/components/action-buttons';
import { ResumeList } from '@/components/resume-list';
import { MobileNav } from '@/components/layout/mobile-nav';
import { PageHeader } from '@/components/layout/page-header';
import { ROUTES } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const mockResumes = [
	{
		id: '1',
		title: 'UI/UX Designer',
		style: 'Modern',
		progress: 85,
		lastModified: '15 May 2023',
	},
	{
		id: '2',
		title: 'Graphic Designer',
		style: 'Simple',
		progress: 45,
		lastModified: '15 May 2023',
	},
	{
		id: '3',
		title: 'Product Designer',
		style: 'Professional',
		progress: 20,
		lastModified: '15 May 2023',
	},
];

export default function Home() {
	const router = useRouter();

	const handleCreateNew = () => {
		router.push(ROUTES.NEW_RESUME);
	};

	return (
		<main className='min-h-screen bg-gray-50 pb-16'>
			<div className='container max-w-md mx-auto p-4'>
				<PageHeader title='Resume' />
				<PremiumBanner />
				<ActionButtons onNewResume={handleCreateNew} />
				<ResumeList resumes={mockResumes} />
				<Button className='bg-blue-600 rounded-xl w-full h-12 m-auto my-3 hover:bg-indigo-300 hover:text-blue-950'>
					Create Resume
				</Button>
			</div>
			<MobileNav />
		</main>
	);
}
