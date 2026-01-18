"use client";

import { useEffect } from "react";

export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
	useEffect(() => {
		// Use requestIdleCallback for non-blocking view tracking
		const trackView = () => {
			fetch("/api/incr", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ slug }),
			}).catch(() => {
				// Silently fail - view tracking shouldn't block the page
			});
		};

		// Use requestIdleCallback if available, otherwise setTimeout
		if (typeof window !== "undefined" && "requestIdleCallback" in window) {
			requestIdleCallback(trackView, { timeout: 2000 });
		} else {
			setTimeout(trackView, 0);
		}
	}, [slug]);

	return null;
};
