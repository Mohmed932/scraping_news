import mongoose from "mongoose";
import { News } from "../Model/News.js";

export const DeleteDocuments = async () => {
  try {
    // استخدم الأمر الإداري المباشر للحصول على إحصائيات المجموعة
    const stats = await mongoose.connection.db.command({ collStats: "news" });
    const storageSizeMB = stats.storageSize / (1024 * 1024); // تحويل الحجم إلى ميجابايت

    if (storageSizeMB >= 480) {
      const oldestDocument = await News.find().sort({ createdAt: 1 }).limit(1);
      if (oldestDocument.length > 0) {
        await News.deleteOne({ _id: oldestDocument[0]._id });
        console.log("The documents have been deleted successfully.");
        console.log(`Database size: ${storageSizeMB.toFixed(2)} MB`);
      } else {
        console.log("No documents found to delete.");
      }
    } else {
      console.log(`Database size is within the limit: ${storageSizeMB.toFixed(2)} MB`);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
