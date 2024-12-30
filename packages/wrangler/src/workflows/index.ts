import { createNamespace } from "../../../wrangler-shared/src/core/create-command";

export const workflowsNamespace = createNamespace({
	metadata: {
		description: "🔁 Manage Workflows",
		owner: "Product: Workflows",
		status: "open-beta",
	},
});

export const workflowsInstanceNamespace = createNamespace({
	metadata: {
		description: "Manage Workflow instances",
		owner: "Product: Workflows",
		status: "open-beta",
	},
});
