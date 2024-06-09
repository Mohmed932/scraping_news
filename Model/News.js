import { Schema, model } from "mongoose";

const News_Data = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    kind: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
      required: true,
    },
    desc: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const News = model("News", News_Data);
