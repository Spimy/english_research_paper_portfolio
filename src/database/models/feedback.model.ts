import mongodb from 'mongoose';

export interface IFeedback {
	username?: string;
	feedback: string;
}

const FeedbackSchema = new mongodb.Schema<IFeedback>(
	{
		username: {
			type: String,
			required: false
		},
		feedback: {
			type: String,
			required: true
		}
	},
	{ timestamps: { createdAt: 'createdAt' } }
);

export const Feedback =
	(mongodb.models['Feedback'] as mongodb.Model<IFeedback>) ||
	mongodb.model<IFeedback>('Feedback', FeedbackSchema);
