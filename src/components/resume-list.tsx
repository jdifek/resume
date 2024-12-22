'use client';

import { Progress } from '@/src/components/ui/progress';
import type { Resume } from '@/src/lib/types';

interface ResumeListProps {
	resumes: Resume[];
}

export function ResumeList({ resumes }: ResumeListProps) {
	return (
		<div className='space-y-4'>
			<h2 className='text-sm font-medium text-muted-foreground'>My Resumes</h2>
			{resumes.map((resume) => (
				<div key={resume.id} className='bg-white p-4 rounded-xl'>
					<div className='flex items-center justify-between mb-1'>
						<div>
							<h3 className='font-medium'>{resume.title}</h3>
							<p className='text-sm text-muted-foreground'>{resume.style}</p>
						</div>
						<div className='text-sm font-medium'>{resume.progress}%</div>
					</div>
					<div className='flex items-center gap-4'>
						<Progress value={resume.progress} className='flex-1' />
						<span className='text-sm text-muted-foreground'>
							{resume.lastModified}
						</span>
					</div>
				</div>
			))}
		</div>
	);
}
