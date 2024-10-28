export interface Env {
	VITE_PROJECT_NAME: string;
	VITE_PUBLIC_PATH: string;
	VITE_BASE_API: string;
	favIcon: string;
}

declare global {
	namespace linc {
		const VITE_PROJECT_NAME: string;
	}
}
