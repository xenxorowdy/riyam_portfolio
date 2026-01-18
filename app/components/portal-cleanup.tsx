"use client";

import { useEffect } from "react";

/**
 * Cleans up empty Next.js portal elements that have zero dimensions
 * This fixes issues with unused portals cluttering the DOM
 */
export function PortalCleanup() {
	useEffect(() => {
		const cleanup = () => {
			// Find all nextjs-portal elements
			const portals = document.querySelectorAll("nextjs-portal");
			
			portals.forEach((portal) => {
				const element = portal as HTMLElement;
				const rect = element.getBoundingClientRect();
				
				// Remove portals with zero dimensions or no content
				if (
					(rect.width === 0 && rect.height === 0) ||
					element.children.length === 0
				) {
					// Only remove if it has cursor-related attributes (likely unused)
					if (element.hasAttribute("data-cursor-element-id")) {
						element.remove();
					}
				}
			});
		};

		// Run cleanup after a short delay to ensure DOM is ready
		const timeoutId = setTimeout(cleanup, 100);
		
		// Also run on DOM mutations (in case portals are added dynamically)
		const observer = new MutationObserver(cleanup);
		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});

		return () => {
			clearTimeout(timeoutId);
			observer.disconnect();
		};
	}, []);

	return null;
}
