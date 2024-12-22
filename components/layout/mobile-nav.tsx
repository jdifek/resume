'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layout, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/lib/constants';

const items = [
	{ icon: Home, label: 'Home', href: ROUTES.HOME },
	{ icon: Layout, label: 'Templates', href: ROUTES.TEMPLATES },
	{ icon: Settings, label: 'Settings', href: ROUTES.SETTINGS },
];

export function MobileNav() {
	const pathname = usePathname();

	return (
		<nav className='fixed bottom-0 left-0 right-0 border-t bg-background'>
			<div className='flex items-center justify-center gap-8 p-2 px-4'>
				{items.map(({ icon: Icon, label, href }) => (
					<Link
						key={label}
						href={href}
						className={cn(
							'flex flex-col items-center justify-center p-2 text-sm',
							pathname === href ? 'text-primary' : 'text-muted-foreground',
						)}
					>
						<Icon className='h-5 w-5 mb-1' />
						<span>{label}</span>
					</Link>
				))}
			</div>
		</nav>
	);
}
