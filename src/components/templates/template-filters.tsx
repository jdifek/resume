'use client';

import { Button } from '@/src/components/ui/button';

const filters = ['All', 'Recommended', 'Premium', 'Most Used'];

export function TemplateFilters() {
	return (
		<div className='flex gap-2 mb-6 overflow-x-auto pb-2'>
			{filters.map((filter) => (
				<Button
					key={filter}
					variant={filter === 'All' ? 'default' : 'ghost'}
					size='sm'
					className='whitespace-nowrap'
				>
					{filter}
				</Button>
			))}
		</div>
	);
}
