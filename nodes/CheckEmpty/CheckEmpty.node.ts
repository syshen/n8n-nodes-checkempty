import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';


export class CheckEmpty implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Check Empty',
		name: 'CheckEmpty',
		icon: 'file:empty.svg',
		group: ['transform'],
		version: 1,
		description: 'Check the previous node output is empty',
		defaults: {
			name: 'CheckEmpty',
		},
		inputs: ['main'],
		// eslint-disable-next-line n8n-nodes-base/node-class-description-outputs-wrong
		outputs: ['main', 'main'],
		outputNames: ['empty', 'not empty'],
		credentials: [
		],
		properties: [
		],
	};


	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();

		if (items.length === 1 && Object.keys(items[0].json).length === 0) {
			return [items, []];
		} else {
			return [[], items];
		}
	}
}
