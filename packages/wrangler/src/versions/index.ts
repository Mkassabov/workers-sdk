import { createNamespace } from "../../../wrangler-shared/src/core/create-command";

export const versionsNamespace = createNamespace({
	metadata: {
		description:
			"🫧  List, view, upload and deploy Versions of your Worker to Cloudflare",
		status: "stable",
		owner: "Workers: Authoring and Testing",
	},
});
