'use client';

import { Crown, Plus } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { Progress } from '@/src/components/ui/progress';
import { Resume } from '../types';

interface ResumeListProps {
	resumes: Resume[];
	onCreateNew: () => void;
}

export function ResumeList({ resumes, onCreateNew }: ResumeListProps) {
	return (
		<div className='space-y-6'>
			<div className='flex items-center justify-between'>
				<h1 className='text-2xl font-semibold'>Resume</h1>
				<Button variant='ghost' size='sm'>
					<Crown className='mr-2 h-4 w-4 text-yellow-500' />
					Go Premium
				</Button>
			</div>

			<div className='grid gap-4'>
				<Button
					variant='outline'
					className='justify-start'
					onClick={onCreateNew}
				>
					<Plus className='mr-2 h-4 w-4' />
					New Resume
				</Button>

				<div className='space-y-2'>
					<h2 className='text-lg font-medium'>My Resumes</h2>
					{resumes.map((resume) => (
						<Card key={resume.id} className='p-4'>
							<div className='flex items-center justify-between mb-2'>
								<div>
									<h3 className='font-medium'>{resume.title}</h3>
									<p className='text-sm text-muted-foreground'>
										{resume.lastModified}
									</p>
								</div>
								<span className='text-sm font-medium'>{resume.progress}%</span>
							</div>
							<Progress value={resume.progress} className='h-2' />
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
