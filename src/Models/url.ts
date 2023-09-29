import mongoose from "mongoose";

// export interface URLDocument extends Document {
// 	shortId: string;
// 	redirectURL: string;
// 	visitHistory: { timestamp: number }[];
// }

const urlSchema = new mongoose.Schema(
	{
		shortId: {
			type: String,
			unique: true,
			required: true,
		},
		redirectURL: {
			type: String,
			required: true,
		},
		createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
		visitHistory: [{ timestamp: { type: Number } }],
	},
	{ timestamps: true }
);

// defining model
// interface URLModel extends Model<URLDocument> {}
const URLModel = mongoose.model("URL", urlSchema);
export default URLModel;
