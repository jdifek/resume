'use client';

import { Home, Layout, Settings } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const items = [
	{ icon: Home, label: 'Home' },
	{ icon: Layout, label: 'Templates' },
	{ icon: Settings, label: 'Settings' },
];

export function MobileNav() {
	return (
		<nav className='fixed bottom-0 left-0 right-0 border-t bg-background'>
			<div className='flex items-center justify-around p-2'>
				{items.map(({ icon: Icon, label }) => (
					<button
						key={label}
						className={cn(
							'flex flex-col items-center justify-center p-2 text-sm',
							label === 'Home' ? 'text-primary' : 'text-muted-foreground',
						)}
					>
						<Icon className='h-5 w-5 mb-1' />
						<span>{label}</span>
					</button>
				))}
			</div>
		</nav>
	);
}
